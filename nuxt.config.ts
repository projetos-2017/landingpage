export default defineNuxtConfig({
  // SEC-06: devtools apenas em desenvolvimento — nunca em produção

  modules: [
    '@sentry/nuxt/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ], devtools: { enabled: process.env.NODE_ENV === 'development' },

  app: {
    head: {
      title: 'Editus — encontre licitações certas e saiba se vale a pena participar',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'O Editus monitora o PNCP, encontra editais compatíveis com sua empresa, diz se vale a pena participar (habilitação, risco, margem) e prepara a proposta. IA para PMEs em licitações. Acesso antecipado aberto.',
        },
        {
          name: 'keywords',
          content:
            'análise de edital, software licitação, IA para licitações, PNCP, Lei 14133, compliance licitação, habilitação licitação, PME licitação, proposta automática, Comprasnet, como analisar edital de licitação, verificação habilitação licitação, custo financeiro edital pagamento, análise edital PNCP automática',
        },
        // Open Graph
        { property: 'og:title', content: 'Editus — encontre licitações certas e saiba se vale a pena participar' },
        {
          property: 'og:description',
          content:
            'Monitora o PNCP, encontra editais compatíveis com sua empresa, mostra se vale a pena entrar (habilitação, risco, margem, custo financeiro) e prepara a proposta. Você decide.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://editus.com.br' },
        { property: 'og:image', content: 'https://editus.com.br/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Editus — encontre licitações certas e saiba se vale a pena participar' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'Editus' },
        // Twitter / X Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Editus — encontre licitações certas e saiba se vale a pena' },
        {
          name: 'twitter:description',
          content:
            'Monitora o PNCP, encontra editais compatíveis, mostra se vale a pena participar e prepara a proposta. Para PMEs brasileiras.',
        },
        { name: 'twitter:image', content: 'https://editus.com.br/og-image.png' },
        { name: 'twitter:image:alt', content: 'Editus — encontre licitações certas e saiba se vale a pena participar' },
        // Técnico
        { name: 'theme-color', content: '#1E1654' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        // Ícones: o Google exige favicon em múltiplo de 48px (ICO/PNG) e rastreável;
        // o SVG serve os navegadores modernos. Sem o /favicon.ico real, o Nitro
        // devolve um stub vazio (data URI) que o Google lê como "sem favicon".
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/icon-192.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://editus.com.br' },
      ],
      script: [
        // Umami: injetado em app.vue via useRuntimeConfig (runtime-safe)
        // JSON-LD: WebSite — ancora a entidade "site" (distinta da "aplicação" e
        // da "organização" abaixo). Sem isso, Google e agentes de IA não têm um
        // nó @type:WebSite para associar às páginas indexadas (/guia/*, /faq etc.).
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://editus.com.br/#website',
            'name': 'Editus',
            'url': 'https://editus.com.br',
            'inLanguage': 'pt-BR',
            'description':
              'Editus monitora o PNCP, encontra editais compatíveis com o perfil da empresa, mostra se vale a pena participar e prepara a proposta.',
            'publisher': { '@id': 'https://editus.com.br/#organization' },
          }),
        },
        // JSON-LD: SoftwareApplication
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'Editus',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'url': 'https://editus.com.br',
            'description':
              'Plataforma de inteligência artificial para PMEs brasileiras que competem em licitações públicas. Monitora o PNCP, encontra editais compatíveis com o perfil da empresa, mostra se vale a pena participar (habilitação, risco, compliance com a Lei 14.133, custo financeiro e margem) e prepara a proposta para revisão.',
            'offers': {
              '@type': 'Offer',
              'availability': 'https://schema.org/PreOrder',
              'priceCurrency': 'BRL',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Editus',
              'url': 'https://editus.com.br',
            },
            'featureList': [
              'Monitoramento contínuo do PNCP',
              'Análise de edital com 12 agentes de IA',
              'Verificação de habilitação e certidões',
              'Compliance com Lei 14.133/2021',
              'Análise de risco por cláusula',
              'Cálculo de custo financeiro do prazo de pagamento',
              'Consulta a CEIS, CNEP e CEPIM',
              'Geração automática de proposta',
              'Relatório PDF completo',
            ],
            'audience': {
              '@type': 'BusinessAudience',
              'audienceType':
                'Pequenas e médias empresas brasileiras que participam de licitações públicas',
            },
          }),
        },
        // JSON-LD: Organization
        // NOTA DE DESAMBIGUAÇÃO DE ENTIDADE:
        // Existe uma entidade homônima com 30 anos de autoridade — a "Editus",
        // editora da UESC (Universidade Estadual de Santa Cruz). Para o Google
        // Knowledge Graph e para agentes de IA distinguirem ESTA Editus (SaaS de
        // licitações) da editora, reforçamos: '@id' estável, 'alternateName',
        // 'knowsAbout' (tópicos-âncora: licitações, PNCP, Lei 14.133) e 'sameAs'
        // (perfis externos). O 'sameAs' é o sinal MAIS forte: assim que os perfis
        // oficiais existirem, descomente as URLs abaixo.
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://editus.com.br/#organization',
            'name': 'Editus',
            'alternateName': 'Editus IA',
            'legalName': 'Joaquim Alves LTDA',
            'url': 'https://editus.com.br',
            'logo': 'https://editus.com.br/logo-symbol-gradient.svg',
            'image': 'https://editus.com.br/og-image.png',
            'slogan': 'Encontre as licitações certas e saiba se vale a pena participar',
            'description':
              'Empresa de tecnologia especializada em inteligência artificial para o mercado de licitações públicas brasileiras. Não confundir com a Editus, editora da UESC.',
            'foundingDate': '2026',
            'areaServed': {
              '@type': 'Country',
              'name': 'Brasil',
            },
            'knowsAbout': [
              'Licitações públicas',
              'PNCP — Portal Nacional de Compras Públicas',
              'Lei 14.133/2021',
              'Pregão eletrônico',
              'Análise de editais',
              'Habilitação em licitações',
              'Compliance em compras públicas',
            ],
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'customer support',
              'email': 'contato@editus.com.br',
              'availableLanguage': 'Portuguese',
            },
            // sameAs: perfis externos que amarram a entidade no grafo de conhecimento.
            // Prioridade de criação (maior peso primeiro):
            //   1. LinkedIn (company page)   — sinal mais forte para SaaS B2B
            //   2. Crunchbase                — reconhecido como fonte de entidade de empresa
            //   3. GitHub / Product Hunt     — reforço para produto de software
            //   4. Instagram / X (Twitter)   — presença social
            // Descomente cada URL assim que o perfil oficial existir:
            'founder': { '@id': 'https://editus.com.br/#founder' },
            'sameAs': [
              // 'https://www.linkedin.com/company/editus-ia',
              // 'https://www.crunchbase.com/organization/editus',
              // 'https://github.com/Editus-IA',
              // 'https://www.producthunt.com/products/editus',
              // 'https://www.instagram.com/editus.ia',
            ],
          }),
        },
        // JSON-LD: Person (fundador) — sinal E-E-A-T para conteúdo YMYL.
        // Licitação é tema com consequência jurídica/financeira; um autor nomeado
        // e verificável (referenciado pelo Article.author de cada guia via @id)
        // correlaciona com mais aparições em respostas de IA do que autoria
        // anônima de "equipe". sameAs: preencher com LinkedIn/Wikidata quando
        // os perfis existirem (mesma regra do Organization.sameAs acima).
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': 'https://editus.com.br/#founder',
            'name': 'Joaquim Alves',
            'jobTitle': 'Fundador do Editus',
            'url': 'https://editus.com.br/sobre',
            'worksFor': { '@id': 'https://editus.com.br/#organization' },
            'knowsAbout': [
              'Licitações públicas',
              'Lei 14.133/2021',
              'PNCP — Portal Nacional de Compras Públicas',
              'Inteligência artificial aplicada a compras públicas',
            ],
            'sameAs': [
              // 'https://www.linkedin.com/in/<perfil-do-fundador>',
              // 'https://www.wikidata.org/wiki/<QID>',
            ],
          }),
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://editus.com.br',
  },

  // Variáveis privadas — disponíveis APENAS no servidor (nunca no browser)
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY || '',
    ipHashSalt: process.env.IP_HASH_SALT || '',
    resendApiKey: process.env.RESEND_API_KEY || '',
    public: {
      umamiScriptUrl: process.env.NUXT_PUBLIC_UMAMI_SCRIPT_URL || '',
      umamiWebsiteId: process.env.NUXT_PUBLIC_UMAMI_WEBSITE_ID || '',
      sentryDsn: process.env.SENTRY_DSN || '',
      // Vagas do lote de acesso antecipado — quando esgotadas, o cadastro é bloqueado.
      // Aceita 0 (fecha o lote); só cai para o padrão 20 se a env estiver ausente/vazia/inválida.
      maxVagas: (() => {
        const raw = process.env.NUXT_PUBLIC_MAX_VAGAS?.trim()
        if (!raw) return 20
        const n = Number(raw)
        return Number.isFinite(n) && n >= 0 ? n : 20
      })(),
    },
  },

  // SEC-01: HTTP Security Headers — protege contra XSS, clickjacking e MITM
  routeRules: {
    '/**': {
      headers: {
        // Bloqueia carregamento em iframe (clickjacking)
        'X-Frame-Options': 'DENY',
        // Previne MIME-type sniffing
        'X-Content-Type-Options': 'nosniff',
        // Não vaza URL completa em referrals externos
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        // Desabilita APIs de hardware desnecessárias
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        // Força HTTPS por 2 anos (ativar após validar HTTPS em produção)
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
        // CSP: nonces injetados por request via server/plugins/csp-nonce.ts
        // 'unsafe-inline' substituído por 'nonce-<valor>' dinamicamente — sem brecha XSS
        'Content-Security-Policy': (() => {
          const umamiUrl = process.env.NUXT_PUBLIC_UMAMI_SCRIPT_URL
          let umamiOrigin = ''
          if (umamiUrl) {
            try {
              umamiOrigin = ' ' + new URL(umamiUrl).origin
            }
            catch { /* URL inválida — ignora */ }
          }
          const supabaseOrigin = process.env.SUPABASE_URL || 'https://*.supabase.co'
          return [
            'default-src \'self\'',
            `script-src 'self' 'unsafe-inline'${umamiOrigin}`,
            'style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com',
            'font-src \'self\' data: https://fonts.gstatic.com',
            'img-src \'self\' data: https:',
            `connect-src 'self' ${supabaseOrigin} https://*.ingest.sentry.io${umamiOrigin}`,
            process.env.NODE_ENV === 'development' ? 'worker-src blob:' : 'worker-src \'none\'',
            'manifest-src \'self\'',
            process.env.NODE_ENV === 'development' ? 'frame-src \'self\' data:' : 'frame-src \'none\'',
            'frame-ancestors \'none\'',
            'base-uri \'self\'',
            'form-action \'self\'',
            'report-uri /api/csp-report',
          ].join('; ')
        })(),
      },
    },
  },

  compatibilityDate: '2024-04-03',

  telemetry: false,

  googleFonts: {
    families: {
      'Space Grotesk': [700],
      'IBM Plex Sans': [400, 500, 600],
      'IBM Plex Mono': [500, 600],
    },
    display: 'swap',
    preload: true,
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },

  sitemap: {
    exclude: ['/api/**', '/obrigado', '/cancelar', '/privacidade'],
    // Rotas dinâmicas do cluster /guia/[slug]: o crawler do sitemap não as
    // descobre sozinho, então declaramos explicitamente. Manter em sincronia
    // com os slugs de composables/useGuides.ts (GUIDES[].slug).
    urls: [
      '/sobre',
      '/checklist-habilitacao',
      '/faq',
      '/guia',
      '/guia/o-que-e-pncp',
      '/guia/habilitacao-licitacao',
      '/guia/consulta-ceis-cnep-cepim',
      '/guia/lei-14133-resumo',
      '/guia/pregao-eletronico-como-funciona',
      '/guia/como-participar-de-licitacao',
      '/guia/mei-pode-participar-de-licitacao',
      '/guia/o-que-e-sicaf',
      '/guia/certidao-vencida-licitacao',
      '/guia/impugnacao-de-edital',
      '/guia/carta-de-credenciamento-licitacao',
      '/guia/margem-em-licitacao',
      '/guia/como-calcular-bdi',
      '/guia/dispensa-de-licitacao',
      '/guia/atestado-de-capacidade-tecnica',
      '/guia/venci-a-licitacao-e-agora',
      '/guia/governo-atrasou-pagamento',
      '/guia/empate-ficto-me-epp',
      '/guia/licitacao-de-alimentos',
    ],
  },
})
