#!/usr/bin/env node
/* eslint-disable no-console -- script de CLI: stdout é a saída pretendida */
/**
 * IndexNow — notifica buscadores (Bing → ChatGPT, Yandex, Seznam, etc.) de que
 * as URLs do site mudaram, sem esperar o crawl natural.
 *
 * Por que importa: o ChatGPT usa o índice do Bing. Poucos concorrentes usam
 * IndexNow — é o "alpha barato" para aparecer em respostas de IA rapidamente.
 *
 * Pré-requisito: o arquivo public/<KEY>.txt precisa estar publicado e acessível
 * em https://editus.com.br/<KEY>.txt (o build do Nuxt copia public/ para a raiz).
 *
 * Uso:
 *   node scripts/indexnow.mjs                      # envia a lista padrão
 *   node scripts/indexnow.mjs https://editus.com.br/faq  # envia URL(s) específica(s)
 *
 * NOTA: em produção, o disparo é AUTOMÁTICO via Vercel Cron → GET /api/indexnow
 * (ver vercel.json e server/utils/indexnow.ts). Este script é o disparo MANUAL de
 * fallback / uso local. A lista canônica de URLs vive em server/utils/indexnow.ts;
 * manter as duas em sincronia ao adicionar páginas.
 */

const KEY = '55fb7b5ab071828f3a53f0339628da3c'
const HOST = 'editus.com.br'
const ORIGIN = `https://${HOST}`
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`

// Endpoint genérico do IndexNow: propaga para todos os buscadores participantes.
const ENDPOINT = 'https://api.indexnow.org/indexnow'

// URLs padrão do site (mantenha em sincronia com o sitemap das páginas públicas).
const DEFAULT_URLS = [
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
  `${ORIGIN}/software-de-licitacoes`,
  `${ORIGIN}/ia-para-licitacoes`,
  `${ORIGIN}/licitacoes/tecnologia`,
]

async function main() {
  const cliUrls = process.argv.slice(2).filter(u => u.startsWith('http'))
  const urlList = cliUrls.length > 0 ? cliUrls : DEFAULT_URLS

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }

  console.log(`[IndexNow] Enviando ${urlList.length} URL(s) para ${ENDPOINT}`)
  urlList.forEach(u => console.log(`  • ${u}`))

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  // 200/202 = aceito. 422 costuma ser key/keyLocation inconsistente.
  if (res.ok) {
    console.log(`[IndexNow] OK (HTTP ${res.status}) — URLs aceitas para indexação.`)
  }
  else {
    const text = await res.text().catch(() => '')
    console.error(`[IndexNow] Falha (HTTP ${res.status}). ${text}`)
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error('[IndexNow] Erro inesperado:', err)
  process.exitCode = 1
})
