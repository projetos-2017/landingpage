/**
 * GET /api/pncp-resumo-segmento?segmento=tecnologia
 *
 * Resumo de contratações recentes do PNCP filtradas por segmento (busca
 * textual no objeto da compra — ver server/utils/pncp.ts para as limitações
 * dessa abordagem). Protótipo da página /licitacoes/[segmento].
 *
 * Cache de 6h por segmento: a API do PNCP não tem SLA documentado e a
 * varredura de várias páginas é custosa — não vale repetir a cada acesso.
 * Em falha, retorna { ok: false } e a página usa um fallback estático
 * (nunca quebra por causa do PNCP estar indisponível).
 */

import { resumoPorSegmento } from '../utils/pncp'

// Termos deliberadamente restritivos: testado ao vivo contra amostras reais
// do PNCP, "sistema" sozinho gera falso-positivo em objetos como "sistema de
// drenagem pluvial" e "sistema de fraudes farmacêuticas" — nada a ver com TI.
// Preferimos menos correspondências corretas a números inflados por ruído.
const SEGMENTOS: Record<string, string[]> = {
  tecnologia: ['software', 'licença de uso de sistema', 'sistema informatizado', 'tecnologia da informação', 'infraestrutura de ti', 'equipamentos de informática', 'equipamentos de informatica'],
}

const CACHE_TTL_MS = 6 * 60 * 60 * 1000
const cache = new Map<string, { data: unknown, at: number }>()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const segmento = String(query.segmento ?? '')
  const keywords = SEGMENTOS[segmento]

  if (!keywords) {
    throw createError({ statusCode: 400, message: 'Segmento não suportado.' })
  }

  const cached = cache.get(segmento)
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return { ok: true, cached: true, ...(cached.data as object) }
  }

  const resumo = await resumoPorSegmento(keywords).catch(() => null)
  if (!resumo) {
    return { ok: false, cached: false }
  }

  cache.set(segmento, { data: resumo, at: Date.now() })
  return { ok: true, cached: false, ...resumo }
})
