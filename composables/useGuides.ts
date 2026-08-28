// Cluster de conteúdo indexável /guia/* — fonte única de verdade.
//
// Objetivo estratégico: capturar buscas do ecossistema de licitação em ângulos
// AINDA NÃO saturados por concorrentes (PNCP, habilitação, CEIS/CNEP/CEPIM,
// Lei 14.133), com conteúdo citável por agentes de IA. Cada guia vira uma URL
// estável, com Article + BreadcrumbList (+ FAQPage quando há perguntas) JSON-LD.
//
// Renderização: components/GuiaLayout.vue consome estes dados. Manter o conteúdo
// aqui (dados, não markup) permite gerar HTML semântico e schema.org do mesmo
// objeto, sem divergência.

// --- Blocos de conteúdo (renderizados semanticamente pelo GuiaLayout) ---
export type GuideBlock
  = | { type: 'p', text: string }
    | { type: 'h2', text: string, id: string }
    | { type: 'ul', items: string[] }
    | { type: 'ol', items: string[] }
    | { type: 'callout', title: string, text: string }
    // Tabela comparativa: conteúdo tabular é ~2,5x mais citado por motores
    // generativos do que a mesma comparação em texto corrido (GEO/AEO).
    | { type: 'table', headers: string[], rows: string[][] }

export type GuideFaq = { q: string, a: string }

export interface Guide {
  slug: string
  // <title> e H1
  title: string
  h1: string
  // meta description (150-160 chars, com termo-alvo)
  description: string
  // frase-âncora curta exibida no topo (label da seção)
  kicker: string
  // termo-alvo principal de busca (usado em og/keywords internos)
  keyword: string
  // data de publicação/atualização (ISO) — usada no Article schema
  updated: string
  // tempo estimado de leitura
  readingTime: string
  blocks: GuideBlock[]
  faqs?: GuideFaq[]
  // slugs de guias topicamente relacionados (linkagem interna direcionada,
  // não a lista genérica "todos os outros guias" — ver GuiaLayout.vue)
  related?: string[]
}

const ORIGIN = 'https://editus.com.br'

