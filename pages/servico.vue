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
        <span class="text-neutral-600">Agentes de IA na sua operação</span>
      </nav>

      <header class="mb-12">
        <p class="section-label mb-3">
          Serviço de implantação
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight mb-4">
          Agentes de IA na operação da sua empresa, com escopo e preço fechados
        </h1>
        <p class="text-neutral-600 leading-relaxed mb-6">
          Eu mapeio onde sua equipe perde horas em trabalho repetitivo, coloco um agente de IA
          para fazer essa parte e deixo funcionando dentro do seu processo. Sem contratar
          plataforma, sem projeto de meses: um problema de cada vez, começando pelo que mais
          pesa. Começamos por licitações, onde já tenho conteúdo e conhecimento acumulados, e o
          mesmo método vale para outras operações.
        </p>
        <a
          :href="mailtoHref"
          class="btn-primary text-white rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
          @click="onCta('hero')"
        >
          Agendar uma conversa
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4.5L10.5 7 8 9.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </header>

      <div class="space-y-14">
        <!-- Como funciona -->
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-2">
            Como funciona
          </h2>
          <p class="text-neutral-600 leading-relaxed mb-6">
            Três etapas. Você só avança para a seguinte se a anterior fizer sentido.
          </p>
          <ol class="space-y-4">
            <li
              v-for="(etapa, i) in etapas"
              :key="etapa.titulo"
              class="card flex gap-4"
            >
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-display font-bold text-sm flex items-center justify-center"
                aria-hidden="true"
              >{{ i + 1 }}</span>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">
                  {{ etapa.titulo }}
                </h3>
                <p class="text-sm text-neutral-600 leading-relaxed">
                  {{ etapa.texto }}
                </p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Exemplos de agentes -->
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-2">
            Exemplos de agentes para licitações
          </h2>
          <p class="text-neutral-600 leading-relaxed mb-5">
            São pontos de partida. O que entra no piloto sai da conversa sobre a sua rotina, não
            de um catálogo.
          </p>
          <ul class="space-y-2.5 pl-1">
            <li
              v-for="exemplo in exemplos"
              :key="exemplo"
              class="flex gap-3 text-neutral-600 leading-relaxed"
            >
              <span
                class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              <span>{{ exemplo }}</span>
            </li>
          </ul>
          <p class="text-neutral-600 leading-relaxed mt-5">
            Para outras operações (atendimento, financeiro, cadastro, triagem de documentos), o
            processo é o mesmo: entender o fluxo, escolher uma tarefa repetitiva e começar por
            ela.
          </p>
        </section>

        <!-- Segurança -->
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-2">
            Segurança e controle
          </h2>
          <p class="text-neutral-600 leading-relaxed mb-5">
            Agente de IA mexendo na operação de uma empresa precisa de regras claras. É isso que
            combinamos por escrito antes de começar.
          </p>
          <ul class="space-y-2.5 pl-1">
            <li
              v-for="regra in seguranca"
              :key="regra"
              class="flex gap-3 text-neutral-600 leading-relaxed"
            >
              <span
                class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              <span>{{ regra }}</span>
            </li>
          </ul>
        </section>

        <!-- Para quem -->
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-2">
            Para quem faz sentido
          </h2>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="card">
              <h3 class="font-semibold text-neutral-900 mb-2 text-sm">
                Faz sentido se
              </h3>
              <ul class="space-y-2 text-sm text-neutral-600 leading-relaxed">
                <li>A equipe gasta horas toda semana numa tarefa repetitiva e previsível.</li>
                <li>Existe alguém que conhece o processo e pode validar o resultado.</li>
                <li>Você prefere pagar por um resultado fechado a assinar mais uma ferramenta.</li>
              </ul>
            </div>
            <div class="card">
              <h3 class="font-semibold text-neutral-900 mb-2 text-sm">
                Provavelmente não é para você se
              </h3>
              <ul class="space-y-2 text-sm text-neutral-600 leading-relaxed">
                <li>O processo muda toda semana e não está definido nem para a equipe.</li>
                <li>Você espera que a IA decida sozinha, sem revisão humana.</li>
                <li>Procura um produto pronto para assinar hoje. O Editus ainda está em acesso antecipado.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Quem faz -->
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-3">
            Quem faz o trabalho
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            O trabalho é feito diretamente por
            <NuxtLink
              to="/sobre"
              class="text-violet-600 hover:text-violet-700 underline"
            >Joaquim Alves</NuxtLink>,
            fundador do Editus, e não repassado a terceiros. Como atendo poucos clientes ao mesmo
            tempo, as vagas são limitadas. O contrato é com a Joaquim Alves LTDA, com emissão de
            nota fiscal.
          </p>
        </section>

        <!-- FAQ -->
        <section>
          <h2 class="text-lg font-semibold text-neutral-900 mb-4">
            Perguntas frequentes
          </h2>
          <div class="space-y-5">
            <div
              v-for="faq in faqs"
              :key="faq.pergunta"
            >
              <h3 class="font-semibold text-neutral-900 mb-1">
                {{ faq.pergunta }}
              </h3>
              <p class="text-neutral-600 leading-relaxed text-sm">
                {{ faq.resposta }}
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- CTA -->
      <div class="mt-14 rounded-eb-md border border-neutral-200 bg-neutral-50 px-8 py-10 text-center">
        <p class="text-neutral-900 font-semibold text-lg mb-2">
          Vamos olhar a sua operação?
        </p>
        <p class="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
          Uma conversa de 30 minutos para entender onde estão as horas perdidas e se um agente
          resolve. Sem compromisso.
        </p>
        <a
          :href="mailtoHref"
          class="btn-primary text-white rounded-lg px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
          @click="onCta('rodape')"
        >
          Agendar uma conversa
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4.5L10.5 7 8 9.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <p class="text-xs text-neutral-400 mt-4">
          Ou escreva para
          <a
            :href="mailtoHref"
            class="underline hover:text-neutral-600"
          >contato@editus.com.br</a>
        </p>
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { track } = useUmami()

