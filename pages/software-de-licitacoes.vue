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
        <span class="text-neutral-600">Software de licitações</span>
      </nav>

      <header class="mb-10">
        <p class="section-label mb-3">
          Guia de compra
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight mb-4">
          Software de licitações: o que é e quando vale a pena
        </h1>
        <p class="text-neutral-600 leading-relaxed">
          Um software de licitações é a ferramenta que monitora o PNCP, filtra editais
          compatíveis com o perfil da empresa e automatiza parte da análise que hoje é feita
          manualmente. Veja o que esperar de uma dessas ferramentas, o que muda em relação à
          planilha e à consultoria, e onde o Editus se posiciona.
        </p>
      </header>

      <div class="space-y-10">
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            O que é um software de licitações
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            É uma ferramenta que acompanha o
            <NuxtLink
              to="/guia/o-que-e-pncp"
              class="text-violet-600 hover:text-violet-700 underline"
            >PNCP</NuxtLink>
            e outros portais de compras continuamente, em vez de depender de alguém checar
            manualmente. A maioria das ferramentas do mercado se limita a alertar sobre novos
            editais. As mais completas vão além: analisam o edital, verificam se a empresa se
            habilita e calculam se o contrato vale a pena financeiramente.
          </p>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            Quem precisa de um software de licitações
          </h2>
          <p class="text-neutral-600 leading-relaxed mb-4">
            Faz sentido para empresas que já participam de licitações com alguma frequência e
            sentem o gargalo do volume — não para quem disputa um ou dois editais por ano.
            Sinais de que vale a pena avaliar uma ferramenta:
          </p>
          <ul class="space-y-2.5 pl-1">
            <li class="flex gap-3 text-neutral-600 leading-relaxed">
              <span
                class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              <span>A equipe não consegue analisar todos os editais compatíveis com o
                segmento da empresa.</span>
            </li>
            <li class="flex gap-3 text-neutral-600 leading-relaxed">
              <span
                class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              <span>Já aconteceu de perder um prazo de habilitação por certidão vencida ou
                documento faltando.</span>
            </li>
            <li class="flex gap-3 text-neutral-600 leading-relaxed">
              <span
                class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              <span>Ninguém calcula o custo financeiro do prazo de pagamento antes de dar o
                lance — e a margem some depois de vencer.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            O que um bom software de licitações deve automatizar
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            Monitoramento do PNCP pelo perfil da empresa (segmento, UF, porte), verificação
            automática de habilitação e certidões (incluindo
            <NuxtLink
              to="/guia/consulta-ceis-cnep-cepim"
              class="text-violet-600 hover:text-violet-700 underline"
            >CEIS, CNEP e CEPIM</NuxtLink>),
            análise de risco por cláusula do edital, cálculo do custo financeiro do prazo de
            pagamento e apoio na elaboração da proposta. Ferramentas que só mandam alerta de
            "novo edital publicado" resolvem uma parte pequena do problema.
          </p>
        </section>
      </div>
    </main>

    <ComparativoSection />

    <main class="max-w-3xl mx-auto px-6 pb-24">
      <!-- CTA -->
      <div class="rounded-eb-md border border-neutral-200 bg-neutral-50 px-8 py-10 text-center">
        <p class="text-neutral-900 font-semibold text-lg mb-2">
          O Editus está construindo essa camada
        </p>
        <p class="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
          Monitoramento, habilitação, risco, custo financeiro e proposta — em acesso antecipado.
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
const { track } = useUmami()

onMounted(() => {
  setContentAttribution({ source: 'software-de-licitacoes', campaign: 'pagina-comercial' })
  track('section_view', { location: 'software-de-licitacoes' })
})

useHead({
  title: 'Software para licitações: o que faz e como escolher | Editus',
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'O que um software de licitação deve fazer, quem precisa e como escolher: monitoramento do PNCP, habilitação, risco e custo financeiro. Compare com planilha e consultoria.',
    },
    { property: 'og:title', content: 'Software de licitações: o que é e quando vale a pena' },
    { property: 'og:description', content: 'Guia sobre software de licitações — o que automatizar, comparação com planilha e consultoria.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://editus.com.br/software-de-licitacoes' },
  ],
  link: [
    { rel: 'canonical', href: 'https://editus.com.br/software-de-licitacoes' },
  ],
})
</script>
