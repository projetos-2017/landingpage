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
          Licitações de software e TI no PNCP
        </h1>
        <p class="text-neutral-600 leading-relaxed">
          Como achar licitações de software e tecnologia da informação, e um retrato dos
          pregões eletrônicos do setor publicados no
          <a
            href="https://pncp.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            class="text-violet-600 hover:text-violet-700 underline"
          >Portal Nacional de Contratações Públicas</a>
          nos últimos {{ resumo?.janelaDias ?? 30 }} dias.
        </p>
      </header>

      <!-- Conteúdo estático (renderizado no servidor): responde à busca "achar licitação
           de software" mesmo antes de o painel de dados carregar no navegador -->
      <section class="mb-12">
        <h2 class="text-lg font-semibold text-neutral-900 mb-3">
          Como achar licitação de software e TI
        </h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Não existe um filtro único para "licitações de software". O caminho mais seguro é
          combinar a busca por palavras do objeto com o tipo de contratação:
        </p>
        <ol class="space-y-3 pl-1 mb-4">
          <li class="flex gap-3 text-neutral-600 leading-relaxed">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 font-display font-bold text-xs flex items-center justify-center"
              aria-hidden="true"
            >1</span>
            <span>
              <strong class="text-neutral-900">Comece pelo PNCP.</strong> A Lei 14.133/2021 criou o
              <NuxtLink
                to="/guia/o-que-e-pncp"
                class="text-violet-600 hover:text-violet-700 underline"
              >PNCP</NuxtLink>
              como site oficial de divulgação das contratações públicas, então é onde a busca
              começa.
            </span>
          </li>
          <li class="flex gap-3 text-neutral-600 leading-relaxed">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 font-display font-bold text-xs flex items-center justify-center"
              aria-hidden="true"
            >2</span>
            <span>
              <strong class="text-neutral-900">Pesquise por mais de um termo.</strong> Os órgãos
              descrevem o objeto de formas diferentes: "software", "licença de uso", "sistema
              informatizado", "tecnologia da informação", "infraestrutura de TI" e "equipamentos
              de informática" retornam resultados distintos.
            </span>
          </li>
          <li class="flex gap-3 text-neutral-600 leading-relaxed">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 font-display font-bold text-xs flex items-center justify-center"
              aria-hidden="true"
            >3</span>
            <span>
              <strong class="text-neutral-900">Filtre por modalidade e por UF.</strong> O
              <NuxtLink
                to="/guia/pregao-eletronico-como-funciona"
                class="text-violet-600 hover:text-violet-700 underline"
              >pregão eletrônico</NuxtLink>
              é a modalidade típica para bens e serviços comuns, e restringir à sua região reduz
              ruído. Contratações diretas (dispensa e inexigibilidade) aparecem em outra busca,
              veja o guia sobre
              <NuxtLink
                to="/guia/dispensa-de-licitacao"
                class="text-violet-600 hover:text-violet-700 underline"
              >dispensa de licitação</NuxtLink>.
            </span>
          </li>
          <li class="flex gap-3 text-neutral-600 leading-relaxed">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 font-display font-bold text-xs flex items-center justify-center"
              aria-hidden="true"
            >4</span>
            <span>
              <strong class="text-neutral-900">Confira a habilitação antes de gastar tempo no
                edital.</strong> Atestados técnicos e certidões são o que mais elimina empresas
              de TI. Veja os guias de
              <NuxtLink
                to="/guia/habilitacao-licitacao"
                class="text-violet-600 hover:text-violet-700 underline"
              >habilitação</NuxtLink>
              e de
              <NuxtLink
                to="/guia/atestado-de-capacidade-tecnica"
                class="text-violet-600 hover:text-violet-700 underline"
              >atestado de capacidade técnica</NuxtLink>.
            </span>
          </li>
        </ol>
        <p class="text-neutral-600 leading-relaxed">
          Fazer isso toda semana, em todos os portais, é o trabalho que um
          <NuxtLink
            to="/software-de-licitacoes"
            class="text-violet-600 hover:text-violet-700 underline"
          >software de licitações</NuxtLink>
          automatiza. Abaixo, o que o PNCP mostrou recentemente.
        </p>
      </section>

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
          de uma busca textual por palavras como "tecnologia", "software" e "sistema informatizado" no objeto
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

// server: false — a consulta ao PNCP pode levar dezenas de segundos (varredura
// de até 4 páginas, API sem SLA documentado). Se rodasse no SSR, bloquearia o
// carregamento da página inteira até o PNCP responder (medido: ~27s no pior
// caso, o que na prática lê como "a página não carrega"). Client-only: o HTML
// da página (título, texto, layout) chega instantaneamente, e o painel de
// dados aparece depois, com o estado "Consultando o PNCP..." enquanto isso.
const { data, pending } = await useFetch<{ ok: boolean } & Partial<SegmentoResumo>>(
  '/api/pncp-resumo-segmento',
  { query: { segmento: 'tecnologia' }, server: false },
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
  title: 'Achar licitação de software e TI: editais no PNCP | Editus',
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'Como achar licitações de software e TI no PNCP, em 4 passos, e um painel com os pregões eletrônicos dos últimos 30 dias: quantidade, valor estimado e órgãos.',
    },
    { property: 'og:title', content: 'Achar licitação de software e TI: editais no PNCP' },
    { property: 'og:description', content: 'Como achar licitações de software e TI no PNCP e quantas foram publicadas recentemente, quanto valem e quem está comprando.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://editus.com.br/licitacoes/tecnologia' },
  ],
  link: [
    { rel: 'canonical', href: 'https://editus.com.br/licitacoes/tecnologia' },
  ],
})
</script>
