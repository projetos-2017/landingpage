<template>
  <div class="min-h-screen bg-white">
    <TheNavbar />

    <main
      id="conteudo-principal"
      class="max-w-3xl mx-auto px-6 pt-28 pb-24"
    >
      <nav
        aria-label="Trilha de navegação"
        class="text-sm text-neutral-400 mb-8"
      >
        <NuxtLink
          to="/"
          class="hover:text-neutral-700 transition-colors"
        >Início</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-neutral-600">Licitações de tecnologia</span>
      </nav>

      <header class="mb-10">
        <p class="section-label mb-3">
          Painel de licitações
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight mb-4">
          Licitações de tecnologia no PNCP
        </h1>
        <p class="text-neutral-600 leading-relaxed">
          Um retrato dos pregões eletrônicos de tecnologia, software e TI publicados no
          <a
            href="https://pncp.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            class="text-violet-600 hover:text-violet-700 underline"
          >Portal Nacional de Contratações Públicas</a>
          nos últimos {{ resumo?.janelaDias ?? 30 }} dias.
        </p>
      </header>

      <div
        v-if="loading"
        class="text-neutral-400 text-sm py-10 text-center"
      >
        Consultando o PNCP...
      </div>

      <div
        v-else-if="!resumo"
        class="rounded-eb-md border border-neutral-200 bg-neutral-50 px-6 py-8 text-center"
      >
        <p class="text-neutral-600 text-sm">
          O PNCP está temporariamente indisponível. Tente novamente em alguns minutos, ou
          <NuxtLink
            to="/guia/o-que-e-pncp"
            class="text-violet-600 hover:text-violet-700 underline"
          >veja o que é o PNCP</NuxtLink>
          enquanto isso.
        </p>
      </div>

      <template v-else>
        <!-- Nota metodológica: honesta sobre a natureza aproximada do dado -->
        <div class="rounded-eb-md border border-amber-200 bg-amber-50/60 px-5 py-4 mb-8 text-xs text-amber-900 leading-relaxed">
          <strong>Como calculamos:</strong> a API pública do PNCP não permite filtrar
          contratações por categoria (TI, tecnologia etc.) diretamente — os números abaixo vêm
          de uma busca textual por palavras como "tecnologia", "software" e "sistema" no objeto
          de {{ resumo.amostraTotal }} pregões eletrônicos publicados na janela. É uma
          aproximação útil para dimensionar o mercado, não uma contagem oficial exaustiva.
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div class="card text-center">
            <div class="font-display text-3xl font-bold text-neutral-900 mb-1">
              {{ resumo.correspondentes }}
            </div>
            <div class="text-xs text-neutral-500">
              pregões de tecnologia encontrados
            </div>
          </div>
          <div class="card text-center">
            <div class="font-display text-3xl font-bold text-neutral-900 mb-1">
              {{ formatBRLCompact(resumo.valorEstimadoTotal) }}
            </div>
            <div class="text-xs text-neutral-500">
              valor total estimado
            </div>
          </div>
          <div class="card text-center col-span-2 md:col-span-1">
            <div class="font-display text-3xl font-bold text-neutral-900 mb-1">
              {{ resumo.orgaos.length }}
            </div>
            <div class="text-xs text-neutral-500">
              órgãos compradores distintos
            </div>
          </div>
        </div>

        <section
          v-if="resumo.exemplos.length"
          class="mb-10"
        >
          <h2 class="text-lg font-semibold text-neutral-900 mb-4">
            Exemplos recentes
          </h2>
          <ul class="space-y-3">
            <li
              v-for="(ex, i) in resumo.exemplos"
              :key="i"
              class="card"
            >
              <a
                :href="ex.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block"
              >
                <p class="text-sm font-medium text-neutral-900 mb-1 leading-snug">
                  {{ ex.objeto }}
                </p>
                <p class="text-xs text-neutral-500">
                  {{ ex.orgao }}<template v-if="ex.uf"> · {{ ex.uf }}</template>
                  <template v-if="ex.valor"> · {{ formatBRLCompact(ex.valor) }}</template>
                </p>
              </a>
            </li>
          </ul>
        </section>

        <section
          v-if="resumo.orgaos.length"
          class="mb-14"
        >
          <h2 class="text-lg font-semibold text-neutral-900 mb-4">
            Alguns órgãos compradores
          </h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="orgao in resumo.orgaos"
              :key="orgao"
              class="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full"
            >{{ orgao }}</span>
          </div>
        </section>
      </template>

      <!-- CTA -->
      <div class="rounded-eb-md border border-neutral-200 bg-neutral-50 px-8 py-10 text-center">
        <p class="text-neutral-900 font-semibold text-lg mb-2">
          Sua empresa de TI não pode acompanhar isso manualmente
        </p>
        <p class="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
          O Editus vai monitorar o PNCP pelo perfil da sua empresa e avisar só quando um
          edital de tecnologia compatível for publicado.
        </p>
        <NuxtLink
          to="/#waitlist"
          class="btn-primary text-white rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
        >
          Entrar na lista de acesso
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 7h8M8 4.5L10.5 7 8 9.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
interface SegmentoResumo {
  amostraTotal: number
  correspondentes: number
  valorEstimadoTotal: number
  orgaos: string[]
  exemplos: Array<{ objeto: string, orgao: string, uf: string, valor: number, url: string }>
  janelaDias: number
  geradoEm: string
}

const { track } = useUmami()

const { data, pending } = await useFetch<{ ok: boolean } & Partial<SegmentoResumo>>(
  '/api/pncp-resumo-segmento',
  { query: { segmento: 'tecnologia' } },
)

const loading = computed(() => pending.value)
const resumo = computed<SegmentoResumo | null>(() => {
  const d = data.value
  if (!d?.ok || d.correspondentes === undefined) return null
  return d as SegmentoResumo
})

function formatBRLCompact(value: number): string {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1).replace('.', ',')} mi`
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)} mil`
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value)
}

onMounted(() => {
  setContentAttribution({ source: 'licitacoes-tecnologia', campaign: 'pncp-dados' })
  track('section_view', { location: 'licitacoes-tecnologia' })
})

useHead({
  title: 'Licitações de tecnologia no PNCP — dados atualizados | Editus',
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'Painel com pregões eletrônicos de tecnologia, software e TI publicados no PNCP nos últimos 30 dias: quantidade, valor estimado e órgãos compradores.',
    },
    { property: 'og:title', content: 'Licitações de tecnologia no PNCP — dados atualizados' },
    { property: 'og:description', content: 'Quantas licitações de TI foram publicadas recentemente, quanto valem e quem está comprando.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://editus.com.br/licitacoes/tecnologia' },
  ],
  link: [
    { rel: 'canonical', href: 'https://editus.com.br/licitacoes/tecnologia' },
  ],
})
</script>