const CONTATO = 'contato@editus.com.br'
const ASSUNTO = 'Conversa sobre agentes de IA na operação'
const CORPO = 'Olá, Joaquim. Quero conversar sobre agentes de IA na operação da minha empresa.\n\n'
  + 'Empresa:\nRamo de atuação:\nTarefa repetitiva que mais consome tempo da equipe:\n'
const mailtoHref = `mailto:${CONTATO}?subject=${encodeURIComponent(ASSUNTO)}&body=${encodeURIComponent(CORPO)}`

const etapas = [
  {
    titulo: 'Diagnóstico (1 semana)',
    texto: 'Mapeio a rotina da equipe, meço quanto tempo cada tarefa consome e indico em quais um agente de IA compensa. Você sai com um plano priorizado e um orçamento fechado para a implantação, mesmo que decida não seguir.',
  },
  {
    titulo: 'Piloto (2 a 4 semanas)',
    texto: 'Implanto um agente numa tarefa só, no seu processo e com os seus dados, e acompanho os resultados junto com a equipe. O critério de sucesso é definido antes de começar.',
  },
  {
    titulo: 'Operação contínua (opcional)',
    texto: 'Se o piloto funcionar, o agente continua rodando com monitoramento, ajustes e suporte mensal. Novos agentes entram um de cada vez, sempre com escopo definido.',
  },
]

const exemplos = [
  'Monitorar o PNCP pelo perfil da empresa (segmento, UF, porte) e entregar só os editais compatíveis, com resumo.',
  'Ler o edital e destacar exigências de habilitação, prazos e cláusulas de risco para revisão da equipe.',
  'Conferir certidões e documentos da empresa e avisar antes do vencimento.',
  'Calcular o custo financeiro do prazo de pagamento e a margem antes de definir o lance.',
  'Montar o rascunho da proposta e da documentação para revisão humana.',
]

const seguranca = [
  'Acesso mínimo: o agente só enxerga o que a tarefa exige, com credenciais próprias que você pode revogar a qualquer momento.',
  'Decisão sempre humana: o agente prepara e sugere. Enviar proposta, assinar ou pagar fica com a sua equipe.',
  'Seus dados não são usados para treinar modelos e não são compartilhados entre clientes.',
  'Contrato com cláusulas de LGPD, confidencialidade e descrição de quais dados o agente trata e por quê.',
  'Registro do que o agente fez, para auditar e corrigir quando algo sair diferente do esperado.',
]

const faqs = [
  {
    pergunta: 'Quanto custa?',
    resposta: 'Depende do que for implantado. O diagnóstico resulta num orçamento com preço fechado para o piloto, sem surpresa durante o projeto. A manutenção mensal, se você quiser, também é combinada antes.',
  },
  {
    pergunta: 'Preciso ter equipe de tecnologia?',
    resposta: 'Não. Eu cuido da implantação e da integração. Você só precisa de alguém que conheça o processo e consiga validar o resultado.',
  },
  {
    pergunta: 'E se o agente errar?',
    resposta: 'Por isso o piloto é pequeno e com revisão humana. Medimos a taxa de acerto e só ampliamos o escopo quando ela for aceitável para você. Se não for, você encerra sem ficar preso a contrato longo.',
  },
  {
    pergunta: 'Qual a diferença para contratar um software?',
    resposta: 'Software entrega a ferramenta e você adapta sua rotina a ela. Aqui o agente é montado em cima do seu processo. O Editus como produto continua em desenvolvimento, e clientes do serviço têm prioridade quando ele ficar disponível.',
  },
  {
    pergunta: 'Vocês atendem fora de licitações?',
    resposta: 'Sim, caso a caso. Licitações é onde tenho mais conhecimento do domínio, então os pilotos ali são mais rápidos. Em outras áreas, o diagnóstico mostra se existe uma tarefa boa para começar.',
  },
]

function onCta(location: string) {
  track('cta_click', { location: `servico-${location}`, type: 'agendar-conversa' })
}

onMounted(() => {
  setContentAttribution({ source: 'servico', campaign: 'servico-agentes-ia' })
  track('section_view', { location: 'servico' })
})

useHead({
  title: 'Agentes de IA na operação da sua empresa — serviço de implantação | Editus',
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'Implantação de agentes de IA na operação da sua empresa, com escopo e preço fechados: diagnóstico, piloto e operação. Começando por licitações públicas.',
    },
    { property: 'og:title', content: 'Agentes de IA na operação da sua empresa — Editus' },
    { property: 'og:description', content: 'Diagnóstico, piloto e operação contínua de agentes de IA, com acesso mínimo, decisão humana e contrato de LGPD.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://editus.com.br/servico' },
  ],
  link: [
    { rel: 'canonical', href: 'https://editus.com.br/servico' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Implantação de agentes de IA na operação da empresa',
          'serviceType': 'Consultoria e implantação de agentes de inteligência artificial',
          'description': 'Diagnóstico da operação, piloto com um agente de IA e operação contínua, com escopo e preço fechados. Começa por licitações públicas.',
          'url': 'https://editus.com.br/servico',
          'areaServed': { '@type': 'Country', 'name': 'Brasil' },
          'inLanguage': 'pt-BR',
          'provider': { '@id': 'https://editus.com.br/#organization' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(f => ({
            '@type': 'Question',
            'name': f.pergunta,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.resposta },
          })),
        },
      ]),
    },
  ],
})
</script>