export const GUIDES: Guide[] = [
  // ---------------------------------------------------------------------------
  {
    slug: 'o-que-e-pncp',
    title: 'O que é o PNCP? Guia do Portal Nacional de Compras Públicas',
    h1: 'O que é o PNCP (Portal Nacional de Compras Públicas)',
    description:
      'O PNCP é o portal oficial onde a União, estados e municípios publicam todas as licitações após a Lei 14.133/2021. Entenda o que é, como funciona e como monitorar.',
    kicker: 'Guia do PNCP',
    keyword: 'o que é PNCP',
    updated: '2026-08-05',
    readingTime: '6 min',
    blocks: [
      { type: 'p', text: 'O PNCP (Portal Nacional de Compras Públicas) é o repositório oficial e centralizado das licitações e contratos da administração pública brasileira. Criado pela Lei 14.133/2021 (a Nova Lei de Licitações), ele reúne num único endereço os editais publicados pela União, estados, Distrito Federal e municípios.' },
      { type: 'p', text: 'A definição está no art. 174 da própria lei: "É criado o Portal Nacional de Contratações Públicas (PNCP), sítio eletrônico oficial destinado à: I – divulgação centralizada e obrigatória dos atos exigidos por esta Lei; II – realização facultativa das contratações pelos órgãos e entidades dos Poderes Executivo, Legislativo e Judiciário de todos os entes federativos".' },
      { type: 'p', text: 'Na prática, o PNCP substitui a fragmentação anterior — em que cada órgão publicava em seu próprio portal — por um ponto único de divulgação obrigatória. Para uma empresa que quer participar de licitações, ele é a fonte primária de oportunidades.' },
      { type: 'h2', text: 'Para que serve o PNCP', id: 'para-que-serve' },
      { type: 'p', text: 'O portal cumpre três funções centrais previstas em lei:' },
      { type: 'ul', items: [
        'Divulgação obrigatória: todo edital de licitação regido pela Lei 14.133/2021 deve ser publicado no PNCP para ter validade.',
        'Transparência: qualquer cidadão ou empresa pode consultar editais, atas de registro de preços, contratos e seus aditivos.',
        'Padronização: reúne documentos, prazos e informações num formato uniforme, facilitando a busca e a comparação entre oportunidades.',
      ] },
      { type: 'h2', text: 'O que você encontra no PNCP', id: 'o-que-encontra' },
      { type: 'ul', items: [
        'Editais de licitação (pregão eletrônico, concorrência, dispensa eletrônica e outras modalidades).',
        'Atas de registro de preços vigentes.',
        'Contratos administrativos e seus termos aditivos.',
        'Planos de contratação anual (PCA) dos órgãos — úteis para antecipar futuras licitações.',
      ] },
      { type: 'h2', text: 'Como monitorar o PNCP de forma eficiente', id: 'como-monitorar' },
      { type: 'p', text: 'O desafio não é acessar o PNCP — é acompanhá-lo continuamente. O volume é enorme: segundo o Painel PNCP em Números, o portal já acumulava mais de 1,5 milhão de contratações publicadas em dezembro de 2024 (Compras.gov.br). Uma oportunidade compatível com o seu segmento pode surgir a qualquer momento, com prazo curto para participar.' },
      { type: 'p', text: 'Monitorar manualmente é inviável para a maioria das PMEs: exige checar o portal todos os dias, filtrar por objeto (CATMAT/CATSER), UF e valor, e ainda ler cada edital para avaliar se a empresa se habilita. É exatamente esse trabalho repetitivo que ferramentas de automação eliminam.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus monitora o PNCP continuamente pelo perfil da sua empresa (CNPJ, segmentos, UFs, porte) e aciona a análise apenas quando um edital compatível é publicado — sem ruído, sem alertas irrelevantes.' },
    ],
    faqs: [
      { q: 'O PNCP é gratuito?', a: 'Sim. O acesso e a consulta ao Portal Nacional de Compras Públicas são gratuitos e abertos a qualquer pessoa ou empresa, sem necessidade de cadastro para pesquisar editais.' },
      { q: 'O PNCP substituiu o Comprasnet?', a: 'Não exatamente. O PNCP é o portal de divulgação e transparência dos editais. O Comprasnet (Compras.gov.br) continua sendo o sistema operacional onde os pregões do governo federal são efetivamente disputados. Muitos editais publicados no PNCP remetem ao Comprasnet ou a outras plataformas para a sessão pública.' },
      { q: 'Todo órgão público é obrigado a publicar no PNCP?', a: 'Sim. Sob a Lei 14.133/2021, a publicação no PNCP é condição de eficácia do edital para os órgãos e entidades da administração pública direta e indireta da União, estados, DF e municípios.' },
    ],
    related: ['pregao-eletronico-como-funciona', 'como-participar-de-licitacao', 'lei-14133-resumo'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'habilitacao-licitacao',
    title: 'Habilitação em licitação: checklist de documentos e certidões',
    h1: 'Habilitação em licitação: o checklist de documentos',
    description:
      'Quais documentos e certidões sua empresa precisa para se habilitar em uma licitação sob a Lei 14.133/2021. Checklist prático de habilitação jurídica, fiscal, técnica e econômica.',
    kicker: 'Guia de habilitação',
    keyword: 'documentos para habilitação em licitação',
    updated: '2026-08-05',
    readingTime: '7 min',
    blocks: [
      { type: 'p', text: 'Habilitação é a etapa da licitação em que a empresa comprova que reúne as condições legais, fiscais, técnicas e econômicas para executar o objeto do contrato. Falhar na habilitação é a causa mais comum de desclassificação — muitas vezes por uma certidão vencida, não por falta de capacidade real.' },
      { type: 'p', text: 'A Lei 14.133/2021 organiza a documentação de habilitação em quatro grandes grupos. É o que define o art. 62: "A habilitação é a fase da licitação em que se verifica o conjunto de informações e documentos necessários e suficientes para demonstrar a capacidade do licitante de realizar o objeto da licitação, dividindo-se em: I - jurídica; II - técnica; III - fiscal, social e trabalhista; IV - econômico-financeira". Abaixo, o checklist de cada um.' },
      { type: 'h2', text: '1. Habilitação jurídica', id: 'juridica' },
      { type: 'ul', items: [
        'Ato constitutivo, estatuto ou contrato social em vigor, devidamente registrado.',
        'Documento de identificação dos sócios ou representantes legais.',
        'Para MEI: Certificado da Condição de Microempreendedor Individual (CCMEI).',
      ] },
      { type: 'h2', text: '2. Regularidade fiscal e trabalhista', id: 'fiscal' },
      { type: 'ul', items: [
        'Comprovante de inscrição no CNPJ.',
        'Certidão Negativa de Débitos relativos a Tributos Federais e à Dívida Ativa da União (CND conjunta).',
        'Certidão de regularidade com o FGTS (CRF), emitida pela Caixa.',
        'Certidão Negativa de Débitos Trabalhistas (CNDT).',
        'Certidões de regularidade fiscal estadual e municipal, conforme o objeto.',
      ] },
      { type: 'h2', text: '3. Qualificação técnica', id: 'tecnica' },
      { type: 'ul', items: [
        'Atestados de capacidade técnica emitidos por clientes anteriores, comprovando execução de objeto compatível.',
        'Registro ou inscrição em conselho de classe (CREA, CAU, etc.), quando exigido.',
        'Comprovação de equipe técnica e/ou aparelhamento, se o edital exigir.',
      ] },
      { type: 'h2', text: '4. Qualificação econômico-financeira', id: 'economica' },
      { type: 'ul', items: [
        'Balanço patrimonial e demonstrações contábeis do último exercício.',
        'Certidão negativa de falência ou recuperação judicial.',
        'Índices contábeis mínimos (liquidez, solvência), quando previstos no edital.',
      ] },
      { type: 'h2', text: 'O erro que mais desclassifica: certidão vencida', id: 'certidao-vencida' },
      { type: 'p', text: 'A maioria das certidões tem validade curta — e desigual: a CRF do FGTS, emitida pela Caixa, vale apenas 30 dias, enquanto a CND federal (RFB/PGFN) e a CNDT (Justiça do Trabalho) valem 180 dias, e as estaduais e municipais variam conforme o ente. Uma empresa plenamente capaz pode ser inabilitada porque uma CND venceu dois dias antes da sessão. Controlar a validade de cada documento é tão importante quanto tê-los.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O agente de habilitação do Editus cruza as exigências do edital com o perfil da sua empresa e sinaliza pendências e certidões a vencer antes da submissão — reduzindo o risco de inabilitação por documentação.' },
    ],
    faqs: [
      { q: 'MEI pode participar de licitação?', a: 'Sim. O Microempreendedor Individual pode participar de licitações e ainda conta com os benefícios legais de ME/EPP (como o direito de preferência em caso de empate). A habilitação jurídica do MEI é comprovada pelo CCMEI.' },
      { q: 'Quais certidões negativas são obrigatórias?', a: 'As mais recorrentes são: CND de tributos federais e dívida ativa da União, CRF do FGTS e CNDT (débitos trabalhistas). A depender do objeto e do ente licitante, somam-se certidões estaduais e municipais.' },
      { q: 'O que acontece se um documento estiver vencido no dia da sessão?', a: 'A empresa costuma ser inabilitada. Por isso o controle de validade das certidões é crítico. Empresas ME/EPP têm alguma flexibilidade para regularização fiscal posterior, mas isso não vale para todos os documentos.' },
    ],
    related: ['certidao-vencida-licitacao', 'atestado-de-capacidade-tecnica', 'o-que-e-sicaf'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'consulta-ceis-cnep-cepim',
    title: 'Como consultar CEIS, CNEP e CEPIM: empresa impedida de licitar',
    h1: 'CEIS, CNEP e CEPIM: como saber se uma empresa está impedida de licitar',
    description:
      'CEIS, CNEP e CEPIM são cadastros públicos de empresas sancionadas e impedidas de contratar com o poder público. Veja o que é cada um e como consultar gratuitamente.',
    kicker: 'Guia de sanções',
    keyword: 'como consultar CEIS CNEP CEPIM',
    updated: '2026-08-05',
    readingTime: '5 min',
    blocks: [
      { type: 'p', text: 'Antes de participar de uma licitação — ou de firmar parceria com outra empresa — é essencial verificar se ela está sob alguma sanção que a impeça de contratar com a administração pública. Três cadastros federais concentram essa informação: CEIS, CNEP e CEPIM. Todos são públicos e gratuitos.' },
      { type: 'p', text: 'Consultar esses cadastros não é só cautela do fornecedor: é dever da própria administração. Diz o art. 91, § 4º, da Lei 14.133/2021: "Antes de formalizar ou prorrogar o prazo de vigência do contrato, a Administração deverá verificar a regularidade fiscal do contratado, consultar o Cadastro Nacional de Empresas Inidôneas e Suspensas (Ceis) e o Cadastro Nacional de Empresas Punidas (Cnep), emitir as certidões negativas de inidoneidade, de impedimento e de débitos trabalhistas e juntá-las ao respectivo processo".' },
      { type: 'h2', text: 'CEIS — Cadastro de Empresas Inidôneas e Suspensas', id: 'ceis' },
      { type: 'p', text: 'O CEIS lista pessoas físicas e jurídicas que sofreram sanções restritivas do direito de participar de licitações ou de celebrar contratos com a administração pública. É a consulta mais direta para saber se uma empresa está impedida de licitar. Não é um cadastro pequeno: na extração de dados abertos do Portal da Transparência de agosto de 2026, o CEIS somava mais de 23,6 mil sanções vigentes, aplicadas a cerca de 16,8 mil CNPJs e CPFs distintos.' },
      { type: 'h2', text: 'CNEP — Cadastro Nacional de Empresas Punidas', id: 'cnep' },
      { type: 'p', text: 'O CNEP reúne as sanções aplicadas com base na Lei Anticorrupção (Lei 12.846/2013), como multas e acordos de leniência. Indica empresas punidas por atos lesivos contra a administração pública, nacional ou estrangeira.' },
      { type: 'h2', text: 'CEPIM — Cadastro de Entidades Privadas Sem Fins Lucrativos Impedidas', id: 'cepim' },
      { type: 'p', text: 'O CEPIM lista entidades sem fins lucrativos (associações, fundações, ONGs) impedidas de celebrar convênios, contratos de repasse ou termos de parceria com a administração pública federal.' },
      { type: 'p', text: 'A tabela abaixo resume a diferença entre os três cadastros:' },
      { type: 'table', headers: ['Cadastro', 'Quem entra', 'O que registra', 'Efeito prático'], rows: [
        ['CEIS', 'Pessoas físicas e jurídicas sancionadas', 'Sanções que restringem o direito de licitar e contratar (inidoneidade, suspensão, impedimento)', 'Impedimento de participar de licitações e de celebrar contratos com a administração pública'],
        ['CNEP', 'Empresas punidas com base na Lei Anticorrupção (Lei 12.846/2013)', 'Multas e acordos de leniência por atos lesivos à administração', 'Dá publicidade às punições — sinal de alerta em licitações e em parcerias com outras empresas'],
        ['CEPIM', 'Entidades sem fins lucrativos (associações, fundações, ONGs)', 'Impedimentos aplicados por órgãos da administração federal', 'Impedimento de celebrar convênios, contratos de repasse ou termos de parceria com a administração pública federal'],
      ] },
      { type: 'h2', text: 'Como consultar', id: 'como-consultar' },
      { type: 'ol', items: [
        'Acesse o Portal da Transparência do Governo Federal (portaldatransparencia.gov.br).',
        'No menu de Sanções, escolha o cadastro desejado (CEIS, CNEP ou CEPIM).',
        'Pesquise pelo CNPJ/CPF ou pela razão social da empresa.',
        'Verifique a existência, o tipo, o alcance e a vigência de eventuais sanções.',
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus consulta automaticamente CEIS, CNEP e CEPIM (além do SIASG) durante a análise do edital, sinalizando impedimentos que poderiam desclassificar a proposta — sem você precisar checar cada portal manualmente.' },
    ],
    faqs: [
      { q: 'A consulta ao CEIS é gratuita?', a: 'Sim. CEIS, CNEP e CEPIM são consultáveis gratuitamente no Portal da Transparência do Governo Federal, sem necessidade de cadastro.' },
      { q: 'Qual a diferença entre CEIS e CNEP?', a: 'O CEIS registra sanções que restringem o direito de licitar e contratar (inidoneidade, suspensão). O CNEP registra punições da Lei Anticorrupção (multas e acordos de leniência por atos lesivos à administração).' },
      { q: 'Estar no CEIS impede definitivamente de licitar?', a: 'Depende do tipo e da vigência da sanção. Algumas são temporárias e têm prazo determinado; enquanto vigentes, impedem a participação. Por isso é importante verificar não só a existência, mas o alcance e a validade da sanção.' },
    ],
    related: ['habilitacao-licitacao', 'impugnacao-de-edital', 'certidao-vencida-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'lei-14133-resumo',
    title: 'Lei 14.133/2021 (Nova Lei de Licitações): resumo prático',
    h1: 'Lei 14.133/2021: resumo da Nova Lei de Licitações',
    description:
      'Resumo prático da Lei 14.133/2021, a Nova Lei de Licitações e Contratos: principais mudanças, modalidades, critérios de julgamento e o que muda para as empresas.',
    kicker: 'Guia da Lei 14.133',
    keyword: 'resumo Lei 14.133',
    updated: '2026-08-05',
    readingTime: '8 min',
    blocks: [
      { type: 'p', text: 'A Lei 14.133/2021 é o novo marco legal das licitações e contratos administrativos no Brasil. Ela substituiu definitivamente a antiga Lei 8.666/1993, a Lei do Pregão (10.520/2002) e o RDC, unificando as regras num único diploma. Desde 2023, é o regime obrigatório para as contratações públicas.' },
      { type: 'h2', text: 'Principais mudanças', id: 'mudancas' },
      { type: 'ul', items: [
        'Unificação: um único texto legal no lugar de três leis anteriores.',
        'PNCP: criação do Portal Nacional de Compras Públicas como ponto único e obrigatório de divulgação.',
        'Novos critérios de julgamento, incluindo maior desconto e melhor técnica ou conteúdo artístico.',
        'Ênfase no planejamento: estudo técnico preliminar, análise de riscos e plano de contratação anual.',
        'Matriz de riscos obrigatória em contratos de maior complexidade.',
      ] },
      { type: 'h2', text: 'Modalidades de licitação', id: 'modalidades' },
      { type: 'p', text: 'A nova lei prevê cinco modalidades. Nos termos do art. 28: "São modalidades de licitação: I – pregão; II – concorrência; III – concurso; IV – leilão; V – diálogo competitivo". O § 2º do mesmo artigo veda a criação de outras modalidades ou a combinação entre elas.' },
      { type: 'table', headers: ['Modalidade', 'Quando é usada'], rows: [
        ['Pregão', 'Bens e serviços comuns; julgado por menor preço ou maior desconto.'],
        ['Concorrência', 'Objetos de maior vulto ou complexidade; admite critérios técnicos.'],
        ['Concurso', 'Escolha de trabalho técnico, científico ou artístico.'],
        ['Leilão', 'Alienação de bens.'],
        ['Diálogo competitivo', 'Novidade da lei: soluções inovadoras, em que a administração dialoga com os licitantes antes de definir a solução.'],
      ] },
      { type: 'h2', text: 'Critérios de julgamento', id: 'criterios' },
      { type: 'ul', items: [
        'Menor preço.',
        'Maior desconto.',
        'Melhor técnica ou conteúdo artístico.',
        'Técnica e preço.',
        'Maior lance (no leilão).',
        'Maior retorno econômico.',
      ] },
      { type: 'h2', text: 'O que muda para as empresas', id: 'para-empresas' },
      { type: 'p', text: 'Para as empresas, a Lei 14.133/2021 traz mais previsibilidade (regras unificadas) e transparência (tudo no PNCP), mas também exige atenção a documentos de planejamento e à matriz de riscos. O julgamento por técnica e preço e o diálogo competitivo abrem espaço para quem tem diferencial técnico, além do menor preço.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O agente de compliance do Editus identifica automaticamente a modalidade e o critério de julgamento de cada edital, aplicando as regras específicas da Lei 14.133/2021 — de habilitação a prazos.' },
    ],
    faqs: [
      { q: 'A Lei 8.666 ainda vale?', a: 'Não para novas contratações. Desde o fim do período de transição, em 2023, a Lei 14.133/2021 é o regime obrigatório. Contratos antigos firmados sob a Lei 8.666 seguem regidos por ela até o encerramento.' },
      { q: 'Quais são as modalidades da nova lei?', a: 'São cinco: pregão, concorrência, concurso, leilão e diálogo competitivo. A tomada de preços e o convite, da lei antiga, foram extintos.' },
      { q: 'O que é o diálogo competitivo?', a: 'É uma modalidade nova, voltada a contratações de soluções inovadoras ou tecnicamente complexas, em que a administração conversa com os licitantes para desenvolver a solução antes de receber as propostas finais.' },
    ],
    related: ['pregao-eletronico-como-funciona', 'impugnacao-de-edital', 'como-calcular-bdi'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'pregao-eletronico-como-funciona',
    title: 'Como funciona o pregão eletrônico: guia completo para empresas',
    h1: 'Como funciona o pregão eletrônico',
    description:
      'O pregão eletrônico é a modalidade mais usada em licitações de bens e serviços comuns. Entenda as fases, os lances, a habilitação e como participar passo a passo.',
    kicker: 'Guia do pregão eletrônico',
    keyword: 'como funciona o pregão eletrônico',
    updated: '2026-08-05',
    readingTime: '7 min',
    blocks: [
      { type: 'p', text: 'O pregão eletrônico é a modalidade de licitação mais utilizada no Brasil para a compra de bens e serviços comuns — aqueles cujo desempenho e qualidade podem ser definidos por especificações usuais de mercado. Toda a disputa acontece pela internet, o que amplia a competição e dá transparência ao processo. Segundo o Ministério da Economia, o pregão eletrônico representa mais de 99% das licitações feitas pelo governo federal (Compras.gov.br, 2021).' },
      { type: 'p', text: 'Sob a Lei 14.133/2021, o pregão é definido no art. 6º, inciso XLI, como "modalidade de licitação obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto". A disputa é conduzida em plataformas como o Compras.gov.br (antigo Comprasnet) e portais estaduais e municipais.' },
      { type: 'h2', text: 'As fases do pregão eletrônico', id: 'fases' },
      { type: 'ol', items: [
        'Publicação do edital no PNCP, com o objeto, as exigências e a data da sessão.',
        'Cadastro e envio das propostas iniciais pelas empresas, antes da abertura.',
        'Sessão pública: abertura das propostas e início da etapa de lances.',
        'Etapa de lances: as empresas reduzem seus preços em tempo real até o encerramento.',
        'Julgamento e habilitação: verifica-se a documentação da empresa mais bem classificada.',
        'Adjudicação e homologação: o vencedor é declarado e o resultado é oficializado.',
      ] },
      { type: 'h2', text: 'A etapa de lances', id: 'lances' },
      { type: 'p', text: 'É o momento decisivo. Após a abertura das propostas, as empresas competem enviando lances sucessivos e decrescentes. Os dois modos de disputa mais comuns são o aberto e o aberto e fechado:' },
      { type: 'table', headers: ['Modo de disputa', 'Como funciona'], rows: [
        ['Aberto', 'Lances públicos e sucessivos por tempo determinado, com prorrogações automáticas enquanto houver novos lances.'],
        ['Aberto e fechado', 'Combina a etapa de lances públicos com um lance final sigiloso dos melhores classificados.'],
      ] },
      { type: 'h2', text: 'Habilitação: o vencedor precisa comprovar', id: 'habilitacao' },
      { type: 'p', text: 'Vencer o preço não basta. Antes de assinar, a empresa mais bem classificada precisa comprovar habilitação jurídica, regularidade fiscal e trabalhista, qualificação técnica e econômico-financeira. É aqui que muitas propostas caem — por uma certidão vencida ou um documento faltando.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus analisa o edital do pregão antes da sessão: verifica se sua empresa está habilitada, calcula o custo financeiro do prazo de pagamento e ajuda a definir o preço mínimo viável — para você não dar um lance que corrói a margem.' },
    ],
    faqs: [
      { q: 'Qual a diferença entre pregão eletrônico e presencial?', a: 'No pregão eletrônico toda a disputa ocorre pela internet, em plataforma como o Compras.gov.br. No presencial, hoje raro, os representantes comparecem fisicamente. A Lei 14.133/2021 prioriza a forma eletrônica.' },
      { q: 'Preciso de certificado digital para participar de pregão?', a: 'Para operar na maioria das plataformas e assinar documentos é necessário credenciamento e, em muitos casos, certificado digital. O cadastro no Compras.gov.br é o ponto de partida para pregões federais.' },
      { q: 'O menor preço sempre vence o pregão?', a: 'O menor preço é classificado em primeiro lugar, mas só vence se a empresa comprovar a habilitação e se o preço for exequível. Propostas inexequíveis ou com documentação irregular são desclassificadas.' },
    ],
    related: ['habilitacao-licitacao', 'margem-em-licitacao', 'carta-de-credenciamento-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'como-participar-de-licitacao',
    title: 'Como participar de uma licitação: passo a passo para empresas',
    h1: 'Como participar de uma licitação (passo a passo)',
    description:
      'Guia prático para a sua primeira licitação: do cadastro no Compras.gov.br à documentação de habilitação e ao envio da proposta. O que a empresa precisa para começar.',
    kicker: 'Guia para começar',
    keyword: 'como participar de licitação',
    updated: '2026-08-05',
    readingTime: '8 min',
    blocks: [
      { type: 'p', text: 'Participar de licitações é uma das formas mais previsíveis de conquistar um cliente com contratos de médio e longo prazo: o poder público — um mercado que representa cerca de 16% do PIB brasileiro, segundo o Ministério da Gestão e da Inovação (MGI). O processo tem regras claras, e uma empresa organizada consegue competir mesmo sem experiência prévia. Este é o passo a passo para começar.' },
      { type: 'h2', text: '1. Regularize a empresa', id: 'regularize' },
      { type: 'p', text: 'Antes de qualquer coisa, a empresa precisa estar em dia: CNPJ ativo, contrato social atualizado, e as certidões de regularidade fiscal e trabalhista válidas (federal, FGTS e CNDT). É a base da habilitação — sem isso, nem adianta disputar.' },
      { type: 'h2', text: '2. Faça o cadastro nas plataformas', id: 'cadastro' },
      { type: 'ul', items: [
        'Compras.gov.br: cadastro no SICAF para licitações federais.',
        'Portais estaduais e municipais: cada ente pode ter sua própria plataforma.',
        'Certificado digital: necessário para assinar propostas e documentos na maioria dos sistemas.',
      ] },
      { type: 'h2', text: '3. Encontre editais compatíveis', id: 'encontre' },
      { type: 'p', text: 'Todos os editais são publicados no PNCP — por força do art. 54 da Lei 14.133/2021: "A publicidade do edital de licitação será realizada mediante divulgação e manutenção do inteiro teor do ato convocatório e de seus anexos no Portal Nacional de Contratações Públicas (PNCP)". O desafio é achar os que combinam com o seu segmento, porte e região — e acompanhar as publicações continuamente, porque os prazos são curtos. Monitorar manualmente todos os dias é inviável para a maioria das empresas.' },
      { type: 'p', text: 'O volume dá a dimensão do desafio: segundo balanço do Ministério da Gestão e da Inovação, as contratações registradas no PNCP somaram R$ 1 trilhão em valores homologados em 2025, com 205 sistemas de compras de todo o país integrados ao portal.' },
      { type: 'h2', text: '4. Analise o edital antes de decidir', id: 'analise' },
      { type: 'p', text: 'Nem toda licitação vale a pena. Antes de investir tempo, avalie: sua empresa se habilita? Há cláusulas de risco ou penalidades desproporcionais? O prazo de pagamento (30, 60, 90 dias) corrói a margem? Essa análise é o que separa um contrato lucrativo de um prejuízo disfarçado.' },
      { type: 'h2', text: '5. Envie a proposta e dispute', id: 'proposta' },
      { type: 'p', text: 'Com a decisão tomada, monte a proposta conforme as exigências do edital, cadastre-a na plataforma dentro do prazo e participe da sessão. No pregão, isso inclui a etapa de lances.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus cobre as etapas 3, 4 e 5: monitora o PNCP pelo perfil da sua empresa, analisa cada edital compatível (habilitação, risco, custo financeiro) e prepara a proposta para você revisar e enviar.' },
    ],
    faqs: [
      { q: 'Qualquer empresa pode participar de licitação?', a: 'Sim, desde que atenda às condições de habilitação do edital e não esteja impedida (por exemplo, com registro no CEIS). MEI, ME e EPP inclusive têm benefícios legais, como o direito de preferência em empate.' },
      { q: 'Preciso de um consultor para participar?', a: 'Não é obrigatório. Em licitações mais simples, uma empresa organizada consegue participar sozinha. Em contratos complexos, uma consultoria ou ferramentas de análise ajudam a reduzir erros de habilitação e precificação.' },
      { q: 'Quanto custa participar de uma licitação?', a: 'Participar em si é gratuito. Os custos são indiretos: certificado digital, tempo de análise do edital, elaboração da proposta e, eventualmente, garantias exigidas pelo edital.' },
    ],
    related: ['o-que-e-sicaf', 'habilitacao-licitacao', 'margem-em-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'mei-pode-participar-de-licitacao',
    title: 'MEI pode participar de licitação? O que o microempreendedor precisa saber',
    h1: 'MEI pode participar de licitação?',
    description:
      'Sim, o MEI pode participar de licitações e ainda tem benefícios legais como ME/EPP. Veja os documentos, os limites de faturamento e como o microempreendedor concorre.',
    kicker: 'Guia para MEI',
    keyword: 'MEI pode participar de licitação',
    updated: '2026-08-05',
    readingTime: '5 min',
    blocks: [
      { type: 'p', text: 'Sim: o Microempreendedor Individual (MEI) pode participar de licitações públicas. Mais do que isso, o MEI é equiparado a microempresa (ME) e goza dos benefícios legais concedidos a ME e EPP na Lei Complementar 123/2006 — o que, em muitos casos, é uma vantagem competitiva real.' },
      { type: 'h2', text: 'Documentos que o MEI precisa', id: 'documentos' },
      { type: 'ul', items: [
        'Certificado da Condição de Microempreendedor Individual (CCMEI), que comprova a habilitação jurídica.',
        'Comprovante de inscrição no CNPJ.',
        'Certidões de regularidade fiscal e trabalhista (federal, FGTS e CNDT).',
        'Certificado digital, para operar nas plataformas e assinar a proposta.',
      ] },
      { type: 'h2', text: 'Os benefícios do MEI em licitações', id: 'beneficios' },
      { type: 'p', text: 'A Lei Complementar 123/2006 garante ao MEI, como ME que é, três vantagens concretas na disputa:' },
      { type: 'table', headers: ['Benefício', 'Como funciona', 'Base legal (LC 123/2006)'], rows: [
        ['Direito de preferência no empate (empate ficto)', 'Se a proposta do MEI/ME/EPP for até 5% superior à do vencedor no pregão (até 10% nas demais modalidades), ele pode cobrir o preço com um novo lance', 'Art. 44, §§ 1º e 2º'],
        ['Regularização fiscal facilitada', 'Prazo de 5 dias úteis, prorrogável por igual período, para sanar pendências fiscais e trabalhistas após ser declarado vencedor', 'Art. 43, § 1º'],
        ['Licitações e cotas exclusivas', 'Itens de contratação de até R$ 80.000,00 devem ser licitados exclusivamente para ME/EPP; em bens divisíveis, parte do objeto pode ser reservada em cota para ME/EPP', 'Art. 48, I e III'],
      ] },
      { type: 'p', text: 'No pregão, o benefício mais valioso tem redação literal na lei: "na modalidade de pregão, o intervalo percentual estabelecido no § 1º deste artigo será de até 5% (cinco por cento) superior ao melhor preço" (LC 123/2006, art. 44, § 2º). Na prática, se o MEI ficar em segundo lugar por até 5% de diferença, ganha o direito de dar um lance final abaixo do vencedor.' },
      { type: 'h2', text: 'O limite que o MEI precisa observar', id: 'limite' },
      { type: 'p', text: 'A principal atenção é o faturamento: o MEI tem um teto anual de receita bruta de R$ 81.000, fixado no art. 18-A da Lei Complementar 123/2006 e vigente desde 2018 — o equivalente a R$ 6.750 por mês. Ao disputar contratos públicos, o microempreendedor precisa garantir que a soma dos contratos não ultrapasse esse limite — caso contrário, será obrigado a migrar para ME, com outra carga tributária. Vale planejar o porte antes de assumir contratos maiores.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus considera o porte da empresa (MEI, ME, EPP) na análise: identifica cotas e benefícios aplicáveis, verifica a habilitação e sinaliza quando o valor do contrato exige atenção ao limite de faturamento.' },
    ],
    faqs: [
      { q: 'MEI tem vantagem em licitação?', a: 'Sim. Como é equiparado a ME, o MEI tem direito de preferência em empate (empate ficto), regularização fiscal facilitada e acesso a cotas e licitações exclusivas para ME/EPP em contratações de menor valor.' },
      { q: 'Qual o limite de faturamento do MEI em licitações?', a: 'O MEI deve respeitar o teto anual de receita da categoria. Contratos públicos contam para esse limite; ao ultrapassá-lo, o microempreendedor precisa migrar para ME, com regime tributário diferente.' },
      { q: 'MEI precisa de certificado digital para licitar?', a: 'Na prática, sim. A maioria das plataformas de licitação exige credenciamento e certificado digital para envio de propostas e assinatura de documentos.' },
    ],
    related: ['habilitacao-licitacao', 'certidao-vencida-licitacao', 'como-participar-de-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'o-que-e-sicaf',
    title: 'O que é o SICAF e como se cadastrar para licitar',
    h1: 'O que é o SICAF e como fazer o cadastro',
    description:
      'O SICAF é o cadastro que habilita empresas a participar de licitações federais. Entenda o que é, os níveis de cadastramento e o passo a passo para se registrar.',
    kicker: 'Guia do SICAF',
    keyword: 'o que é SICAF e como se cadastrar',
    updated: '2026-08-05',
    readingTime: '6 min',
    blocks: [
      { type: 'p', text: 'O SICAF (Sistema de Cadastramento Unificado de Fornecedores) é o registro oficial das empresas aptas a contratar com a administração pública federal. Estar cadastrado no SICAF simplifica a habilitação: em vez de apresentar dezenas de documentos a cada licitação, boa parte da regularidade da empresa já fica comprovada no sistema.' },
      { type: 'p', text: 'O cadastro é gratuito e feito pelo portal Compras.gov.br. É, na prática, o passo de entrada para quem quer disputar licitações federais — e a porta é movimentada: segundo o Ministério da Gestão e da Inovação em Serviços Públicos, o SICAF já reúne mais de 700 mil fornecedores cadastrados (dados de julho de 2024).' },
      { type: 'h2', text: 'Para que serve o SICAF', id: 'para-que-serve' },
      { type: 'ul', items: [
        'Comprova a regularidade fiscal, trabalhista e a habilitação jurídica da empresa de forma centralizada.',
        'Agiliza a fase de habilitação — o pregoeiro consulta o SICAF em vez de conferir documento por documento.',
        'Mantém o histórico e a situação cadastral da empresa atualizados perante o governo federal.',
      ] },
      { type: 'h2', text: 'Os níveis de cadastramento', id: 'niveis' },
      { type: 'p', text: 'O SICAF é organizado em seis níveis, definidos pela Instrução Normativa SEGES/MP nº 3/2018 — do credenciamento básico à qualificação técnica e econômico-financeira. Quanto mais completo o cadastro, menos documentos avulsos a empresa precisa apresentar em cada certame. Alguns editais exigem níveis específicos.' },
      { type: 'table', headers: ['Nível', 'O que comprova'], rows: [
        ['I — Credenciamento', 'Dados básicos do fornecedor (CNPJ/CPF, razão social, CNAE). É o nível mínimo para participar de pregão eletrônico e dispensa eletrônica.'],
        ['II — Habilitação jurídica', 'Ato constitutivo, contrato social e representantes legais.'],
        ['III — Regularidade fiscal e trabalhista federal', 'CND federal, CRF do FGTS e CNDT, atualizadas por integração com os órgãos emissores.'],
        ['IV — Regularidade fiscal estadual/distrital e municipal', 'Certidões estaduais e municipais, conforme a sede da empresa.'],
        ['V — Qualificação técnica', 'Atestados de capacidade técnica e registros em conselho de classe.'],
        ['VI — Qualificação econômico-financeira', 'Balanço patrimonial e certidão negativa de falência.'],
      ] },
      { type: 'h2', text: 'Passo a passo para se cadastrar', id: 'passo-a-passo' },
      { type: 'ol', items: [
        'Obtenha um certificado digital (e-CNPJ) para acessar o sistema.',
        'Acesse o Compras.gov.br e inicie o credenciamento como fornecedor.',
        'Preencha os dados da empresa e dos sócios/representantes.',
        'Anexe e valide as certidões de regularidade fiscal e trabalhista.',
        'Conclua os níveis adicionais (técnico e econômico) conforme o seu ramo.',
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'Depois de cadastrada, sua empresa precisa manter as certidões válidas — e é aqui que muitos perdem prazo. O Editus verifica a habilitação a cada edital e sinaliza certidões a vencer antes da sessão.' },
    ],
    faqs: [
      { q: 'O cadastro no SICAF é gratuito?', a: 'Sim. O credenciamento no SICAF é gratuito e feito pelo portal Compras.gov.br. O custo indireto é o certificado digital (e-CNPJ), necessário para acessar o sistema.' },
      { q: 'Preciso estar no SICAF para participar de qualquer licitação?', a: 'Para licitações federais no Compras.gov.br, o SICAF é o cadastro padrão. Estados e municípios podem ter seus próprios sistemas de cadastramento de fornecedores.' },
      { q: 'O SICAF substitui a apresentação de documentos?', a: 'Parcialmente. Ele comprova boa parte da regularidade da empresa, mas alguns editais ainda exigem documentos complementares específicos do objeto.' },
    ],
    related: ['habilitacao-licitacao', 'como-participar-de-licitacao', 'certidao-vencida-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'certidao-vencida-licitacao',
    title: 'Certidão vencida na licitação: o que fazer para não ser desclassificado',
    h1: 'Certidão vencida na licitação: o que fazer',
    description:
      'Uma certidão vencida é a causa mais comum de desclassificação em licitações. Entenda o que acontece, o que a lei permite (especialmente para ME/EPP) e como se prevenir.',
    kicker: 'Guia de certidões',
    keyword: 'certidão vencida na licitação',
    updated: '2026-08-05',
    readingTime: '5 min',
    blocks: [
      { type: 'p', text: 'Perder uma licitação por causa de uma certidão vencida é uma das frustrações mais comuns — e mais evitáveis — do processo. A empresa tem capacidade, oferece o melhor preço, mas é inabilitada por um documento que expirou dias antes da sessão. Entender as regras ajuda a não cair nessa.' },
      { type: 'h2', text: 'O que acontece se a certidão estiver vencida', id: 'o-que-acontece' },
      { type: 'p', text: 'Na regra geral, a empresa cuja documentação de regularidade fiscal ou trabalhista esteja vencida no momento da habilitação é inabilitada. As certidões precisam estar válidas na data exigida pelo edital — normalmente a da sessão ou a do envio da proposta.' },
      { type: 'h2', text: 'A exceção para ME e EPP', id: 'me-epp' },
      { type: 'p', text: 'A Lei Complementar 123/2006 dá um tratamento favorecido a microempresas e empresas de pequeno porte: mesmo com alguma restrição na regularidade fiscal, a ME/EPP pode ser declarada vencedora e tem um prazo para regularizar a situação antes da assinatura do contrato. É o que garante o art. 43, § 1º: "Havendo alguma restrição na comprovação da regularidade fiscal e trabalhista, será assegurado o prazo de cinco dias úteis, cujo termo inicial corresponderá ao momento em que o proponente for declarado vencedor do certame, prorrogável por igual período, a critério da administração pública, para regularização da documentação". Atenção: esse benefício vale para a regularidade fiscal e trabalhista — não para todos os documentos.' },
      { type: 'h2', text: 'Como se prevenir', id: 'prevencao' },
      { type: 'ul', items: [
        'Mantenha um calendário de validade de cada certidão (CND federal, FGTS, CNDT, estaduais e municipais).',
        'Emita as certidões novamente sempre que faltar pouco para o vencimento antes de uma sessão.',
        'Confira as datas exigidas pelo edital — algumas pedem validade na data da proposta, outras na sessão.',
      ] },
      { type: 'table', headers: ['Certidão', 'Quem emite', 'Validade'], rows: [
        ['CND de tributos federais e dívida ativa da União', 'Receita Federal / PGFN', '180 dias'],
        ['CRF do FGTS', 'Caixa Econômica Federal', '30 dias'],
        ['CNDT (débitos trabalhistas)', 'Justiça do Trabalho (TST)', '180 dias'],
        ['Certidões estaduais e municipais', 'Fazendas estaduais e municipais', 'Varia conforme o ente (comumente 30 a 180 dias)'],
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O agente de habilitação do Editus cruza as exigências do edital com o perfil da empresa e sinaliza certidões vencidas ou a vencer antes da sessão — reduzindo o risco de desclassificação por documentação.' },
    ],
    faqs: [
      { q: 'ME e EPP podem regularizar certidão depois de vencer a licitação?', a: 'Sim, quanto à regularidade fiscal e trabalhista. A Lei Complementar 123/2006 concede às ME/EPP um prazo para sanar pendências após serem declaradas vencedoras, antes da assinatura do contrato.' },
      { q: 'Certidão positiva com efeito de negativa serve?', a: 'Sim. A certidão positiva com efeitos de negativa (quando há débito com exigibilidade suspensa ou parcelado) é geralmente aceita como prova de regularidade, equivalendo à negativa.' },
      { q: 'Posso apresentar a certidão em outra data se ela venceu?', a: 'Fora da hipótese de ME/EPP, não. A regra geral exige a certidão válida na data definida pelo edital; documento vencido leva à inabilitação.' },
    ],
    related: ['habilitacao-licitacao', 'mei-pode-participar-de-licitacao', 'consulta-ceis-cnep-cepim'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'impugnacao-de-edital',
    title: 'Impugnação de edital de licitação: como e quando fazer',
    h1: 'Impugnação de edital: como e quando fazer',
    description:
      'A impugnação questiona cláusulas ilegais ou restritivas de um edital antes da sessão. Veja quem pode impugnar, os prazos e a diferença para o pedido de esclarecimento.',
    kicker: 'Guia de impugnação',
    keyword: 'como impugnar edital de licitação',
    updated: '2026-08-05',
    readingTime: '6 min',
    blocks: [
      { type: 'p', text: 'Nem todo edital é perfeito. Às vezes ele traz uma exigência restritiva, uma cláusula ilegal ou um erro que prejudica a competição. Nesses casos, a lei permite que se apresente uma impugnação — um questionamento formal ao órgão, antes da sessão, para corrigir ou anular o que estiver errado.' },
      { type: 'h2', text: 'Quem pode impugnar', id: 'quem-pode' },
      { type: 'p', text: 'Sob a Lei 14.133/2021, qualquer pessoa — cidadão ou empresa interessada — pode impugnar os termos do edital por irregularidade. Não é preciso já estar inscrito na licitação para impugnar.' },
      { type: 'p', text: 'É a redação literal do art. 164 da Lei 14.133/2021: "Qualquer pessoa é parte legítima para impugnar edital de licitação por irregularidade na aplicação desta Lei ou para solicitar esclarecimento sobre os seus termos, devendo protocolar o pedido até 3 (três) dias úteis antes da data de abertura do certame".' },
      { type: 'h2', text: 'Impugnação x pedido de esclarecimento', id: 'diferenca' },
      { type: 'table', headers: ['Instrumento', 'Para que serve', 'Prazo (Lei 14.133/2021)'], rows: [
        ['Impugnação', 'Aponta uma ilegalidade ou restrição indevida e pede correção ou anulação de cláusula do edital', 'Até 3 dias úteis antes da abertura do certame (art. 164)'],
        ['Pedido de esclarecimento', 'Apenas tira dúvidas sobre pontos do edital, sem questionar sua legalidade', 'Até 3 dias úteis antes da abertura do certame (art. 164)'],
        ['Recurso', 'Questiona decisões tomadas durante ou após o certame (habilitação, julgamento, resultado)', '3 dias úteis contados da intimação ou da lavratura da ata (art. 165, I)'],
      ] },
      { type: 'h2', text: 'Prazos', id: 'prazos' },
      { type: 'p', text: 'A Lei 14.133/2021 fixa o mesmo prazo para a impugnação e para o pedido de esclarecimento: até 3 dias úteis antes da data de abertura do certame (art. 164). O órgão também tem prazo legal para responder — pelo parágrafo único do art. 164, a resposta "será divulgada em sítio eletrônico oficial no prazo de até 3 (três) dias úteis, limitado ao último dia útil anterior à data da abertura do certame". Como os prazos são curtos, analisar o edital cedo é decisivo — quem só lê o edital na véspera perde a janela de impugnar.' },
      { type: 'h2', text: 'Como apresentar', id: 'como-apresentar' },
      { type: 'ol', items: [
        'Identifique a cláusula problemática e a base legal do questionamento.',
        'Redija a impugnação de forma objetiva, indicando o pedido (correção ou anulação).',
        'Protocole pelo canal indicado no edital (geralmente a plataforma ou e-mail do órgão), dentro do prazo.',
        'Acompanhe a resposta: o edital pode ser alterado, com eventual reabertura de prazo.',
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O agente de risco do Editus identifica cláusulas restritivas, penalidades desproporcionais e exigências possivelmente ilegais logo na análise do edital — dando tempo para você decidir se vale impugnar antes do prazo acabar.' },
    ],
    faqs: [
      { q: 'Qualquer pessoa pode impugnar um edital?', a: 'Sim. Sob a Lei 14.133/2021, qualquer pessoa pode impugnar os termos do edital por irregularidade, não sendo necessário já estar inscrito na licitação.' },
      { q: 'Impugnar o edital atrapalha minha participação?', a: 'Não. Impugnar é um direito e não impede a empresa de participar. Se a impugnação for aceita, o edital é corrigido — o que pode inclusive beneficiar quem apontou o problema.' },
      { q: 'Qual a diferença entre impugnação e recurso?', a: 'A impugnação questiona o edital antes da sessão. O recurso questiona decisões tomadas durante ou após o certame (habilitação, julgamento, resultado).' },
    ],
    related: ['lei-14133-resumo', 'consulta-ceis-cnep-cepim', 'carta-de-credenciamento-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'carta-de-credenciamento-licitacao',
    title: 'Carta de credenciamento e procuração em licitação: para que servem',
    h1: 'Carta de credenciamento e procuração em licitação',
    description:
      'A carta de credenciamento autoriza um representante a agir pela empresa na licitação. Entenda quando é exigida, o que deve conter e a diferença para a procuração.',
    kicker: 'Guia de credenciamento',
    keyword: 'carta de credenciamento licitação',
    updated: '2026-08-05',
    readingTime: '5 min',
    blocks: [
      { type: 'p', text: 'Em uma licitação, quem fala e assina pela empresa precisa ter poderes para isso. A carta de credenciamento (ou a procuração) é o documento que comprova que aquele representante está autorizado a agir em nome da empresa — dar lances, assinar atas, apresentar recursos e praticar os atos do certame.' },
      { type: 'h2', text: 'Quando é exigida', id: 'quando' },
      { type: 'p', text: 'É exigida sempre que quem representa a empresa no certame não é o próprio titular ou sócio administrador com poderes no contrato social. No pregão eletrônico, os poderes muitas vezes se comprovam pelo credenciamento na plataforma; em atos presenciais ou específicos, o documento formal pode ser pedido.' },
      { type: 'h2', text: 'O que a carta de credenciamento deve conter', id: 'conteudo' },
      { type: 'ul', items: [
        'Identificação completa da empresa (razão social, CNPJ) e do representante (nome, CPF, documento).',
        'Os poderes concedidos: formular lances, negociar preço, assinar atas, interpor e desistir de recursos.',
        'A licitação a que se refere (número do edital/órgão), quando específica.',
        'Data e assinatura do responsável legal da empresa.',
      ] },
      { type: 'h2', text: 'Carta de credenciamento x procuração', id: 'diferenca' },
      { type: 'p', text: 'Na prática ambas cumprem a função de outorgar poderes. A carta de credenciamento costuma ser um documento mais simples, específico para aquele certame. A procuração (por instrumento particular ou público) é mais formal e pode ter escopo mais amplo. O edital indica qual forma aceita — vale sempre conferir a exigência exata.' },
      { type: 'table', headers: ['Aspecto', 'Carta de credenciamento', 'Procuração'], rows: [
        ['Formalidade', 'Documento mais simples, em regra por instrumento particular', 'Mais formal; por instrumento particular ou público'],
        ['Escopo', 'Específica para aquele certame', 'Pode ter escopo mais amplo, cobrindo vários atos ou certames'],
        ['Reconhecimento de firma', 'Muitos editais aceitam assinatura simples do responsável legal', 'Alguns editais exigem firma reconhecida ou procuração pública'],
        ['Qual usar', 'Quando o edital aceita a forma simplificada', 'Quando o edital a exige ou quando os poderes outorgados são mais amplos'],
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'Na análise do edital, o Editus identifica as exigências de representação e credenciamento — para que a empresa chegue à sessão com a documentação de poderes correta e não perca a disputa por uma formalidade.' },
    ],
    faqs: [
      { q: 'Preciso de firma reconhecida na carta de credenciamento?', a: 'Depende do edital. Muitos aceitam a carta com assinatura simples do responsável legal; outros exigem firma reconhecida ou procuração pública. Confira sempre a exigência específica do edital.' },
      { q: 'No pregão eletrônico preciso de carta de credenciamento?', a: 'Em geral os poderes se comprovam pelo próprio credenciamento na plataforma. Ainda assim, alguns editais pedem o documento para atos específicos — leia as regras do certame.' },
      { q: 'Qual a diferença entre carta de credenciamento e procuração?', a: 'Ambas outorgam poderes ao representante. A carta costuma ser mais simples e específica para o certame; a procuração é mais formal e pode ter escopo mais amplo. O edital define qual é aceita.' },
    ],
    related: ['pregao-eletronico-como-funciona', 'como-participar-de-licitacao', 'o-que-e-pncp'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'margem-em-licitacao',
    title: 'Margem em licitação: como calcular sem perder dinheiro no contrato',
    h1: 'Como calcular a margem em uma licitação',
    description:
      'Ganhar a licitação pelo menor preço não garante lucro. Veja como calcular a margem real de um contrato público, incluindo custos indiretos e o custo financeiro do prazo de pagamento.',
    kicker: 'Guia de margem',
    keyword: 'como calcular margem em licitação',
    updated: '2026-08-18',
    readingTime: '7 min',
    blocks: [
      { type: 'p', text: 'Vencer uma licitação pelo menor preço é uma vitória parcial. O que decide se o contrato foi um bom negócio é a margem que resta depois de todos os custos — diretos, indiretos e financeiros. Muitas empresas calculam só os primeiros e descobrem tarde demais que o contrato deu prejuízo.' },
      { type: 'h2', text: 'Os três blocos de custo que compõem o preço', id: 'blocos-de-custo' },
      { type: 'table', headers: ['Bloco de custo', 'O que inclui', 'Onde entra no cálculo'], rows: [
        ['Custos diretos', 'Material, mão de obra e insumos diretamente ligados à execução do objeto', 'Base da planilha de preços'],
        ['Custos indiretos (BDI)', 'Administração central, tributos, riscos, garantias e lucro', 'Percentual aplicado sobre o custo direto'],
        ['Custo financeiro do prazo de pagamento', 'Capital que a empresa banca entre a execução e o recebimento (30, 60, 90 dias), com custo de carregamento ancorado na Selic', 'Calculado à parte e subtraído da margem planejada'],
      ] },
      { type: 'h2', text: 'O erro mais comum: ignorar o terceiro bloco', id: 'erro-comum' },
      { type: 'p', text: 'A maioria das empresas precifica direto e indireto (BDI) com cuidado, mas trata o prazo de pagamento como um detalhe administrativo, não como um custo. Não é: dinheiro parado por 90 dias tem custo de oportunidade real. Em um contrato de R$ 300 mil com prazo de 90 dias e a Selic em 14% a.a. — patamar definido pelo Copom, do Banco Central, em agosto de 2026 —, esse custo financeiro sozinho já consome cerca de 3,3% do valor — R$ 9.881, aproximadamente.' },
      { type: 'h2', text: 'Como calcular a margem real', id: 'como-calcular' },
      { type: 'ol', items: [
        'Some os custos diretos (material, mão de obra, insumos) do objeto do edital.',
        'Aplique o BDI para cobrir custos indiretos, tributos e a margem de lucro pretendida.',
        'Calcule o custo financeiro do prazo de pagamento do edital (Selic vigente convertida em taxa mensal, aplicada sobre o valor e o prazo em dias).',
        'Subtraia o custo financeiro da margem de lucro planejada no BDI — o que resta é a margem real do contrato.',
      ] },
      { type: 'p', text: 'Uma proposta que parecia lucrativa em 15,3% de margem bruta pode cair para 12,0% de margem real depois de embutir o custo financeiro do prazo — a diferença entre fechar um bom contrato e um que só parecia bom no papel.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O agente Precificador do Editus calcula o custo financeiro do prazo de pagamento de cada edital automaticamente e mostra o impacto na margem antes da decisão de participar — sem depender de planilha manual.' },
    ],
    faqs: [
      { q: 'O que é margem real em um contrato de licitação?', a: 'É a margem de lucro que resta depois de descontar não só os custos diretos e indiretos (BDI), mas também o custo financeiro do prazo de pagamento do órgão — um custo indireto que raramente é embutido no cálculo inicial.' },
      { q: 'Por que o prazo de pagamento afeta a margem?', a: 'Porque a empresa precisa financiar a operação (fornecedores, folha, tributos) enquanto aguarda o pagamento do órgão público. Esse capital tem um custo de carregamento, geralmente ancorado na Selic, que reduz a margem líquida do contrato.' },
      { q: 'Como saber se uma licitação vale a pena mesmo com prazo de pagamento longo?', a: 'Calculando o custo financeiro do prazo (valor do contrato × taxa mensal equivalente à Selic × prazo em dias/30) e subtraindo esse valor da margem de lucro planejada. Se a margem real ainda for positiva e aceitável, o contrato vale a pena.' },
    ],
    related: ['certidao-vencida-licitacao', 'como-calcular-bdi', 'como-participar-de-licitacao'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'como-calcular-bdi',
    title: 'Como calcular o BDI em licitação: guia da taxa de custos indiretos',
    h1: 'Como calcular o BDI em uma licitação',
    description:
      'O BDI (Benefícios e Despesas Indiretas) cobre custos que não entram direto na planilha de execução. Entenda a fórmula, os componentes e como aplicar corretamente na proposta.',
    kicker: 'Guia do BDI',
    keyword: 'como calcular BDI licitação',
    updated: '2026-08-18',
    readingTime: '6 min',
    blocks: [
      { type: 'p', text: 'BDI significa Benefícios e Despesas Indiretas. É o percentual aplicado sobre o custo direto de execução para cobrir tudo que não está na planilha de insumos e mão de obra, mas que é indispensável para a empresa operar e ter lucro: administração central, tributos, riscos, garantias e a margem de lucro pretendida.' },
      { type: 'h2', text: 'O que compõe o BDI', id: 'componentes' },
      { type: 'ul', items: [
        'Administração central: estrutura da empresa que não está alocada diretamente na obra ou serviço (escritório, gestão, apoio).',
        'Seguros e garantias: custos de apólices e garantias contratuais exigidas pelo edital.',
        'Riscos: margem para imprevistos não cobertos por outras rubricas.',
        'Despesas financeiras: custo do capital de giro necessário para a operação (diferente do custo financeiro do prazo de pagamento do próprio contrato, que é calculado separadamente).',
        'Tributos: PIS, COFINS, ISS ou ICMS, conforme o regime tributário da empresa e o objeto do contrato.',
        'Lucro: a margem de lucro pretendida pela empresa sobre o contrato.',
      ] },
      { type: 'h2', text: 'A fórmula básica', id: 'formula' },
      { type: 'p', text: 'O preço de venda é calculado aplicando o BDI sobre o custo direto: Preço = Custo Direto × (1 + BDI). Se o custo direto de um serviço é R$ 100 mil e o BDI aplicado é 25%, o preço final da proposta é R$ 125 mil.' },
      { type: 'h2', text: 'BDI para obras e serviços de engenharia', id: 'obras-engenharia' },
      { type: 'p', text: 'Editais de obras e serviços de engenharia costumam exigir que o BDI seja detalhado numa planilha própria (frequentemente no modelo do TCU ou similar), com cada componente aberto separadamente — não basta informar um percentual único. Fugir desse detalhamento quando o edital exige é motivo comum de questionamento na fase de julgamento.' },
      { type: 'h2', text: 'Faixas de referência', id: 'faixas' },
      { type: 'p', text: 'Não existe um BDI "correto" universal — ele varia por tipo de objeto (obra pesada, serviço contínuo, fornecimento de bens) e pela estrutura de custos de cada empresa. A referência mais usada pelos órgãos de controle é o Acórdão 2.622/2013 do Plenário do TCU, que analisou 529 contratos de obras públicas e fixou faixas de BDI por tipo de obra, usadas como parâmetro para identificar propostas com sobrepreço ou inexequíveis — percentuais acima do 3º quartil costumam exigir justificativa técnica formal. A composição real, porém, continua dependendo da planilha de cada licitante.' },
      { type: 'table', headers: ['Tipo de obra (Acórdão 2.622/2013-TCU)', '1º quartil', 'Médio', '3º quartil'], rows: [
        ['Construção de edifícios', '20,34%', '22,12%', '25,00%'],
        ['Construção de rodovias e ferrovias', '19,60%', '20,97%', '24,23%'],
        ['Redes de água e esgoto (saneamento)', '20,76%', '24,18%', '26,44%'],
        ['Redes de energia elétrica', '24,00%', '25,84%', '27,86%'],
        ['Obras portuárias, marítimas e fluviais', '22,80%', '27,48%', '30,95%'],
        ['Fornecimento de materiais e equipamentos', '11,10%', '14,02%', '16,80%'],
      ] },
      { type: 'p', text: 'Para propostas muito baixas, a régua é objetiva e está na própria lei: "no caso de obras e serviços de engenharia, serão consideradas inexequíveis as propostas cujos valores forem inferiores a 75% (setenta e cinco por cento) do valor orçado pela Administração" (Lei 14.133/2021, art. 59, § 4º).' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O agente Precificador do Editus identifica quando o edital exige detalhamento de BDI e sinaliza isso no relatório, além de calcular o custo financeiro do prazo de pagamento separadamente — para a empresa não confundir os dois na hora de definir o preço mínimo viável.' },
    ],
    faqs: [
      { q: 'O que significa BDI?', a: 'Benefícios e Despesas Indiretas — o percentual aplicado sobre o custo direto de execução para cobrir administração central, tributos, riscos, garantias e a margem de lucro da empresa.' },
      { q: 'O BDI é obrigatório em toda licitação?', a: 'A exigência de detalhamento formal do BDI é mais comum em obras e serviços de engenharia. Para bens e serviços comuns, a empresa ainda precisa considerar custos indiretos e lucro no preço, mas o edital pode não exigir a planilha detalhada.' },
      { q: 'Qual a diferença entre BDI e custo financeiro do prazo de pagamento?', a: 'O BDI cobre despesas indiretas gerais da operação (administração, tributos, riscos, lucro). O custo financeiro do prazo de pagamento é um cálculo específico do dinheiro que fica parado entre a execução e o recebimento do contrato — um custo adicional, não incluído automaticamente no BDI.' },
    ],
    related: ['margem-em-licitacao', 'lei-14133-resumo', 'pregao-eletronico-como-funciona'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'dispensa-de-licitacao',
    title: 'Dispensa de licitação: valores 2026 e dispensa eletrônica',
    h1: 'Dispensa de licitação: valores atualizados (art. 75) e como vender por dispensa eletrônica',
    description:
      'Dispensa de licitação: valores atualizados (R$ 65.492,11 e R$ 130.984,20, Decreto 12.807/2025) e como vender por dispensa eletrônica no Compras.gov.br.',
    kicker: 'Guia da dispensa',
    keyword: 'dispensa de licitação valor',
    updated: '2026-08-27',
    readingTime: '9 min',
    blocks: [
      { type: 'p', text: 'Dispensa de licitação é a contratação direta, sem o rito completo de uma licitação, permitida nas hipóteses do art. 75 da Lei 14.133/2021. Em 2026, o teto da dispensa por valor é de R$ 65.492,11 para compras e outros serviços e de R$ 130.984,20 para obras e serviços de engenharia, conforme o Decreto nº 12.807/2025, em vigor desde 1º de janeiro de 2026. Para vender por dispensa, sua empresa participa da dispensa eletrônica no Compras.gov.br: o órgão publica um aviso com prazo mínimo de 3 dias úteis, os fornecedores cadastram propostas e o sistema abre uma disputa de lances que dura de 6 a 10 horas.' },
      { type: 'h2', text: 'O que é dispensa de licitação (art. 75 da Lei 14.133/2021)', id: 'o-que-e-dispensa-de-licitacao' },
      { type: 'p', text: 'A dispensa existe para situações em que fazer uma licitação completa custaria mais do que o próprio contrato — ou em que não dá tempo de esperar. A hipótese mais comum é a dispensa por valor. O art. 75 da Lei 14.133/2021 diz que é dispensável a licitação "para contratação que envolva valores inferiores a R$ 100.000,00 (cem mil reais), no caso de obras e serviços de engenharia ou de serviços de manutenção de veículos automotores" (inciso I) e "para contratação que envolva valores inferiores a R$ 50.000,00 (cinquenta mil reais), no caso de outros serviços e compras" (inciso II). Esses valores nominais de 2021 são corrigidos todo ano por decreto — os vigentes estão na tabela abaixo.' },
      { type: 'p', text: 'Repare na palavra "inferiores": a contratação precisa ficar abaixo do teto, não vale chegar exatamente nele. E dispensa não significa venda sem concorrência: na prática, o órgão publica um aviso e escolhe a proposta mais barata entre as que chegarem. A diferença é que o processo é muito mais curto e simples do que um pregão.' },
      { type: 'h2', text: 'Valores da dispensa em 2026: tetos atualizados', id: 'valores-dispensa-2026' },
      { type: 'p', text: 'O art. 182 da Lei 14.133/2021 manda o Poder Executivo federal atualizar os valores da lei todo ano pelo IPCA-E. A atualização vigente veio com o Decreto nº 12.807, de 29 de dezembro de 2025 (publicado em 30/12/2025), que aplicou reajuste de 4,41% e revogou o Decreto nº 12.343/2024, que valia em 2025. Os novos tetos valem para processos de dispensa iniciados a partir de 1º de janeiro de 2026.' },
      { type: 'table', headers: ['Tipo de contratação', 'Teto 2025 (Decreto 12.343/2024, revogado)', 'Teto 2026 (Decreto 12.807/2025, vigente)'], rows: [
        ['Obras, serviços de engenharia e manutenção de veículos automotores (art. 75, I)', 'R$ 125.451,15', 'R$ 130.984,20'],
        ['Compras e outros serviços (art. 75, II)', 'R$ 62.725,59', 'R$ 65.492,11'],
        ['Consórcios públicos e agências executivas (art. 75, § 2º)', 'O dobro dos tetos acima', 'O dobro dos tetos acima'],
      ] },
      { type: 'callout', title: 'Os tetos mudam todo ano', text: 'Se você encontrar valores como R$ 62,7 mil ou R$ 125,4 mil por aí, são os tetos de 2025 — já superados. Como o art. 182 da Lei 14.133/2021 obriga a atualização anual pelo IPCA-E, sempre confira o decreto vigente antes de precificar. A divulgação oficial dos valores atualizados é feita no PNCP e no site do Planalto.' },
      { type: 'p', text: 'Um detalhe que pega muita gente: o teto não é por contrato. Pelo art. 75, § 1º, da Lei 14.133/2021, o órgão precisa somar tudo o que gastou no mesmo exercício financeiro com "objetos de mesma natureza, entendidos como tais aqueles relativos a contratações no mesmo ramo de atividade". Ou seja, um órgão não pode fazer três dispensas de R$ 40 mil com o mesmo tipo de objeto no mesmo ano — isso é fracionamento irregular. Para sua empresa, o risco é indireto, mas real: um contrato assinado em dispensa irregular pode ser anulado pelo controle interno ou pelo tribunal de contas.' },
      { type: 'h2', text: 'Outras hipóteses de dispensa além do valor', id: 'outras-hipoteses-de-dispensa' },
      { type: 'p', text: 'O art. 75 lista mais de quinze hipóteses de dispensa. Duas delas aparecem com frequência na rotina de quem vende para o governo:' },
      { type: 'ul', items: [
        'Emergência ou calamidade pública (art. 75, VIII): a lei permite contratar direto "nos casos de emergência ou de calamidade pública, quando caracterizada urgência de atendimento de situação que possa ocasionar prejuízo ou comprometer a continuidade dos serviços públicos ou a segurança de pessoas, obras, serviços, equipamentos e outros bens". O contrato fica limitado às parcelas concluíveis em até 1 ano, sem prorrogação e sem recontratar a mesma empresa pela mesma hipótese.',
        'Licitação deserta ou fracassada (art. 75, III): quando uma licitação feita há menos de 1 ano não deu certo — porque "não surgiram licitantes interessados ou não foram apresentadas propostas válidas", ou porque os preços ofertados ficaram muito acima do mercado —, o órgão pode contratar direto, desde que mantenha todas as condições do edital original. Vale acompanhar licitações desertas no seu segmento: elas podem virar contratação direta com você.',
        'Outras hipóteses do art. 75 incluem contratações ligadas a segurança nacional, pesquisa e desenvolvimento e situações específicas de mercado — menos comuns no dia a dia da PME.',
      ] },
      { type: 'h2', text: 'O que é dispensa eletrônica', id: 'o-que-e-dispensa-eletronica' },
      { type: 'p', text: 'O art. 75, § 3º, da Lei 14.133/2021 determina que as dispensas por valor "serão preferencialmente precedidas de divulgação de aviso em sítio eletrônico oficial, pelo prazo mínimo de 3 (três) dias úteis, com a especificação do objeto pretendido e com a manifestação de interesse da Administração em obter propostas adicionais de eventuais interessados, devendo ser selecionada a proposta mais vantajosa". No governo federal, esse procedimento foi padronizado pela IN SEGES/ME nº 67/2021, que criou o Sistema de Dispensa Eletrônica dentro do Compras.gov.br — e que também vale para estados e municípios quando usam recursos de transferências federais.' },
      { type: 'p', text: 'Funciona assim: o órgão publica o aviso de contratação direta no Compras.gov.br e no PNCP, e o sistema avisa por e-mail os fornecedores do SICAF cadastrados naquela linha de fornecimento. Passado o prazo mínimo de 3 dias úteis, abre automaticamente uma fase de lances públicos e sucessivos que, segundo a IN 67/2021, dura de 6 a 10 horas, sempre no horário de Brasília. Você pode configurar um valor final mínimo sigiloso, e o próprio sistema dá lances por você até esse limite.' },
      { type: 'h2', text: 'Como participar da dispensa eletrônica: passo a passo', id: 'como-participar-dispensa-eletronica' },
      { type: 'ol', items: [
        'Tenha conta gov.br da empresa e cadastro ativo no SICAF, com as linhas de fornecimento certas para o que você vende — é por elas que o sistema envia os avisos de dispensa.',
        'Acompanhe os avisos de contratação direta no Compras.gov.br e no PNCP. Pela IN SEGES/ME nº 67/2021, quem está no SICAF recebe o aviso automaticamente por e-mail na linha de fornecimento correspondente.',
        'Leia o aviso com atenção: objeto, quantidade, condições de entrega e documentos exigidos. Mesmo sem edital tradicional, o aviso define as regras do jogo.',
        'Cadastre sua proposta no sistema antes da data de abertura (no mínimo 3 dias úteis após a publicação do aviso). Se quiser, defina o valor final mínimo — ele fica sigiloso e o sistema cobre lances automaticamente até esse piso.',
        'Acompanhe a fase de lances, que abre automaticamente e dura de 6 a 10 horas, no horário de Brasília. O sistema mostra o menor lance em tempo real.',
        'Se terminar em primeiro, envie a proposta ajustada e os documentos de habilitação pelo próprio sistema — boa parte sai direto do SICAF — e aguarde a homologação e o empenho.',
      ] },
      { type: 'h2', text: 'Por que a dispensa é a porta de entrada da PME', id: 'porta-de-entrada-pme' },
      { type: 'p', text: 'Para quem nunca vendeu ao governo, a dispensa eletrônica é o caminho mais curto para o primeiro contrato. O processo é mais rápido, o documento de abertura é um aviso simplificado em vez de um edital de dezenas de páginas, e a habilitação se resolve quase toda pelo SICAF. Além disso, o tíquete baixo atrai menos concorrência de empresas grandes. É um bom campo de treino: você aprende o fluxo de proposta, lance e habilitação antes de disputar pregões maiores.' },
      { type: 'table', headers: ['Critério', 'Dispensa eletrônica', 'Pregão eletrônico'], rows: [
        ['Prazo mínimo para propostas', '3 dias úteis (art. 75, § 3º, Lei 14.133/2021)', '8 dias úteis para bens (art. 55, I, Lei 14.133/2021)'],
        ['Documento de abertura', 'Aviso de contratação direta, simplificado', 'Edital completo, sujeito a impugnação'],
        ['Disputa', 'Lances automáticos por 6 a 10 horas (IN SEGES/ME 67/2021)', 'Sessão pública conduzida por pregoeiro'],
        ['Limite de valor', 'Abaixo dos tetos do art. 75, I e II', 'Sem limite de valor'],
      ] },
      { type: 'h2', text: 'Cuidados antes de entrar na disputa', id: 'cuidados' },
      { type: 'ul', items: [
        'A habilitação básica continua valendo: regularidade fiscal, trabalhista e demais exigências do aviso. Mantenha o SICAF atualizado — certidão vencida no dia da convocação pode custar o contrato.',
        'Sua proposta vincula. O art. 155 da Lei 14.133/2021 tipifica infrações como não manter a proposta e deixar de entregar a documentação exigida, e o art. 156 prevê sanções que vão de advertência e multa até impedimento de licitar e contratar. Dispensa não é terra sem lei: só dê lance que você consegue honrar.',
        'Confira se o preço fecha a conta antes da disputa. Com lances automáticos de 6 a 10 horas, é fácil ganhar um contrato com margem negativa se o valor final mínimo foi mal calculado.',
        'Desconfie de dispensas em sequência do mesmo órgão para o mesmo objeto: se houver fracionamento irregular, o contrato pode ser anulado depois de assinado — e o prejuízo da operação parada fica com você.',
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus, hoje em acesso antecipado, vai monitorar o PNCP — onde os avisos de contratação direta são publicados — pelo perfil da sua empresa (CNPJ, segmento, UF, porte), sinalizando dispensas eletrônicas compatíveis e conferindo as exigências de habilitação antes de você cadastrar a proposta. Entre na lista de espera para testar primeiro.' },
    ],
    faqs: [
      { q: 'Qual é o valor da dispensa de licitação em 2026?', a: 'R$ 65.492,11 para compras e outros serviços e R$ 130.984,20 para obras e serviços de engenharia, conforme o Decreto nº 12.807/2025, em vigor desde 1º de janeiro de 2026. Os tetos dobram para consórcios públicos e agências executivas e são corrigidos todo ano pelo IPCA-E, por força do art. 182 da Lei 14.133/2021.' },
      { q: 'Preciso estar no SICAF para participar de dispensa eletrônica?', a: 'Sim. No sistema federal (Compras.gov.br), é o cadastro no SICAF que permite enviar proposta e comprovar habilitação — e é por ele que você recebe os avisos de contratação direta da sua linha de fornecimento, conforme a IN SEGES/ME nº 67/2021.' },
      { q: 'Quanto tempo dura uma dispensa eletrônica?', a: 'O prazo mínimo é de 3 dias úteis entre o aviso e a abertura das propostas (art. 75, § 3º, da Lei 14.133/2021), e a disputa de lances dura de 6 a 10 horas (IN SEGES/ME nº 67/2021). É bem mais rápido que um pregão, cujo prazo mínimo de propostas é de 8 dias úteis para bens.' },
    ],
    related: ['como-participar-de-licitacao', 'pregao-eletronico-como-funciona', 'o-que-e-sicaf'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'atestado-de-capacidade-tecnica',
    title: 'Atestado de capacidade técnica: como conseguir com empresa nova',
    h1: 'Atestado de capacidade técnica: como conseguir quando sua empresa é nova',
    description:
      'Como conseguir atestado de capacidade técnica com empresa nova: quem pode emitir, o que o documento precisa conter e 5 estratégias para os primeiros contratos.',
    kicker: 'Guia de qualificação técnica',
    keyword: 'como conseguir atestado de capacidade técnica',
    updated: '2026-08-27',
    readingTime: '9 min',
    blocks: [
      { type: 'p', text: 'Para conseguir atestado de capacidade técnica com uma empresa nova, o caminho é gerar experiência comprovável: executar contratos privados menores (atestado de cliente privado vale em licitação), vencer dispensas eletrônicas de pequeno valor, atuar como subcontratada ou entrar em consórcio com empresa experiente. O atestado é a declaração de um cliente — público ou privado — de que sua empresa executou determinado objeto, e sua exigência em editais se baseia no art. 67 da Lei 14.133/2021. Não existe primeiro atestado sem primeiro contrato: a estratégia é começar pelas contratações que não exigem experiência prévia e documentar cada entrega.' },
      { type: 'h2', text: 'O que é o atestado e por que os editais exigem', id: 'o-que-e' },
      { type: 'p', text: 'O atestado de capacidade técnica é o documento pelo qual um cliente anterior declara que sua empresa executou obra, serviço ou fornecimento com determinadas características e quantidades. O órgão público exige esse documento para reduzir o risco de contratar quem nunca entregou algo parecido — é uma das quatro frentes da habilitação, ao lado da jurídica, da fiscal e da econômico-financeira.' },
      { type: 'p', text: 'A base legal é o art. 67 da Lei 14.133/2021: "a documentação relativa à qualificação técnico-profissional e técnico-operacional será restrita a" uma lista fechada, que inclui, no inciso I, a "apresentação de profissional, devidamente registrado no conselho profissional competente, quando for o caso, detentor de atestado de responsabilidade técnica por execução de obra ou serviço de características semelhantes" e, no inciso II, "certidões ou atestados" que "demonstrem capacidade operacional na execução de serviços similares de complexidade tecnológica e operacional equivalente ou superior". A palavra "restrita" importa: o edital não pode inventar exigências fora dessa lista.' },
      { type: 'h2', text: 'Técnico-operacional vs. técnico-profissional: qual a diferença', id: 'operacional-vs-profissional' },
      { type: 'p', text: 'O art. 67 trata de duas qualificações diferentes, e confundi-las é fonte comum de inabilitação. A técnico-operacional é a experiência da empresa (pessoa jurídica); a técnico-profissional é a experiência dos profissionais (pessoas físicas) do seu quadro.' },
      { type: 'table', headers: ['', 'Técnico-operacional', 'Técnico-profissional'], rows: [
        ['De quem é a experiência', 'Da empresa (pessoa jurídica)', 'Do profissional (pessoa física) do quadro'],
        ['Como se comprova', 'Atestado emitido pelo cliente em nome da empresa (art. 67, II)', 'Atestado do profissional; em obras e serviços de engenharia, acompanhado da CAT emitida pelo CREA/CAU (art. 67, I)'],
        ['Registro no conselho', 'Não pode ser exigido — o TCU considera a exigência irregular (Acórdão 3.094/2020-Plenário)', 'Exigível quando houver conselho competente ("quando for o caso", art. 67, I)'],
        ['Exemplo prático', '"A empresa X executou 1.200 m² de pintura predial para nós"', '"O engenheiro Y foi o responsável técnico pela obra Z"'],
      ] },
      { type: 'h2', text: 'Quem pode emitir: cliente público ou privado', id: 'quem-pode-emitir' },
      { type: 'p', text: 'Muita empresa nova acredita que só atestado de órgão público vale. Não é verdade: o atestado pode ser emitido por qualquer cliente, público ou privado. A Lei 8.666/1993 dizia isso expressamente no art. 30, § 1º ("atestados fornecidos por pessoas jurídicas de direito público ou privado"), e a Lei 14.133/2021 manteve o entendimento ao não restringir o emitente no art. 67. Aquele contrato de manutenção que você prestou para uma indústria da região pode ser seu primeiro atestado.' },
      { type: 'p', text: 'Dois cuidados: o emitente deve ser quem de fato contratou o serviço (não um intermediário), e o TCU vê conflito de interesse quando a empresa emitente e a atestada têm o mesmo sócio ou representante — na prática, uma autodeclaração de capacidade (Acórdão 602/2018-Plenário). O órgão pode fazer diligência para confirmar a veracidade do documento, então tudo o que constar nele precisa ser comprovável.' },
      { type: 'h2', text: 'O que o documento precisa conter', id: 'o-que-deve-conter' },
      { type: 'p', text: 'A Lei 14.133/2021 não traz um modelo obrigatório de atestado. O conteúdo abaixo é o mínimo que a prática dos editais e a jurisprudência consolidaram — atestado genérico, sem quantidades nem prazos, costuma ser desconsiderado pela comissão.' },
      { type: 'table', headers: ['Item', 'O que deve constar'], rows: [
        ['Emitente', 'Razão social, CNPJ, endereço e contato de quem contratou (órgão público ou empresa privada)'],
        ['Empresa atestada', 'Razão social e CNPJ da sua empresa, identificada como executora do contrato'],
        ['Objeto', 'Descrição clara do serviço ou fornecimento, em termos compatíveis com o que os editais do seu ramo pedem'],
        ['Quantidades', 'Quantitativos com unidades (m², postos de trabalho, licenças, toneladas) — sem eles não dá para comprovar os mínimos do art. 67, § 2º'],
        ['Prazo e local', 'Período de execução (início e fim) e local da prestação'],
        ['Qualidade', 'Declaração de que o objeto foi executado a contento, sem inadimplemento contratual'],
        ['Assinatura', 'Nome legível, cargo e contato do signatário, para o órgão poder diligenciar'],
      ] },
      { type: 'callout', title: 'Peça o atestado na entrega, não na véspera do pregão', text: 'O pior momento para pedir um atestado é quando o edital já está publicado: o cliente demora, o responsável mudou de empresa, o prazo aperta. Crie a rotina de solicitar o atestado ao concluir cada contrato relevante — inclusive dos clientes privados — e mantenha um arquivo organizado com todos eles.' },
      { type: 'h2', text: '5 estratégias legítimas para os primeiros atestados', id: 'estrategias' },
      { type: 'ol', items: [
        'Comece por contratos privados no seu ramo. Cada cliente privado atendido pode emitir atestado válido para licitações. Priorize contratos cujo objeto se pareça com o que os editais da sua área costumam pedir e formalize tudo (contrato, notas fiscais, medições).',
        'Dispute dispensas eletrônicas. São contratações de até R$ 65.492,11 para compras e demais serviços e até R$ 130.984,20 para obras e serviços de engenharia, conforme o art. 75, I e II, da Lei 14.133/2021, com valores atualizados para 2026 pelo Decreto 12.807/2025. As exigências de habilitação tendem a ser mais enxutas — muitas nem pedem atestado — e cada contrato executado vira um atestado emitido por órgão público.',
        'Atue como subcontratada de uma empresa maior. Quem contratou seus serviços pode atestá-los, mesmo sendo outra empresa privada. O art. 67, § 9º, da Lei 14.133/2021 também permite que o edital aceite qualificação técnica "por meio de atestados relativos a potencial subcontratado, limitado a 25% do objeto a ser licitado" — uma porta para empresas novas entrarem em contratos maiores ao lado de licitantes experientes.',
        'Entre em consórcio. Quando o edital admite consórcio (art. 15 da Lei 14.133/2021), a qualificação técnica pode ser demonstrada pelos consorciados em conjunto — sua empresa soma força comercial e ganha histórico de execução.',
        'Some atestados pequenos. Segundo o TCU, o somatório de atestados para comprovar quantitativos é a regra, e a vedação é medida excepcional que exige justificativa técnica detalhada no processo (Acórdãos 1.153/2024 e 2.839/2025, ambos do Plenário). Vários contratos menores podem, juntos, atingir o quantitativo mínimo exigido.',
      ] },
      { type: 'h2', text: 'Limites que o edital não pode impor', id: 'limites-do-edital' },
      { type: 'p', text: 'A Lei 14.133/2021 blindou o licitante contra exigências desproporcionais. O art. 67, § 1º, restringe os atestados às "parcelas de maior relevância ou valor significativo do objeto da licitação, assim consideradas as que tenham valor individual igual ou superior a 4% (quatro por cento) do valor total estimado da contratação". E o § 2º fixa o teto: "será admitida a exigência de atestados com quantidades mínimas de até 50% (cinquenta por cento) das parcelas de que trata o referido parágrafo, vedadas limitações de tempo e de locais específicos relativas aos atestados".' },
      { type: 'p', text: 'O TCU aplica esse teto com rigor: no Acórdão 1.604/2025-Plenário, afastou exigência de comprovação de experiência acima de 50% do quantitativo, reafirmando que o art. 67, § 2º, impede editais que pediam 80% ou 100% do objeto. Mesmo antes da nova lei, a Súmula 263 do TCU já exigia que quantitativos mínimos guardassem "proporção com a dimensão e a complexidade do objeto". Fique atento a estes sinais de ilegalidade:' },
      { type: 'ul', items: [
        'Quantitativo mínimo acima de 50% da parcela de maior relevância (viola o art. 67, § 2º).',
        'Exigência de atestado para parcelas irrelevantes, abaixo de 4% do valor estimado (viola o art. 67, § 1º).',
        'Recusa de atestado por ser "antigo" ou exigência de experiência no município do órgão — o § 2º veda limitações de tempo e de local. Exceção: em serviços contínuos, o edital pode exigir comprovação de execução por período mínimo, limitado a 3 anos (art. 67, § 5º).',
        'Proibição de somar atestados sem justificativa técnica detalhada no processo (Acórdão 1.153/2024-Plenário do TCU).',
        'Exigência de registro no CREA do atestado da empresa — veja a seção seguinte.',
      ] },
      { type: 'p', text: 'Encontrou uma dessas exigências? Impugne o edital: qualquer pessoa pode fazê-lo até 3 dias úteis antes da abertura do certame, conforme o art. 164 da Lei 14.133/2021. Para empresa nova, derrubar uma exigência ilegal de quantitativo costuma ser a diferença entre participar ou ficar de fora.' },
      { type: 'h2', text: 'O erro do CAT/CREA: quando o registro no conselho é exigível', id: 'cat-crea' },
      { type: 'p', text: 'Em obras e serviços de engenharia, a qualificação técnico-profissional exige que a experiência do profissional esteja registrada no conselho: é a CAT (Certidão de Acervo Técnico), emitida pelo CREA ou CAU com base nas ARTs/RRTs recolhidas durante a execução. O erro comum da empresa nova é apresentar só o atestado assinado pelo cliente, sem a CAT, quando o edital a exige — resultado: inabilitação. Se você presta serviços de engenharia, registre a ART de cada contrato desde o primeiro; sem ART não existe CAT depois.' },
      { type: 'p', text: 'O inverso também acontece: editais que exigem registro no CREA do atestado da empresa (técnico-operacional). Essa exigência é irregular — o art. 55 da Resolução 1.025/2009 do Confea veda a emissão de CAT em nome de pessoa jurídica, e o TCU firmou que exigir registro ou averbação no CREA de atestado técnico-operacional é indevido, cabendo o registro apenas para a qualificação técnico-profissional (Acórdão 3.094/2020-Plenário, Informativo de Licitações e Contratos 404). Se o edital pedir, é caso de impugnação.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus está em acesso antecipado. O leitor de editais em construção vai extrair as exigências de qualificação técnica de cada edital — quantitativos mínimos, percentuais, pedidos de CAT — e cruzá-las com os atestados cadastrados no perfil da sua empresa, sinalizando o que falta e o que parece exceder os limites do art. 67 da Lei 14.133/2021 (como quantitativos acima de 50%, que podem ser impugnados). Entre na lista de espera para testar antes do lançamento.' },
    ],
    faqs: [
      { q: 'Atestado de capacidade técnica emitido por empresa privada vale em licitação?', a: 'Sim. O atestado pode ser emitido por cliente público ou privado — a Lei 14.133/2021 não restringe o emitente no art. 67, e a aceitação de atestados privados é entendimento consolidado desde o art. 30, § 1º, da Lei 8.666/1993. O que importa é a compatibilidade do objeto e a veracidade das informações, que o órgão pode confirmar por diligência.' },
      { q: 'O edital pode exigir atestado com 100% do quantitativo do objeto?', a: 'Não. O art. 67, § 2º, da Lei 14.133/2021 limita a exigência a 50% das parcelas de maior relevância ou valor significativo, e o TCU aplicou esse teto no Acórdão 1.604/2025-Plenário. Acima disso, só com justificativa técnica excepcional. Se o edital ultrapassar o limite, impugne até 3 dias úteis antes da abertura (art. 164).' },
      { q: 'Empresa nova, sem nenhum atestado, pode participar de licitação?', a: 'Sim. Nem todo edital exige qualificação técnica: dispensas eletrônicas e objetos simples costumam pedir apenas habilitação jurídica e fiscal. Comece por essas contratações, execute bem e peça o atestado ao final. Cada contrato concluído, público ou privado, vira prova de capacidade para os próximos editais.' },
    ],
    related: ['habilitacao-licitacao', 'dispensa-de-licitacao', 'impugnacao-de-edital'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'venci-a-licitacao-e-agora',
    title: 'Venci a licitação, e agora? Empenho, liquidação e pagamento',
    h1: 'Venci a licitação, e agora? Empenho, entrega, nota fiscal, liquidação e pagamento',
    description:
      'Venceu a licitação? Veja o que é nota de empenho, como funciona a liquidação e quando o governo paga, com os prazos da Lei 14.133/2021 e da IN SEGES 77/2022.',
    kicker: 'Guia do vencedor',
    keyword: 'nota de empenho o que é',
    updated: '2026-08-27',
    readingTime: '9 min',
    blocks: [
      { type: 'p', text: 'Depois de vencer uma licitação, a sequência é: homologação do resultado, assinatura do contrato ou da ata, emissão da nota de empenho, entrega ou execução, emissão da nota fiscal, liquidação da despesa e, só então, o pagamento. A nota de empenho é o documento que reserva no orçamento do órgão o dinheiro do seu contrato — e sem ela é proibido executar, porque o art. 60 da Lei 4.320/1964 veda "a realização de despesa sem prévio empenho". No âmbito federal, a Instrução Normativa SEGES/ME nº 77/2022 dá à Administração até 10 dias úteis para liquidar a despesa após receber sua nota fiscal e mais 10 dias úteis para pagar — até 20 dias úteis no total. Em estados e municípios, vale o prazo do edital e do regulamento local.' },
      { type: 'p', text: 'Ganhar o pregão é só metade do jogo. O dinheiro não cai na conta na semana seguinte porque a despesa pública obrigatoriamente passa por três estágios — empenho, liquidação e pagamento (arts. 58 a 64 da Lei 4.320/1964) — e cada um tem dono, conferência e prazo próprios. Este guia mostra a jornada completa, em ordem, e onde cada etapa pode travar.' },
      { type: 'h2', text: 'A jornada completa em 8 passos', id: 'jornada-em-8-passos' },
      { type: 'ol', items: [
        'Homologação e adjudicação: a autoridade do órgão confirma o resultado e declara sua empresa vencedora (art. 71, inciso IV, da Lei 14.133/2021).',
        'Assinatura do contrato ou da ata de registro de preços: você é convocado e precisa assinar no prazo do edital, sob pena de perder a contratação (art. 90 da Lei 14.133/2021).',
        'Nota de empenho: o órgão reserva o valor no orçamento e emite o documento em seu nome. Nada de entregar antes disso.',
        'Entrega ou execução: você cumpre exatamente o que está no edital, no termo de referência e no contrato, com recebimento provisório e depois definitivo (art. 140 da Lei 14.133/2021).',
        'Nota fiscal e documentação de cobrança: você emite a NF conforme o contrato e entrega junto com certidões e comprovantes exigidos.',
        'Liquidação: o fiscal do contrato confere se o que foi entregue bate com o que foi contratado e cobrado (art. 63 da Lei 4.320/1964). No âmbito federal, até 10 dias úteis.',
        'Pagamento: com a despesa liquidada, seu crédito entra na fila da ordem cronológica (art. 141 da Lei 14.133/2021) e é pago — no âmbito federal, em até 10 dias úteis após a liquidação.',
        'Se atrasar: o contrato deve prever atualização monetária, e atraso superior a 2 meses dá direito de extinguir o contrato (art. 137, § 2º, inciso IV, da Lei 14.133/2021).',
      ] },
      { type: 'h2', text: '1. Homologação e adjudicação: a vitória vira oficial', id: 'homologacao-e-adjudicacao' },
      { type: 'p', text: 'Encerrados o julgamento, a habilitação e os recursos, o processo sobe para a autoridade superior do órgão, que pode devolver para correção, revogar, anular ou — o cenário que interessa a você — "adjudicar o objeto e homologar a licitação" (art. 71, inciso IV, da Lei 14.133/2021). A adjudicação atribui o objeto à sua empresa; a homologação confirma que o processo foi regular. Atenção: segundo jurisprudência consolidada do STJ, vencer a licitação gera expectativa de direito, não direito garantido ao contrato — o órgão ainda pode revogar o certame por fato superveniente justificado. Por isso, não compre estoque nem mobilize equipe nesta fase.' },
      { type: 'h2', text: '2. Assinatura do contrato ou da ata de registro de preços', id: 'assinatura-do-contrato' },
      { type: 'p', text: 'Depois da homologação, o órgão convoca sua empresa para assinar. O art. 90 da Lei 14.133/2021 determina que "a Administração convocará regularmente o licitante vencedor para assinar o termo de contrato ou para aceitar ou retirar o instrumento equivalente, dentro do prazo e nas condições estabelecidas no edital de licitação, sob pena de decair o direito à contratação". O prazo, portanto, é o que está no SEU edital — leia a cláusula de convocação com atenção. Se precisar de mais tempo, o § 1º do mesmo artigo permite prorrogar uma única vez, por igual período, com justificativa apresentada antes de o prazo vencer.' },
      { type: 'p', text: 'E se recusar? A recusa injustificada sai caro: pelo art. 90, § 5º, da Lei 14.133/2021, ela "caracterizará o descumprimento total da obrigação assumida" e sujeita a empresa às sanções da lei e à perda imediata da garantia de proposta, se houver. O órgão pode então convocar os licitantes remanescentes, na ordem de classificação, para contratar nas condições da sua proposta (art. 90, § 2º). Ou seja: só dispute licitação que você consegue cumprir pelo preço que ofertou.' },
      { type: 'h2', text: '3. Nota de empenho: nada acontece sem ela', id: 'nota-de-empenho' },
      { type: 'p', text: 'Empenho é a reserva formal de dinheiro do orçamento para pagar o seu contrato. A definição legal está no art. 58 da Lei 4.320/1964: "o empenho de despesa é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição". A nota de empenho é o documento que materializa esse ato e, conforme o art. 61 da mesma lei, indica o nome do credor (sua empresa), a especificação e a importância da despesa. Em muitas compras de menor valor, a própria nota de empenho substitui o termo de contrato.' },
      { type: 'p', text: 'Por que ela é inegociável? Porque o art. 60 da Lei 4.320/1964 é taxativo: "é vedada a realização de despesa sem prévio empenho". Sem empenho, não existe dinheiro separado para você — existe só uma promessa verbal. Com a nota de empenho em mãos, você tem o número do documento, o valor reservado e a dotação orçamentária de onde ele sai: é isso que sustenta sua cobrança lá na frente.' },
      { type: 'callout', title: 'Nunca execute sem a nota de empenho', text: 'Pedido por telefone, e-mail do setor de compras ou pressa do órgão não substituem o empenho. Quem entrega sem nota de empenho fica com uma despesa irregular do lado do governo — e a cobrança tende a virar um processo administrativo de reconhecimento de dívida, sem prazo definido e sem lugar na fila normal de pagamentos. Regra prática: recebeu a convocação, assinou o contrato, exija a nota de empenho antes de separar o primeiro item do estoque.' },
      { type: 'h2', text: '4. Entrega e execução conforme o edital', id: 'entrega-e-execucao' },
      { type: 'p', text: 'Execute exatamente o que está no termo de referência e no contrato: marca ofertada, quantidade, prazo, local e horário de entrega. Quem confere é o fiscal do contrato, servidor designado para acompanhar a execução. Pela Lei 14.133/2021, art. 140, o objeto é recebido em duas etapas: recebimento provisório (conferência inicial) e recebimento definitivo, com "termo detalhado que comprove o atendimento das exigências contratuais". Divergência entre o entregue e o contratado é a causa número um de pagamento travado — e o relógio do pagamento ainda nem começou a contar nesta fase.' },
      { type: 'ul', items: [
        'Documente tudo: protocolo de entrega assinado, fotos, canhoto da transportadora, e-mails com o fiscal.',
        'Entregue a marca e o modelo da proposta — trocar por "equivalente" sem autorização formal é inexecução contratual.',
        'Mantenha suas certidões válidas durante toda a execução: o art. 92, inciso XVI, da Lei 14.133/2021 obriga o contratado a manter as condições de habilitação até o fim do contrato — certidão vencida na hora do pagamento é retenção na certa.',
      ] },
      { type: 'h2', text: '5. Nota fiscal e documentação de cobrança', id: 'nota-fiscal-e-cobranca' },
      { type: 'p', text: 'Entregou? Emita a nota fiscal do jeito que o contrato manda: CNPJ e razão social do órgão corretos, descrição idêntica à do empenho, número da nota de empenho e do contrato no corpo da NF, e os anexos que o edital exigir (certidões de regularidade fiscal e trabalhista, relatórios de medição, boletins de serviço). Erro de preenchimento devolve a nota e zera a contagem: pela IN SEGES/ME nº 77/2022, o tempo que a empresa leva para corrigir a cobrança não conta no prazo da Administração. Capriche na primeira emissão — cada devolução é semana perdida.' },
      { type: 'h2', text: '6. Liquidação: a etapa que ninguém explica', id: 'liquidacao' },
      { type: 'p', text: 'Entre a sua nota fiscal e o dinheiro existe uma etapa que quase nenhum iniciante conhece: a liquidação. Pelo art. 63 da Lei 4.320/1964, "a liquidação da despesa consiste na verificação do direito adquirido pelo credor tendo por base os títulos e documentos comprobatórios do respectivo crédito". Traduzindo: o fiscal do contrato e o setor financeiro conferem se a entrega aconteceu, se bate com o contrato e se a nota fiscal está correta. E o art. 62 da mesma lei amarra tudo: "o pagamento da despesa só será efetuado quando ordenado após sua regular liquidação". Sem liquidação, não existe pagamento — nem fila de pagamento.' },
      { type: 'p', text: 'No âmbito federal (administração direta, autarquias e fundações), o art. 7º, inciso I, da Instrução Normativa SEGES/ME nº 77/2022 fixa prazo máximo de 10 dias úteis para a liquidação, contados do recebimento da nota fiscal. É a liquidação — não a entrega, não a NF — que marca a entrada do seu crédito na fila cronológica de pagamentos do art. 141 da Lei 14.133/2021. Por isso vale a pena acompanhar: pergunte ao fiscal se a despesa já foi liquidada e anote a data.' },
      { type: 'h2', text: '7. Pagamento: prazos reais e ordem cronológica', id: 'pagamento' },
      { type: 'p', text: 'Aqui mora a maior confusão do mercado: a Lei 14.133/2021 não repete o prazo geral de "até 30 dias" que constava do art. 40, inciso XIV, alínea "a", da antiga Lei 8.666/1993. Hoje, o prazo de pagamento é o que estiver no seu contrato — o art. 92, inciso V, da Lei 14.133/2021 exige cláusula com "o preço e as condições de pagamento" e os critérios de atualização monetária — combinado com o regulamento de cada ente. No âmbito federal, o art. 7º, inciso II, da IN SEGES/ME nº 77/2022 fixa até 10 dias úteis para pagar, contados da liquidação. Somando as duas pontas: até 20 dias úteis entre a nota fiscal e o dinheiro na conta, quando tudo corre bem.' },
      { type: 'table', headers: ['Etapa', 'Prazo máximo (âmbito federal)', 'Fonte'], rows: [
        ['Liquidação da despesa', '10 dias úteis a contar do recebimento da nota fiscal', 'IN SEGES/ME nº 77/2022, art. 7º, I'],
        ['Pagamento', '10 dias úteis a contar da liquidação', 'IN SEGES/ME nº 77/2022, art. 7º, II'],
        ['Contratações de pequeno valor (até o limite do art. 75, II, da Lei 14.133/2021)', 'Metade: 5 dias úteis para liquidar + 5 dias úteis para pagar', 'IN SEGES/ME nº 77/2022, art. 7º, § 2º'],
        ['Estados e municípios', 'O prazo definido no edital/contrato e no regulamento local', 'Lei 14.133/2021, art. 92, V'],
      ] },
      { type: 'p', text: 'E o pagamento não é por ordem de simpatia: o art. 141 da Lei 14.133/2021 determina que "no dever de pagamento pela Administração, será observada a ordem cronológica para cada fonte diferenciada de recursos", subdividida em quatro categorias — fornecimento de bens, locações, prestação de serviços e realização de obras. Quem liquidou primeiro, recebe primeiro, dentro da sua categoria e fonte de recursos. Furar essa fila só nas exceções do § 1º do mesmo artigo, com justificativa formal da autoridade — e a preterição indevida pode responsabilizar o agente público.' },
      { type: 'h2', text: 'Por que demora mesmo quando tudo dá certo', id: 'por-que-o-pagamento-demora' },
      { type: 'p', text: 'Mesmo sem nenhum problema, o dinheiro público percorre um circuito de três estágios criado pela Lei 4.320/1964: o empenho reserva o valor, a liquidação confere a entrega e só então o setor financeiro emite a ordem bancária. Cada estágio envolve pessoas e conferências diferentes — fiscal do contrato, ordenador de despesa, tesouraria — e, entre a liquidação e a ordem bancária, seu crédito ainda espera a vez na fila cronológica do art. 141 da Lei 14.133/2021, que depende do caixa da fonte de recursos do seu contrato. Resultado: até no cenário perfeito federal são até 20 dias úteis (cerca de um mês corrido) financiados por você. Esse capital de giro parado tem custo — e ele precisa estar embutido no seu preço desde a proposta.' },
      { type: 'callout', title: 'Quanto custa esperar o governo pagar?', text: 'Um pagamento que leva 30, 60 ou 90 dias corrói sua margem pelo custo do dinheiro parado. A calculadora de custo financeiro do Editus, em /calculadora-custo-financeiro, usa a taxa Selic para mostrar quanto o prazo de recebimento come do seu lucro — e quanto você deveria embutir no preço da próxima proposta.' },
      { type: 'h2', text: 'E se o pagamento atrasar?', id: 'e-se-o-pagamento-atrasar' },
      { type: 'p', text: 'Você tem armas. Primeiro, o contrato deve prever, por força do art. 92, inciso V, da Lei 14.133/2021, os "critérios de atualização monetária entre a data do adimplemento das obrigações e a do efetivo pagamento" — ou seja, atraso gera correção, não favor. Segundo, se o calote passar do limite, o art. 137, § 2º, inciso IV, da Lei 14.133/2021 garante ao contratado o direito à extinção do contrato em caso de "atraso superior a 2 (dois) meses, contado da emissão da nota fiscal, dos pagamentos ou de parcelas de pagamentos devidos pela Administração". O passo a passo completo — cobrança formal, correção, extinção e quando acionar a Justiça — está no nosso guia dedicado: "Governo atrasou o pagamento, o que fazer?".' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus está em acesso antecipado e está sendo construído para acompanhar exatamente essa jornada: ler o edital e o contrato com IA, montar o checklist do pós-vitória (prazo de assinatura, empenho, entrega, documentação de cobrança) e avisar antes de cada prazo estourar — inclusive o vencimento das certidões que travam sua liquidação. Entre na lista de espera e receba as novidades em primeira mão.' },
    ],
    faqs: [
      { q: 'O que é nota de empenho?', a: 'É o documento que reserva, no orçamento do órgão público, o valor destinado ao seu contrato, indicando credor, especificação e importância da despesa (art. 61 da Lei 4.320/1964). Sem ele a despesa é proibida: o art. 60 da mesma lei veda "a realização de despesa sem prévio empenho". Na prática, é a garantia de que existe dinheiro separado para pagar sua empresa.' },
      { q: 'Quando recebo o pagamento depois de vencer uma licitação?', a: 'O prazo federal máximo é de 20 dias úteis após a entrega da nota fiscal: até 10 dias úteis para a liquidação e mais 10 para o pagamento, conforme o art. 7º da IN SEGES/ME nº 77/2022. Em contratações de pequeno valor, cai para metade. Em estados e municípios, vale o prazo do edital e do regulamento local.' },
      { q: 'Posso entregar antes de receber a nota de empenho?', a: 'Não. O art. 60 da Lei 4.320/1964 proíbe despesa sem prévio empenho, então quem entrega antes fica sem respaldo orçamentário e corre o risco de só receber por um lento processo de reconhecimento de dívida, fora da fila normal de pagamentos. Exija a nota de empenho antes de qualquer entrega ou início de serviço.' },
    ],
    related: ['governo-atrasou-pagamento', 'certidao-vencida-licitacao', 'como-calcular-bdi'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'governo-atrasou-pagamento',
    title: 'Governo atrasou o pagamento da licitação? Seus direitos | Editus',
    h1: 'Governo atrasou o pagamento da licitação: seus direitos e o que fazer',
    description:
      'Governo atrasou o pagamento da licitação? Saiba o que fazer: correção monetária, suspensão da execução após 2 meses e cobrança formal pela Lei 14.133/2021.',
    kicker: 'Guia da cobrança',
    keyword: 'governo atrasou pagamento licitacao o que fazer',
    updated: '2026-08-27',
    readingTime: '9 min',
    blocks: [
      { type: 'p', text: 'Se o governo atrasou o pagamento da sua licitação, a Lei 14.133/2021 garante três direitos ao fornecedor: correção monetária pelo índice previsto no contrato (cláusula obrigatória do art. 92, V), a opção de suspender a execução quando o atraso passar de 2 meses contados da emissão da nota fiscal (art. 137, § 2º, IV, e § 3º, II) e o direito de pedir a extinção do contrato com ressarcimento dos prejuízos comprovados (art. 138, § 2º). O caminho prático é: confirmar a liquidação da nota, protocolar ofício de cobrança ao gestor do contrato, escalar para ouvidoria e controle interno e, em última instância, cobrar na Justiça — onde o débito da Fazenda Pública é atualizado pela Selic (EC 113/2021, art. 3º). O que você não pode fazer é parar de executar antes do prazo legal: isso é inexecução sua, punível com multa e impedimento de licitar.' },
      { type: 'h2', text: 'Qual é o prazo legal para o governo pagar?', id: 'prazo-legal-de-pagamento' },
      { type: 'p', text: 'A Lei 14.133/2021 não fixa um prazo único nacional de pagamento. O que ela faz é obrigar que todo contrato tenha cláusula com "o prazo para liquidação e para pagamento" (art. 92, VI) e impor uma fila obrigatória: "No dever de pagamento pela Administração, será observada a ordem cronológica para cada fonte diferenciada de recursos", subdividida por categoria de contrato — fornecimento de bens, locações, prestação de serviços e realização de obras (art. 141, caput). Ou seja: o prazo concreto está no seu edital e no seu contrato; a lei garante que, vencido o crédito, ninguém passe na sua frente sem justificativa formal.' },
      { type: 'p', text: 'Na Administração federal, a régua é objetiva: a Instrução Normativa SEGES/ME nº 77/2022 (art. 7º) dá ao órgão até 10 dias úteis para liquidar a despesa, contados do recebimento da nota fiscal, e mais até 10 dias úteis para pagar, contados da liquidação — no pior cenário regular, cerca de 20 dias úteis entre a entrega da nota e o dinheiro na conta. Para contratações de pequeno valor (até o limite da dispensa por valor do art. 75, II, da Lei 14.133), esses prazos caem pela metade (IN 77/2022, art. 7º, § 2º). Estados e municípios seguem o prazo do próprio edital e contrato e seus regulamentos locais.' },
      { type: 'table', headers: ['Situação', 'Prazo de pagamento', 'Fonte'], rows: [
        ['Órgãos federais (regra geral)', 'Até 10 dias úteis para liquidar a nota fiscal + até 10 dias úteis para pagar após a liquidação', 'IN SEGES/ME nº 77/2022, art. 7º'],
        ['Compras federais de pequeno valor (até o limite do art. 75, II, da Lei 14.133)', 'Prazos reduzidos pela metade: 5 + 5 dias úteis', 'IN SEGES/ME nº 77/2022, art. 7º, § 2º'],
        ['Estados e municípios', 'O prazo definido no edital e no contrato (cláusula obrigatória) e em regulamento local', 'Lei 14.133/2021, art. 92, VI'],
      ] },
      { type: 'callout', title: 'A fila de pagamento é fiscalizável — e você pode usar isso', text: 'O art. 141, § 3º, da Lei 14.133/2021 obriga o órgão a publicar mensalmente, no próprio site, "a ordem cronológica de seus pagamentos, bem como as justificativas que fundamentarem a eventual alteração dessa ordem". E o § 2º é direto: a inobservância imotivada da ordem "ensejará a apuração de responsabilidade do agente responsável". Bônus para PMEs: o § 1º autoriza o órgão a antecipar, com justificativa, o pagamento de ME, EPP e MEI quando houver risco de descontinuidade do contrato — peça isso expressamente no seu ofício de cobrança.' },
      { type: 'h2', text: 'Direito 1: correção monetária e juros pelo atraso', id: 'correcao-monetaria-e-juros' },
      { type: 'p', text: 'A Lei 14.133 não escolhe o índice de correção — ela obriga o seu contrato a escolher. O art. 92, V, exige cláusula com "os critérios de atualização monetária entre a data do adimplemento das obrigações e a do efetivo pagamento". Na prática, as minutas federais e a maioria dos editais preveem atualização pelo IPCA acrescida de juros de mora, segundo a fórmula de encargos moratórios descrita no próprio edital; alguns entes adotam a Selic, que já embute correção e juros e, por isso, não pode ser cumulada com outro índice. Antes de cobrar, localize essa cláusula no seu contrato: é ela que define quanto o atraso vale.' },
      { type: 'p', text: 'Se a cobrança virar ação judicial, a regra muda: pela Emenda Constitucional 113/2021 (art. 3º), nas discussões e condenações que envolvam a Fazenda Pública incide, "uma única vez, até o efetivo pagamento", a taxa Selic acumulada mensalmente — cobrindo correção e juros de uma só vez. Atenção: a EC 136/2025 alterou esse regime para os precatórios federais (IPCA mais juros simples de 2% ao ano, limitado à Selic do período); se o seu caso chegar a precatório, confirme o índice aplicável com seu advogado.' },
      { type: 'h2', text: 'Direito 2: suspender a execução após 2 meses de atraso', id: 'suspender-a-execucao' },
      { type: 'p', text: 'Este é o direito mais poderoso — e o mais perigoso de usar errado. O art. 137, § 2º, IV, da Lei 14.133/2021 garante ao contratado o direito à extinção do contrato em caso de "atraso superior a 2 (dois) meses, contado da emissão da nota fiscal, dos pagamentos ou de parcelas de pagamentos devidos pela Administração por despesas de obras, serviços ou fornecimentos". E o § 3º, II, oferece a alternativa intermediária: nessas hipóteses, fica assegurado "ao contratado o direito de optar pela suspensão do cumprimento das obrigações assumidas até a normalização da situação". É a versão legal da exceção de contrato não cumprido: você não é obrigado a seguir financiando um cliente que não paga.' },
      { type: 'ul', items: [
        'O gatilho é atraso superior a 2 meses contado da emissão da nota fiscal (art. 137, § 2º, IV) — registre essa data e guarde o comprovante de entrega da NF ao órgão.',
        'Notifique formalmente antes de suspender: ofício protocolado informando que, com base no art. 137, § 2º, IV, e § 3º, II, a empresa optará pela suspensão a partir de data certa se o pagamento não for regularizado.',
        'A suspensão vale "até a normalização da situação": pago o atraso, você deve retomar a execução — com direito ao restabelecimento do equilíbrio econômico-financeiro, admitido pelo mesmo dispositivo.',
        'Exceção: o direito não vale em caso de calamidade pública, grave perturbação da ordem interna ou guerra, nem quando o próprio contratado deu causa ao problema (art. 137, § 3º, I).',
      ] },
      { type: 'h2', text: 'Direito 3: extinção do contrato por culpa da Administração', id: 'extincao-por-culpa-da-administracao' },
      { type: 'p', text: 'Se o atraso passar de 2 meses e você concluir que não vale a pena continuar, o mesmo art. 137, § 2º, IV, garante o direito à extinção do contrato. Mas atenção a um detalhe que muita empresa erra: a Lei 14.133 não prevê rescisão unilateral pelo contratado. Pelo art. 138, a extinção se dá por ato unilateral da Administração, por acordo entre as partes (consensual) ou por decisão arbitral ou judicial — orientação reforçada pelo portal Licitações e Contratos do TCU. Na prática: você requer a extinção formalmente ao órgão; se ele recusar ou silenciar, o caminho é a via judicial (ou a arbitragem, se prevista no contrato). Nunca simplesmente abandone a execução.' },
      { type: 'p', text: 'Extinto o contrato por culpa exclusiva da Administração, o art. 138, § 2º, determina que o contratado "será ressarcido pelos prejuízos regularmente comprovados" e terá direito à devolução da garantia contratual, aos pagamentos devidos pela execução até a data da extinção e ao pagamento do custo da desmobilização (retirada de equipe, equipamentos e instalações). A palavra-chave é "comprovados": guarde notas, medições, folha de pagamento e contratos com fornecedores — sem prova documental, o ressarcimento encolhe.' },
      { type: 'table', headers: ['Situação do atraso', 'Seu direito', 'Base legal (Lei 14.133/2021)'], rows: [
        ['Qualquer atraso além do prazo do contrato', 'Correção monetária (e juros, se previstos) entre o vencimento e o pagamento efetivo', 'Art. 92, V'],
        ['Atraso superior a 2 meses, contado da emissão da nota fiscal', 'Optar por suspender a execução até a normalização, mediante notificação formal', 'Art. 137, § 2º, IV, e § 3º, II'],
        ['Atraso superior a 2 meses (alternativa à suspensão)', 'Requerer a extinção do contrato, com ressarcimento, devolução da garantia e custo de desmobilização', 'Art. 137, § 2º, IV, e art. 138, § 2º'],
      ] },
      { type: 'h2', text: 'Passo a passo: como cobrar sem quebrar o contrato', id: 'passo-a-passo-de-cobranca' },
      { type: 'ol', items: [
        'Confirme a liquidação da nota. O prazo de pagamento só corre depois que o órgão atesta e liquida a despesa (na esfera federal, até 10 dias úteis do recebimento da NF — IN SEGES/ME nº 77/2022, art. 7º). Pergunte por escrito ao fiscal do contrato se a nota foi liquidada e, se não foi, qual é a pendência.',
        'Protocole ofício de cobrança ao gestor do contrato. Identifique contrato, empenho, nota fiscal, valor e data de vencimento; invoque a cláusula de atualização monetária (art. 92, V) e peça a posição do seu crédito na ordem cronológica de pagamentos (art. 141). Se for ME ou EPP e o atraso ameaçar a continuidade do contrato, peça a antecipação autorizada pelo art. 141, § 1º. Sempre com protocolo.',
        'Escale para a ouvidoria e o controle interno do órgão — e, se necessário, represente ao tribunal de contas competente. Cite no texto que a inobservância imotivada da ordem cronológica "ensejará a apuração de responsabilidade do agente responsável" (art. 141, § 2º): a perspectiva de responsabilização pessoal do gestor costuma destravar o pagamento.',
        'Passou de 2 meses da emissão da NF? Notifique formalmente que a empresa vai exercer a opção de suspender a execução (art. 137, § 3º, II) e/ou requerer a extinção do contrato (art. 137, § 2º, IV), concedendo prazo final para regularização.',
        'Última instância: ação judicial de cobrança (com atualização pela Selic — EC 113/2021, art. 3º) ou arbitragem, se o contrato previr. Leve todo o rastro documental dos passos anteriores: é ele que comprova a mora da Administração e a sua boa-fé.',
      ] },
      { type: 'h2', text: 'O que NÃO fazer (isso vira sanção contra você)', id: 'o-que-nao-fazer' },
      { type: 'ul', items: [
        'Não pare de executar antes de completados os 2 meses de atraso do art. 137, § 2º, IV: antes disso, a paralisação é inexecução contratual sua, punível com multa, impedimento de licitar e contratar por até 3 anos (art. 156, § 4º) e, em casos graves, declaração de inidoneidade de 3 a 6 anos (art. 156, § 5º).',
        'Não suspenda sem notificação formal prévia: sem ofício protocolado exercendo a opção do art. 137, § 3º, II, a suspensão pode ser tratada como abandono do contrato.',
        'Não segure a emissão da nota fiscal "para evitar atrito": sem NF não há liquidação, e o prazo de 2 meses do art. 137 conta justamente da emissão da nota.',
        'Não aceite proposta informal de "furar a fila" em troca de desconto: pagamento fora da ordem cronológica sem justificativa formal é irregularidade do gestor (art. 141, § 2º) — e você pode ser arrastado junto na apuração.',
        'Não cobre apenas por telefone ou WhatsApp: sem protocolo não existe prova de mora para sustentar suspensão, extinção ou ação judicial depois.',
      ] },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O melhor momento de lidar com atraso de pagamento é antes de dar o lance. O Editus, em acesso antecipado, analisa o edital e a minuta do contrato e destaca as condições de pagamento — prazo de liquidação e pagamento (art. 92, VI), índice de correção monetária (art. 92, V) e exigência de garantia — para você precificar o custo financeiro do atraso na proposta, em vez de descobri-lo depois de faturar. Entre na lista de espera para testar.' },
    ],
    faqs: [
      { q: 'Qual é o prazo que o governo tem para pagar depois da entrega?', a: 'Depende do contrato. A Lei 14.133/2021 não fixa prazo único: ela exige que o contrato preveja o prazo de liquidação e de pagamento (art. 92, VI). Na esfera federal, a IN SEGES/ME nº 77/2022 fixa até 10 dias úteis para liquidar a nota fiscal e mais até 10 dias úteis para pagar.' },
      { q: 'Posso parar de executar o contrato se o governo não pagar?', a: 'Sim, mas só após atraso superior a 2 meses contado da emissão da nota fiscal (art. 137, § 2º, IV, e § 3º, II, da Lei 14.133/2021), com notificação formal prévia. Parar antes disso é inexecução sua, punível com multa e impedimento de licitar e contratar por até 3 anos (art. 156).' },
      { q: 'Tenho direito a juros e correção monetária pelo atraso do governo?', a: 'Sim. O contrato deve prever o índice de atualização monetária entre o adimplemento e o efetivo pagamento (art. 92, V, da Lei 14.133/2021) — na prática, geralmente IPCA mais juros de mora. Na cobrança judicial, o débito da Fazenda Pública é atualizado pela Selic (EC 113/2021, art. 3º).' },
    ],
    related: ['venci-a-licitacao-e-agora', 'margem-em-licitacao', 'lei-14133-resumo'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'empate-ficto-me-epp',
    title: 'Empate ficto ME/EPP: como funciona e como vencer o pregão',
    h1: 'Empate ficto ME/EPP: como vencer o pregão mesmo sem dar o menor lance',
    description:
      'Como funciona o empate ficto de ME/EPP na LC 123/2006: percentuais exatos de 5% e 10%, prazo de 5 minutos no pregão eletrônico e um exemplo numérico completo.',
    kicker: 'Guia do empate ficto',
    keyword: 'empate ficto me epp como funciona',
    updated: '2026-08-27',
    readingTime: '8 min',
    blocks: [
      { type: 'p', text: 'O empate ficto é o direito de preferência criado pelos arts. 44 e 45 da Lei Complementar 123/2006: quando a proposta de uma microempresa (ME) ou empresa de pequeno porte (EPP) fica até 5% acima do melhor lance no pregão — ou até 10% nas demais modalidades — e esse melhor lance não é de outra ME/EPP, a lei considera as propostas empatadas. A ME/EPP é então convocada para dar um lance abaixo do primeiro colocado e, se cobrir o valor, leva o contrato mesmo sem ter dado o menor lance da disputa. No pregão, o prazo para exercer o direito é de 5 minutos após o encerramento dos lances (art. 45, § 3º, da LC 123/2006).' },
      { type: 'p', text: 'Na prática, isso significa que sua ME não precisa vencer a guerra de lances para vencer a licitação: precisa terminar a disputa dentro da faixa de empate. É um dos benefícios mais valiosos — e mais mal aproveitados — que uma PME tem em licitação, porque a decisão de cobrir ou não o lance precisa ser tomada em minutos, e a maioria das empresas chega à sessão sem saber até onde pode ir.' },
      { type: 'h2', text: 'O que diz a LC 123/2006 (arts. 44 e 45)', id: 'o-que-diz-a-lei' },
      { type: 'p', text: 'O art. 44 da LC 123/2006 garante que "nas licitações será assegurada, como critério de desempate, preferência de contratação para as microempresas e empresas de pequeno porte". O detalhe está nos parágrafos: o § 1º define que "entende-se por empate aquelas situações em que as propostas apresentadas pelas microempresas e empresas de pequeno porte sejam iguais ou até 10% (dez por cento) superiores à proposta mais bem classificada"; e o § 2º reduz essa faixa no pregão — "na modalidade de pregão, o intervalo percentual estabelecido no § 1º deste artigo será de até 5% (cinco por cento) superior ao melhor preço".' },
      { type: 'p', text: 'O art. 45 diz o que acontece quando o empate ficto ocorre: pelo inciso I, "a microempresa ou empresa de pequeno porte mais bem classificada poderá apresentar proposta de preço inferior àquela considerada vencedora do certame, situação em que será adjudicado em seu favor o objeto licitado". Duas condições importantes: o benefício "somente se aplicará quando a melhor oferta inicial não tiver sido apresentada por microempresa ou empresa de pequeno porte" (art. 45, § 2º) — ou seja, se o líder já é ME/EPP, não há convocação — e, se a primeira ME/EPP não cobrir, as demais dentro da faixa são convocadas na ordem de classificação (art. 45, II).' },
      { type: 'p', text: 'O benefício continua plenamente válido na Nova Lei de Licitações: o art. 4º da Lei 14.133/2021 determina que "aplicam-se às licitações e contratos disciplinados por esta Lei as disposições constantes dos arts. 42 a 49 da Lei Complementar nº 123, de 14 de dezembro de 2006".' },
      { type: 'table', headers: ['Modalidade', 'Faixa do empate ficto', 'Se o melhor lance for R$ 100.000, empata até', 'Base legal'], rows: [
        ['Pregão (eletrônico ou presencial)', 'Proposta igual ou até 5% superior ao melhor preço', 'R$ 105.000,00', 'Art. 44, § 2º, LC 123/2006'],
        ['Demais modalidades (concorrência etc.)', 'Proposta igual ou até 10% superior à melhor classificada', 'R$ 110.000,00', 'Art. 44, § 1º, LC 123/2006'],
      ] },
      { type: 'h2', text: 'Como funciona na prática do pregão eletrônico', id: 'como-funciona-no-pregao-eletronico' },
      { type: 'p', text: 'No pregão eletrônico, você não precisa pedir o benefício: os sistemas (Compras.gov.br e portais congêneres) identificam o empate ficto e convocam a ME/EPP automaticamente, com base no porte declarado no cadastro. O fluxo é este:' },
      { type: 'ol', items: [
        'A fase de lances se encerra e o sistema verifica se há ME/EPP com lance igual ou até 5% acima do melhor lance de uma empresa que não seja ME/EPP.',
        'Havendo, o sistema convoca automaticamente a ME/EPP mais bem classificada dentro da faixa — um aviso aparece na tela da sessão pública.',
        'Abre-se o prazo do art. 45, § 3º, da LC 123/2006: "no caso de pregão, a microempresa ou empresa de pequeno porte mais bem classificada será convocada para apresentar nova proposta no prazo máximo de 5 (cinco) minutos após o encerramento dos lances, sob pena de preclusão".',
        'Se você enviar um lance inferior ao do primeiro colocado dentro dos 5 minutos, assume a primeira posição e o objeto tende a ser adjudicado à sua empresa (art. 45, I), após a análise da proposta e da habilitação.',
        'Se você deixar o prazo passar ou declinar, o sistema convoca a próxima ME/EPP dentro da faixa, na ordem de classificação (art. 45, II). Se nenhuma cobrir, vale a proposta originalmente vencedora (art. 45, § 1º).',
      ] },
      { type: 'callout', title: 'Atenção: o prazo preclui', text: 'Os 5 minutos do art. 45, § 3º, correm "sob pena de preclusão": se você não responder a tempo, perde o direito naquela disputa — não há segunda chamada para a mesma empresa. Fique logado na sessão até o fim da fase de lances e já tenha decidido, antes, qual é o menor valor que aceita ofertar.' },
      { type: 'h2', text: 'Exemplo numérico: vencendo com o segundo melhor lance', id: 'exemplo-numerico' },
      { type: 'p', text: 'Suponha um pregão eletrônico de fornecimento em que sua ME disputou com uma empresa de grande porte. Veja como o empate ficto muda o resultado:' },
      { type: 'table', headers: ['Etapa', 'Empresa', 'Valor', 'O que acontece'], rows: [
        ['Fim dos lances — 1º lugar', 'Concorrente de grande porte', 'R$ 100.000,00', 'Melhor lance da sessão, mas a empresa não é ME/EPP'],
        ['Fim dos lances — 2º lugar', 'Sua ME', 'R$ 104.500,00', '4,5% acima do líder — dentro da faixa de 5% do art. 44, § 2º, da LC 123/2006'],
        ['Convocação automática', 'Sistema do pregão', '—', 'Empate ficto configurado: sua ME é convocada e tem 5 minutos para responder (art. 45, § 3º)'],
        ['Novo lance', 'Sua ME', 'R$ 99.999,00', 'Qualquer valor abaixo de R$ 100.000,00 basta — não precisa ser um centavo a menos, mas pode'],
        ['Resultado', 'Sua ME', 'R$ 99.999,00', 'Sua ME assume o 1º lugar e o objeto é adjudicado em seu favor (art. 45, I)'],
      ] },
      { type: 'p', text: 'Repare no limite: se sua ME tivesse parado em R$ 105.100,00 (5,1% acima), não haveria empate ficto e o concorrente venceria direto. Por isso a fase de lances tem um segundo objetivo além de liderar: terminar a, no máximo, 5% do melhor lance de quem não é ME/EPP. No exemplo, a diferença entre ficar em R$ 104.500 e R$ 105.100 é a diferença entre ter ou não o direito de vencer por R$ 99.999.' },
      { type: 'h2', text: 'Quem tem direito ao empate ficto', id: 'quem-tem-direito' },
      { type: 'p', text: 'O benefício alcança as empresas enquadradas no art. 3º da LC 123/2006, com os tetos de receita bruta anual dados pela LC 155/2016 (vigentes desde 2018):' },
      { type: 'ul', items: [
        'Microempresa (ME): receita bruta anual igual ou inferior a R$ 360.000,00 (art. 3º, I, da LC 123/2006).',
        'Empresa de pequeno porte (EPP): receita bruta anual superior a R$ 360.000,00 e igual ou inferior a R$ 4.800.000,00 (art. 3º, II).',
        'MEI: receita bruta anual de até R$ 81.000,00 (art. 18-A, § 1º). O MEI "é modalidade de microempresa" (art. 18-E, § 3º) e todo benefício aplicável à ME se estende a ele (art. 18-E, § 2º) — incluindo o empate ficto.',
      ] },
      { type: 'p', text: 'O que descaracteriza o enquadramento — e derruba o direito ao benefício (art. 3º, § 4º, da LC 123/2006), entre outras hipóteses:' },
      { type: 'ul', items: [
        'Faturar acima do teto: ultrapassado o limite de R$ 4,8 milhões, a empresa sai do regime e declara porte indevidamente por sua conta e risco — declaração falsa de enquadramento em licitação pode levar a sanções.',
        'Ter outra pessoa jurídica no capital social — inclusive uma grande empresa como sócia (art. 3º, § 4º, I) — ou participar do capital de outra pessoa jurídica (inciso VII).',
        'Ser filial ou representação de empresa com sede no exterior (inciso II).',
        'Ter sócio que participe de outras empresas beneficiadas pela LC 123 quando a receita bruta global ultrapassa o teto (inciso III), ou titular/sócio com mais de 10% de empresa não beneficiada, no mesmo caso (inciso IV).',
        'Ser constituída como sociedade por ações (S.A.) ou resultar de cisão ocorrida nos 5 anos anteriores (incisos X e IX).',
      ] },
      { type: 'p', text: 'A Lei 14.133/2021 acrescenta dois limites próprios: o benefício não se aplica ao item cujo valor estimado supere a receita bruta máxima de EPP — R$ 4,8 milhões — nas compras de bens e serviços em geral (art. 4º, § 1º, I), e a ME/EPP só mantém o tratamento favorecido se a soma dos contratos que já celebrou com a Administração no ano-calendário não extrapolar esse mesmo teto, o que é objeto de declaração exigida pelo órgão (art. 4º, § 2º).' },
      { type: 'h2', text: 'Estratégia: calcule o lance mínimo viável antes da sessão', id: 'estrategia-lance-minimo' },
      { type: 'p', text: 'Cinco minutos não dão para abrir planilha, recalcular custo e decidir com calma. Quem decide o empate ficto na hora costuma errar para os dois lados: deixa passar contrato viável por medo, ou cobre o lance e assina um contrato deficitário por impulso. A decisão precisa estar tomada antes de a sessão começar.' },
      { type: 'ol', items: [
        'Calcule seu preço mínimo viável antes da sessão: custo direto do objeto + despesas indiretas, tributos e margem (o cálculo estruturado disso é o BDI — veja nossos guias de margem em licitação e de como calcular o BDI).',
        'Inclua o custo financeiro no piso: em contrato público você executa primeiro e recebe depois, e eventual atraso de pagamento corrói margem apertada — nosso guia sobre atraso de pagamento do governo tem uma calculadora de correção pela Selic para dimensionar esse risco.',
        'Defina duas metas para a fase de lances: vencer, se o preço permitir; ou, no mínimo, terminar até 5% acima do provável líder, para garantir a convocação do empate ficto sem queimar margem cedo demais.',
        'Escreva o número antes de entrar na sessão: "cubro qualquer lance até R$ X; abaixo disso, declino". Quando a convocação aparecer, a resposta já existe — os 5 minutos viram execução, não decisão.',
        'Se o lance do líder ficar abaixo do seu piso, declinar é a jogada certa: vencer licitação com prejuízo é pior do que perder.',
      ] },
      { type: 'p', text: 'Esse preparo vale dobrado porque o empate ficto é reavaliado quando o cenário muda: se o primeiro colocado for desclassificado ou inabilitado, a faixa de 5% passa a ser contada sobre a nova melhor proposta — e sua ME pode ser convocada num momento em que nem esperava. Quem conhece seu preço mínimo aproveita essas janelas; quem não conhece, improvisa.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus está em acesso antecipado. Na análise de cada edital, a plataforma foi desenhada para estimar o preço mínimo viável do item a partir dos seus custos e BDI antes da sessão de lances — para que, se o empate ficto aparecer, você saiba em segundos se vale cobrir o lance. Entre na lista de espera para testar primeiro.' },
    ],
    faqs: [
      { q: 'Qual é o prazo para cobrir o lance no empate ficto do pregão?', a: 'O prazo é de 5 minutos após o encerramento dos lances, sob pena de preclusão, conforme o art. 45, § 3º, da LC 123/2006. O sistema do pregão eletrônico convoca a ME/EPP automaticamente; se ela não responder dentro do prazo, perde o direito e a próxima ME/EPP da faixa é chamada.' },
      { q: 'O empate ficto vale se a melhor proposta também for de ME/EPP?', a: 'Não. O art. 45, § 2º, da LC 123/2006 determina que o benefício "somente se aplicará quando a melhor oferta inicial não tiver sido apresentada por microempresa ou empresa de pequeno porte". Se o primeiro colocado já é ME/EPP, não há convocação — o resultado da fase de lances prevalece.' },
      { q: 'MEI tem direito ao empate ficto?', a: 'Sim. O MEI é modalidade de microempresa (art. 18-E, § 3º, da LC 123/2006) e todo benefício aplicável à ME se estende a ele (art. 18-E, § 2º). Basta declarar o enquadramento no cadastro do portal de compras e manter a receita anual dentro do teto de R$ 81.000 (art. 18-A, § 1º).' },
    ],
    related: ['pregao-eletronico-como-funciona', 'margem-em-licitacao', 'como-calcular-bdi'],
  },
  // ---------------------------------------------------------------------------
  {
    slug: 'licitacao-de-alimentos',
    title: 'Como vender alimentos para o governo: guia de licitação',
    h1: 'Como vender alimentos para o governo (licitação de alimentos)',
    description:
      'Como vender alimentos para o governo: canais (pregão, dispensa, chamada pública do PNAE), alvará sanitário, SIF/SIE/SIM e exigências típicas de edital.',
    kicker: 'Guia do setor alimentício',
    keyword: 'como vender alimentos para o governo',
    updated: '2026-08-27',
    readingTime: '9 min',
    blocks: [
      { type: 'p', text: 'Para vender alimentos para o governo, existem três portas de entrada: o pregão eletrônico (a regra geral para compras maiores), a dispensa eletrônica (contratações de até R$ 65.492,11 em 2026, conforme o Decreto 12.807/2025) e a chamada pública do PNAE, exclusiva da agricultura familiar. Além da habilitação comum a qualquer licitação, o setor exige documentos sanitários próprios: licença da vigilância sanitária, registro no MAPA para alguns produtos e selo de inspeção (SIF, SIE ou SIM) para produtos de origem animal. Escolas, hospitais, presídios, quartéis e restaurantes universitários compram alimentos o ano inteiro, quase sempre com entregas parceladas.' },
      { type: 'p', text: 'Este guia mostra quem compra, por qual canal, quais documentos extras o segmento exige e os erros que mais eliminam fornecedores de alimentos — inclusive os que só aparecem depois de vencer, na hora de entregar.' },
      { type: 'h2', text: 'Quem compra alimentos no setor público', id: 'quem-compra' },
      { type: 'p', text: 'Alimentação é uma das despesas mais recorrentes da administração pública. Os principais compradores:' },
      { type: 'ul', items: [
        'Escolas públicas (merenda): o PNAE, coordenado pelo FNDE, atende cerca de 40 milhões de estudantes com orçamento anual de R$ 5,5 bilhões, segundo dados do próprio FNDE. Quem compra são prefeituras, secretarias estaduais de educação e escolas federais.',
        'Hospitais e unidades de saúde: gêneros perecíveis e não perecíveis, dietas especiais e fórmulas nutricionais, geralmente com entregas semanais.',
        'Presídios e unidades socioeducativas: grandes volumes contínuos, contratados como gêneros alimentícios ou como fornecimento de refeições prontas.',
        'Forças Armadas: batalhões, bases e organizações militares compram pelo Compras.gov.br para abastecer ranchos e refeitórios.',
        'Restaurantes universitários: universidades e institutos federais licitam gêneros e insumos para os RUs, com cardápios e cronogramas definidos.',
      ] },
      { type: 'p', text: 'Boa parte desses contratos usa ata de registro de preços: o órgão registra o fornecedor vencedor e vai pedindo os produtos ao longo de até um ano, conforme a demanda.' },
      { type: 'h2', text: 'Os 3 canais para vender alimentos ao governo', id: 'canais-de-venda' },
      { type: 'table', headers: ['Canal', 'Quando se aplica', 'Quem pode participar'], rows: [
        ['Pregão eletrônico', 'Regra geral para compras acima do limite de dispensa; disputa por lances', 'Qualquer empresa do ramo (inclusive MEI e ME/EPP) que atenda ao edital'],
        ['Dispensa eletrônica', 'Contratações de até R$ 65.492,11 em 2026 (art. 75, II, da Lei 14.133/2021, valor atualizado pelo Decreto 12.807/2025)', 'Qualquer empresa cadastrada na plataforma da disputa (ex.: Compras.gov.br)'],
        ['Chamada pública (PNAE)', 'Compra de gêneros da agricultura familiar para a alimentação escolar, sem licitação', 'Agricultores familiares e suas cooperativas ou associações com CAF'],
      ] },
      { type: 'p', text: 'A base legal da dispensa por valor é o art. 75, inciso II, da Lei 14.133/2021: é dispensável a licitação "para contratação que envolva valores inferiores a R$ 50.000,00 (cinquenta mil reais), no caso de outros serviços e compras". Esse valor é corrigido anualmente por decreto — para 2026, o teto vigente é de R$ 65.492,11, fixado pelo Decreto 12.807/2025. Para uma PME de alimentos, a dispensa eletrônica costuma ser a porta de entrada mais rápida: disputas menores, menos concorrentes e ciclo de decisão curto.' },
      { type: 'h2', text: 'PNAE: 45% da merenda vem da agricultura familiar', id: 'pnae-agricultura-familiar' },
      { type: 'p', text: 'O art. 14 da Lei 11.947/2009 obrigava estados e municípios a usar no mínimo 30% do dinheiro repassado pelo FNDE para o PNAE na compra direta da agricultura familiar. A Lei 15.226/2025 elevou esse mínimo para 45% a partir de 1º de janeiro de 2026, conforme noticiado pelo FNDE e pelo Senado Federal na sanção da norma.' },
      { type: 'p', text: 'Essa compra é feita por chamada pública, dispensando o procedimento licitatório (art. 14, § 1º, da Lei 11.947/2009), desde que os preços sejam compatíveis com o mercado local. Podem vender por esse canal agricultores familiares e suas cooperativas ou associações com inscrição ativa no CAF — o Cadastro Nacional da Agricultura Familiar, que substituiu a antiga DAP, conforme o Decreto 9.064/2017.' },
      { type: 'callout', title: 'Sua empresa não é da agricultura familiar?', text: 'Os 45% do PNAE não são o seu mercado — mas os 55% restantes continuam sendo comprados por licitação comum (pregão e dispensa), aberta a empresas de qualquer porte. Atenção: muitos sites ainda citam o percentual antigo de 30%, que deixou de valer em 1º de janeiro de 2026 com a Lei 15.226/2025.' },
      { type: 'h2', text: 'Documentos extras do setor alimentício', id: 'documentos-extras' },
      { type: 'p', text: 'Além do checklist comum de habilitação (jurídica, fiscal, técnica e econômico-financeira), editais de alimentos exigem documentação sanitária. Os principais documentos do segmento:' },
      { type: 'table', headers: ['Documento', 'Quem emite', 'Quando é exigido'], rows: [
        ['Alvará ou licença sanitária', 'Vigilância sanitária municipal ou estadual', 'Sempre: o Decreto-Lei 986/1969 obriga o licenciamento prévio de qualquer estabelecimento que fabrique, manipule, armazene, transporte ou venda alimentos'],
        ['Selo de inspeção (SIF, SIE ou SIM)', 'MAPA, órgão estadual de agricultura ou prefeitura', 'Produtos de origem animal: carnes, pescado, leite e derivados, ovos e mel (obrigação da Lei 1.283/1950)'],
        ['Registro no MAPA (via SIPEAGRO)', 'Ministério da Agricultura e Pecuária', 'Bebidas, sucos e polpas de fruta (Decreto 12.709/2025, que revogou o antigo Decreto 6.871/2009) e alguns produtos de origem vegetal processados'],
        ['Licença sanitária do veículo de transporte', 'Vigilância sanitária local', 'Transporte de alimentos, em especial perecíveis e refrigerados'],
      ] },
      { type: 'p', text: 'A maior parte dos alimentos industrializados é dispensada de registro individual na ANVISA, mas o estabelecimento precisa estar licenciado e o rótulo precisa seguir as normas da agência (detalhadas mais abaixo). Confira sempre no edital quais documentos sanitários o órgão listou — eles variam conforme o produto.' },
      { type: 'h2', text: 'SIF, SIE ou SIM: qual selo você precisa', id: 'sif-sie-sim' },
      { type: 'p', text: 'A lógica é simples: o selo de inspeção define até onde o produto de origem animal pode ser vendido, e quem inspeciona é o nível de governo correspondente a essa abrangência.' },
      { type: 'table', headers: ['Selo', 'Quem inspeciona', 'Onde o produto pode ser vendido'], rows: [
        ['SIM (municipal)', 'Serviço de inspeção da prefeitura', 'Somente dentro do município'],
        ['SIE (estadual)', 'Órgão estadual de agricultura (ex.: IMA-MG, Cidasc-SC, SISP-SP)', 'Somente dentro do estado'],
        ['SIF (federal)', 'MAPA, por auditores fiscais federais agropecuários', 'Todo o Brasil e exportação'],
        ['SISBI-POA', 'Adesão do serviço municipal ou estadual ao sistema nacional (SUASA)', 'Todo o Brasil, sem exportação'],
      ] },
      { type: 'p', text: 'Na prática: para vender queijo à prefeitura da sua própria cidade, o SIM basta. Para vencer um pregão de órgão federal com entrega em outro estado, é preciso SIF — ou SIM/SIE com a equivalência do SISBI-POA. Ofertar produto com selo de abrangência menor do que a entrega exigida leva à desclassificação, ou à rescisão do contrato se for descoberto depois.' },
      { type: 'h2', text: 'O que o edital de alimentos costuma exigir', id: 'exigencias-do-edital' },
      { type: 'ul', items: [
        'Validade mínima na entrega: o edital fixa um prazo de validade restante mínimo para aceitar o produto. No PNAE, a Lei 15.226/2025 estabeleceu que o gênero entregue deve ter prazo restante igual ou superior à metade do período entre a fabricação e o vencimento (regra que não se aplica aos produtos da agricultura familiar).',
        'Rotulagem conforme a ANVISA: rotulagem geral segundo a RDC 727/2022 e rotulagem nutricional — tabela e lupa frontal de açúcar adicionado, gordura saturada e sódio — segundo a RDC 429/2020 e a IN 75/2020.',
        'Amostras: o órgão pode exigir amostra do produto antes de homologar o resultado (veja a regra abaixo).',
        'Entrega parcelada com cronograma: gêneros são entregues por semana ou quinzena, conforme o cardápio do órgão — um contrato anual pode significar dezenas de entregas em pontos diferentes.',
        'Transporte adequado: veículo com licença sanitária e, para perecíveis, refrigerado ou isotérmico, com controle de temperatura no recebimento.',
      ] },
      { type: 'p', text: 'Sobre amostras, o art. 17, § 3º, da Lei 14.133/2021 autoriza o órgão, "desde que previsto no edital", a "realizar análise e avaliação da conformidade da proposta, mediante homologação de amostras, exame de conformidade e prova de conceito". Pela orientação consolidada do TCU (Acórdãos 2640/2019 e 529/2018), a amostra só pode ser exigida do licitante provisoriamente vencedor — nunca de todos os participantes como condição de habilitação.' },
      { type: 'h2', text: 'Erros comuns de quem começa a vender alimentos', id: 'erros-comuns' },
      { type: 'ol', items: [
        'Não ler a exigência de amostra: o edital define prazo e local de entrega da amostra após a convocação. Quem perde esse prazo é desclassificado mesmo com o melhor preço — leia a cláusula antes de dar o primeiro lance.',
        'Precificar como se fosse entrega única: entregas parceladas multiplicam o frete. Um contrato anual com entrega semanal pode ter 50 fretes; se o preço foi cotado pensando em uma entrega só, a margem desaparece no caminho.',
        'Ignorar o custo financeiro do parcelamento: você compra insumos, entrega e só recebe depois do atesto de cada nota. Esse ciclo consome caixa por meses — inclua o custo do capital de giro no preço, não só o custo do produto.',
        'Ofertar produto com selo de inspeção insuficiente: produto com SIM não atende contrato com entrega fora do município. Verifique a abrangência exigida antes de cotar.',
        'Cotar estoque antigo esquecendo a validade mínima: se o edital exige metade da validade restante na entrega, um lote fabricado há muito tempo será recusado no recebimento — e recusas em sequência viram sanção.',
      ] },
      { type: 'p', text: 'Os dois erros de precificação são os que mais destroem margem no segmento. Antes de dar lance, monte a planilha considerando frete por lote, perdas de perecíveis e o prazo real de pagamento do órgão.' },
      { type: 'callout', title: 'Como o Editus se encaixa', text: 'O Editus está em acesso antecipado. Nossos agentes de IA vão ler o edital de alimentos e destacar as exigências específicas do segmento — amostra, validade mínima na entrega, selo de inspeção exigido, cronograma de entregas — cruzando tudo com o perfil e os documentos da sua empresa antes de você decidir participar. Entre na lista de espera para testar primeiro.' },
    ],
    faqs: [
      { q: 'Preciso de SIF para vender alimentos para a prefeitura da minha cidade?', a: 'Não. Para produtos de origem animal vendidos dentro do próprio município, o selo municipal (SIM) é suficiente, conforme a Lei 1.283/1950. O SIF só é obrigatório quando o produto circula entre estados ou vai para exportação. Verifique no edital onde será a entrega antes de ofertar.' },
      { q: 'Qual o percentual da merenda escolar reservado à agricultura familiar?', a: 'O mínimo é 45% desde 1º de janeiro de 2026, conforme a Lei 15.226/2025, que alterou o art. 14 da Lei 11.947/2009 (antes eram 30%). Essa fatia é comprada por chamada pública, sem licitação. O restante dos recursos do PNAE segue para licitação comum, aberta a empresas do ramo.' },
      { q: 'Posso vender alimentos ao governo sem participar de licitação?', a: 'Sim, em dois casos: pela dispensa eletrônica, para contratações de até R$ 65.492,11 em 2026 (art. 75, II, da Lei 14.133/2021, valor do Decreto 12.807/2025), e pela chamada pública do PNAE, se você for agricultor familiar ou organização da agricultura familiar com CAF.' },
    ],
    related: ['dispensa-de-licitacao', 'margem-em-licitacao', 'pregao-eletronico-como-funciona'],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find(g => g.slug === slug)
}

export function guideUrl(slug: string): string {
  return `${ORIGIN}/guia/${slug}`
}

// --- JSON-LD helpers (schema.org) ---

export function guideArticleJsonLd(guide: Guide) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': guide.h1,
    'description': guide.description,
    'inLanguage': 'pt-BR',
    'datePublished': guide.updated,
    'dateModified': guide.updated,
    'url': guideUrl(guide.slug),
    'mainEntityOfPage': { '@type': 'WebPage', '@id': guideUrl(guide.slug) },
    // Autor = Person do fundador (E-E-A-T): referencia o @id emitido no
    // nuxt.config.ts, ligando cada Article a um autor nomeado e verificável.
    'author': { '@id': `${ORIGIN}/#founder` },
    'publisher': {
      '@type': 'Organization',
      'name': 'Editus',
      'url': ORIGIN,
      'logo': { '@type': 'ImageObject', 'url': `${ORIGIN}/logo-symbol-gradient.svg` },
    },
  }
}

export function guideBreadcrumbJsonLd(guide: Guide) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': ORIGIN },
      { '@type': 'ListItem', 'position': 2, 'name': 'Guias', 'item': `${ORIGIN}/guia` },
      { '@type': 'ListItem', 'position': 3, 'name': guide.h1, 'item': guideUrl(guide.slug) },
    ],
  }
}

export function guideFaqJsonLd(guide: Guide) {
  if (!guide.faqs?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': guide.faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
    })),
  }
}
