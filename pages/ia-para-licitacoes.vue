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
        <span class="text-neutral-600">IA para licitações</span>
      </nav>

      <header class="mb-10">
        <p class="section-label mb-3">
          Guia sobre IA em licitações
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight mb-4">
          IA para licitações: como usar (e os limites do ChatGPT)
        </h1>
        <p class="text-neutral-600 leading-relaxed">
          Usar inteligência artificial para analisar editais de licitação já é possível hoje —
          a pergunta é o que a IA consegue automatizar de fato, e onde ela para. Colar um PDF
          no ChatGPT resolve parte do problema. Uma camada de IA construída para licitação
          resolve o processo inteiro.
        </p>
      </header>

      <div class="space-y-10">
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            O que a IA consegue fazer numa análise de edital
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            Ler um edital de 80 páginas e extrair prazo, objeto, exigências de habilitação e
            cláusulas de risco é uma tarefa que a IA faz bem — é reconhecimento de padrão em
            texto longo, exatamente o tipo de trabalho em que modelos de linguagem se destacam.
            O que muda de uma ferramenta genérica para uma especializada é o que acontece
            <strong class="text-neutral-900">depois</strong> da leitura: verificar a habilitação
            real da empresa contra bases públicas, calcular o
            <NuxtLink
              to="/guia/margem-em-licitacao"
              class="text-violet-600 hover:text-violet-700 underline"
            >custo financeiro do prazo de pagamento</NuxtLink>,
            e decidir se vale a pena participar.
          </p>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            Por que colar o edital no ChatGPT não é suficiente
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            O ChatGPT genérico responde sobre o documento que você mandou — ele não sabe que
            existe um edital novo até você achá-lo, não consulta CEIS/CNEP/CEPIM para checar
            impedimentos, e não calcula margem ou custo financeiro a menos que você faça as
            contas e peça. Ele resume; não decide. Para PMEs que disputam vários editais por
            mês, isso significa recomeçar o trabalho do zero a cada oportunidade.
          </p>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            O que muda com uma IA especializada em licitações
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            Uma camada de IA construída especificamente para licitações monitora o
            <NuxtLink
              to="/guia/o-que-e-pncp"
              class="text-violet-600 hover:text-violet-700 underline"
            >PNCP</NuxtLink>
            pelo perfil da empresa — então o trabalho começa antes de você precisar procurar o
            edital. A partir daí, a análise cruza o texto do edital com dados estruturados
            (certidões, CNPJ, porte, segmento) que um chat genérico não tem acesso.
          </p>
        </section>
      </div>
    </main>

    <VsChatGPT />

    <main class="max-w-3xl mx-auto px-6 pb-24">
      <div class="rounded-eb-md border border-neutral-200 bg-neutral-50 px-8 py-10 text-center">
        <p class="text-neutral-900 font-semibold text-lg mb-2">
          Veja a IA do Editus em construção
        </p>
        <p class="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
          Monitoramento, habilitação, risco e custo financeiro, numa decisão só. Em acesso
          antecipado.
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
  setContentAttribution({ source: 'ia-para-licitacoes', campaign: 'pagina-comercial' })
  track('section_view', { location: 'ia-para-licitacoes' })
})

useHead({
  title: 'IA para licitações: como usar e os limites do ChatGPT — Editus',
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'Como usar inteligência artificial para analisar editais de licitação, o que o ChatGPT genérico não resolve e o que uma IA especializada automatiza.',
    },
    { property: 'og:title', content: 'IA para licitações: como usar e os limites do ChatGPT' },
    { property: 'og:description', content: 'O que a IA consegue automatizar numa análise de edital, e onde ela para.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://editus.com.br/ia-para-licitacoes' },
  ],
  link: [
    { rel: 'canonical', href: 'https://editus.com.br/ia-para-licitacoes' },
  ],
})
</script>
