/**
 * IndexNow — lógica compartilhada entre o endpoint /api/indexnow (disparado pelo
 * Vercel Cron) e o script CLI scripts/indexnow.mjs.
 *
 * Notifica buscadores (Bing → ChatGPT, Yandex, Seznam) de que as URLs mudaram,
 * sem esperar o crawl natural. Manter INDEXNOW_URLS em sincronia com o sitemap.
 */

export const INDEXNOW_KEY = '55fb7b5ab071828f3a53f0339628da3c'
export const INDEXNOW_HOST = 'editus.com.br'
const ORIGIN = `https://${INDEXNOW_HOST}`

// Endpoint genérico do IndexNow: propaga para todos os buscadores participantes.
const ENDPOINT = 'https://api.indexnow.org/indexnow'

// URLs públicas do site. Manter em sincronia com nuxt.config.ts (sitemap.urls)
// e com os slugs de composables/useGuides.ts.
export const INDEXNOW_URLS: string[] = [
  `${ORIGIN}/`,
  `${ORIGIN}/sobre`,
  `${ORIGIN}/checklist-habilitacao`,
  `${ORIGIN}/faq`,
  `${ORIGIN}/calculadora-custo-financeiro`,
  `${ORIGIN}/diagnostico`,
  `${ORIGIN}/guia`,
  `${ORIGIN}/guia/o-que-e-pncp`,
  `${ORIGIN}/guia/habilitacao-licitacao`,
  `${ORIGIN}/guia/consulta-ceis-cnep-cepim`,
  `${ORIGIN}/guia/lei-14133-resumo`,
  `${ORIGIN}/guia/pregao-eletronico-como-funciona`,
  `${ORIGIN}/guia/como-participar-de-licitacao`,
  `${ORIGIN}/guia/mei-pode-participar-de-licitacao`,
  `${ORIGIN}/guia/o-que-e-sicaf`,
  `${ORIGIN}/guia/certidao-vencida-licitacao`,
  `${ORIGIN}/guia/impugnacao-de-edital`,
  `${ORIGIN}/guia/carta-de-credenciamento-licitacao`,
  `${ORIGIN}/guia/margem-em-licitacao`,
  `${ORIGIN}/guia/como-calcular-bdi`,
  `${ORIGIN}/guia/dispensa-de-licitacao`,
  `${ORIGIN}/guia/atestado-de-capacidade-tecnica`,
  `${ORIGIN}/guia/venci-a-licitacao-e-agora`,
  `${ORIGIN}/guia/governo-atrasou-pagamento`,
  `${ORIGIN}/guia/empate-ficto-me-epp`,
  `${ORIGIN}/guia/licitacao-de-alimentos`,
]

export interface IndexNowResult {
  ok: boolean
  status: number
  count: number
  detail?: string
}

// Submete a lista de URLs ao IndexNow. Retorna o resultado sem lançar exceção.
export async function submitIndexNow(urls: string[] = INDEXNOW_URLS): Promise<IndexNowResult> {
  const body = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    })

    if (res.ok) {
      return { ok: true, status: res.status, count: urls.length }
    }
    const detail = await res.text().catch(() => '')
    return { ok: false, status: res.status, count: urls.length, detail: detail.slice(0, 200) }
  }
  catch (err) {
    return { ok: false, status: 0, count: urls.length, detail: String(err).slice(0, 200) }
  }
}
