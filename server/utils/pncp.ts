/**
 * Cliente da API pública de consulta do PNCP (pncp.gov.br/api/consulta).
 *
 * A API é aberta (sem autenticação) mas: (1) não documenta CORS — tratamos como
 * não confiável para chamada direta do browser, por isso todo acesso é
 * server-side; (2) não tem filtro nativo por segmento/categoria (CATMAT/CATSER
 * só aparece no detalhe de itens, não na busca agregada) — o filtro por
 * segmento aqui é textual, sobre o campo `objetoCompra`, e é portanto
 * aproximado, não uma contagem oficial exaustiva; (3) não tem SLA documentado
 * e a comunidade relata instabilidade — por isso timeout curto, cache e
 * fallback gracioso (nunca quebra a página se o PNCP estiver fora do ar);
 * (4) uma busca sem resultados retorna HTTP 204 sem corpo, não 200 com lista
 * vazia — tratado explicitamente abaixo.
 *
 * Docs: https://pncp.gov.br/api/consulta/swagger-ui/index.html
 */

const PNCP_BASE = 'https://pncp.gov.br/api/consulta/v1'

// Código da modalidade "Pregão Eletrônico" na tabela de domínio do PNCP —
// a mais comum, usada para manter a amostra do protótipo previsível.
const MODALIDADE_PREGAO_ELETRONICO = 6

export interface PncpContratacao {
  orgaoEntidade?: { razaoSocial?: string }
  unidadeOrgao?: { ufSigla?: string, municipioNome?: string }
  objetoCompra?: string
  valorTotalEstimado?: number
  modalidadeNome?: string
  dataPublicacaoPncp?: string
  numeroControlePNCP?: string
}

interface PncpPage {
  data: PncpContratacao[]
  totalRegistros: number
  totalPaginas: number
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10).replace(/-/g, '')
}

// Busca uma página de contratações publicadas numa janela de dias. Retorna
// [] em vez de lançar em qualquer falha — o chamador decide o fallback.
async function fetchPage(dataInicial: string, dataFinal: string, pagina: number): Promise<PncpPage | null> {
  const url = `${PNCP_BASE}/contratacoes/publicacao`
    + `?dataInicial=${dataInicial}&dataFinal=${dataFinal}`
    + `&codigoModalidadeContratacao=${MODALIDADE_PREGAO_ELETRONICO}`
    + `&pagina=${pagina}&tamanhoPagina=50`

  // Sem SLA documentado e com relatos de instabilidade em horario comercial
  // (ver comentario no topo do arquivo) — timeout generoso para nao descartar
  // respostas legitimas so um pouco lentas.
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(15000),
  })

  // PNCP retorna 204 (sem corpo) quando não há resultados — não é erro.
  if (res.status === 204) return { data: [], totalRegistros: 0, totalPaginas: 0 }
  if (!res.ok) {
    console.error('[pncp] resposta nao-ok', { status: res.status, body: await res.text().catch(() => '') })
    return null
  }

  const json = await res.json() as { data?: PncpContratacao[], totalRegistros?: number, totalPaginas?: number }
  return {
    data: json.data ?? [],
    totalRegistros: json.totalRegistros ?? 0,
    totalPaginas: json.totalPaginas ?? 0,
  }
}

export interface SegmentoResumo {
  amostraTotal: number
  correspondentes: number
  valorEstimadoTotal: number
  orgaos: string[]
  exemplos: Array<{ objeto: string, orgao: string, uf: string, valor: number, url: string }>
  janelaDias: number
  geradoEm: string
}

// Agrega contratações recentes (pregão eletrônico) cujo objeto contém alguma
// das palavras-chave do segmento. Filtro textual, não oficial — ver nota no
// topo do arquivo. Varre no máximo MAX_PAGINAS (sequencial, não paralelo) para
// manter o pior caso limitado mesmo com o timeout de 15s por página.
const MAX_PAGINAS = 4
const JANELA_DIAS = 30

export async function resumoPorSegmento(keywords: string[]): Promise<SegmentoResumo | null> {
  const hoje = new Date()
  const inicio = new Date(hoje.getTime() - JANELA_DIAS * 24 * 60 * 60 * 1000)
  const dataInicial = formatDate(inicio)
  const dataFinal = formatDate(hoje)

  const termos = keywords.map(k => k.toLowerCase())
  let amostraTotal = 0
  const correspondentesItens: PncpContratacao[] = []

  for (let pagina = 1; pagina <= MAX_PAGINAS; pagina++) {
    const page = await fetchPage(dataInicial, dataFinal, pagina).catch((err: unknown) => {
      console.error('[pncp] fetchPage falhou', { pagina, error: String(err) })
      return null
    })
    if (!page) return null // falha de rede/API — chamador cai no fallback
    if (page.data.length === 0) break

    amostraTotal += page.data.length
    for (const item of page.data) {
      const objeto = (item.objetoCompra ?? '').toLowerCase()
      if (termos.some(t => objeto.includes(t))) correspondentesItens.push(item)
    }

    if (pagina >= page.totalPaginas) break
  }

  const orgaosSet = new Set<string>()
  let valorEstimadoTotal = 0
  for (const item of correspondentesItens) {
    if (item.orgaoEntidade?.razaoSocial) orgaosSet.add(item.orgaoEntidade.razaoSocial)
    valorEstimadoTotal += item.valorTotalEstimado ?? 0
  }

  const exemplos = correspondentesItens.slice(0, 6).map(item => ({
    objeto: item.objetoCompra ?? 'Objeto não informado',
    orgao: item.orgaoEntidade?.razaoSocial ?? 'Órgão não informado',
    uf: item.unidadeOrgao?.ufSigla ?? '',
    valor: item.valorTotalEstimado ?? 0,
    url: item.numeroControlePNCP
      ? `https://pncp.gov.br/app/editais/${encodeURIComponent(item.numeroControlePNCP)}`
      : 'https://pncp.gov.br',
  }))

  return {
    amostraTotal,
    correspondentes: correspondentesItens.length,
    valorEstimadoTotal,
    orgaos: [...orgaosSet].slice(0, 12),
    exemplos,
    janelaDias: JANELA_DIAS,
    geradoEm: hoje.toISOString(),
  }
}
