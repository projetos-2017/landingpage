# Plano de visibilidade externa — ações manuais do fundador

> Origem: pesquisa multi-agente de visibilidade (ago/2026). Estas ações **não dão
> para automatizar via código** — exigem criação de contas e perfis em nome da
> empresa/fundador. O código do site já está preparado para elas: os campos
> `sameAs` do `Organization` e do `Person` em `nuxt.config.ts` estão comentados
> aguardando as URLs criadas aqui.
>
> Por que isso importa: LLMs (ChatGPT, Gemini, Perplexity) **não citam marcas que
> não conseguem corroborar** em fontes externas. Hoje o Editus é uma entidade que
> só existe no próprio site — nenhum motor de IA consegue verificar que é real.

## Princípio de corroboração (leia antes de criar qualquer perfil)

Use **exatamente o mesmo nome, descrição e dados** em todos os perfis. O
Knowledge Graph do Google (e o retrieval dos LLMs) confia em entidades cujos
dados batem entre fontes independentes. Divergência = ruído = invisibilidade.

**Descrição canônica** (cole em todos os perfis, adaptando o limite de caracteres):

> Editus é uma plataforma de inteligência artificial para PMEs brasileiras que
> participam de licitações públicas. Monitora o PNCP pelo perfil da empresa,
> analisa editais conforme a Lei 14.133/2021 (habilitação, risco, custo
> financeiro) e prepara a proposta para revisão. Operada pela Joaquim Alves
> LTDA, CNPJ 49.076.076/0001-90.

**Dados canônicos:** nome `Editus` · site `https://editus.com.br` · categoria
`Software B2B / GovTech / Licitações` · fundação `2026` · e-mail
`contato@editus.com.br`.

---

## Fase 1 — Fundação de entidade (fazer primeiro, ~2h no total)

### 1. LinkedIn Company Page — o sinal mais forte para SaaS B2B
- [ ] Criar em <https://www.linkedin.com/company/setup/new/>
- [ ] Nome: Editus · URL sugerida: `linkedin.com/company/editus-ia`
- [ ] Descrição canônica + logo (`public/logo-symbol-gradient.svg` do repo) + site
- [ ] Setor: "Desenvolvimento de software" · Especialidades: licitações públicas, PNCP, Lei 14.133, IA
- [ ] **Depois**: me avisar a URL para descomentar no `Organization.sameAs`

### 2. Perfil pessoal do fundador no LinkedIn
- [ ] Atualizar o cargo para "Fundador do Editus" com link para a company page
- [ ] **Depois**: me avisar a URL para o `Person.sameAs` (o schema do autor dos
      guias já referencia a Person — o LinkedIn fecha o ciclo de verificação)

### 3. Google Business Profile
- [ ] Criar em <https://business.google.com> (categoria "empresa de software";
      pode ser sem endereço público — modo "atendimento online")
- [ ] Descrição canônica + site + logo

### 4. Bing Webmaster Tools — o índice que o ChatGPT usa
- [ ] Verificar o site em <https://www.bing.com/webmasters> (há importação do
      Google Search Console em 1 clique, se o GSC já estiver configurado)
- [ ] Submeter o sitemap: `https://editus.com.br/sitemap.xml`
- [ ] Ativar o painel **AI Performance** — única fonte first-party de citações
      em respostas do Copilot/ChatGPT
- [ ] Nota: o IndexNow já automatizado no site (cron) passa a render de verdade
      com o site verificado no BWT. ~87% das citações do ChatGPT Search
      coincidem com o top orgânico do Bing.

### 5. Wikidata — entrada no Knowledge Graph sem precisar de Wikipedia
- [ ] Criar conta em <https://www.wikidata.org>
- [ ] Criar item da **organização**: nome, descrição pt/en ("plataforma
      brasileira de IA para licitações públicas"), instância de: "empresa de
      software", site oficial, país, data de fundação (2026), fundador
- [ ] Criar item **Person** do fundador e ligar os dois (propriedade "fundador de")
- [ ] **Depois**: me avisar os dois QIDs (ex.: Q123456) para os `sameAs`

## Fase 2 — Diretórios e avaliação (quando quiser, ~2h)

- [ ] **B2B Stack** (<https://b2bstack.com.br>) — maior portal BR de avaliação
      de software B2B; plano gratuito, categoria "licitações/govtech"
- [ ] **Capterra / GetApp** (<https://www.capterra.com.br/vendors>) — aceitam
      produtos em early access; menção em propriedade Gartner multiplica ~3x a
      chance de citação por IA
- [ ] **Sling Hub** (<https://slinghub.io>) e **100 Open Startups** — bases de
      startups que LLMs usam como fonte de "empresas do setor X no Brasil"
- [ ] **Product Hunt** — NÃO agora; planejar para o dia do lançamento público

## Fase 3 — PR e autoridade (contínuo, começar quando os guias Tier 1 estiverem no ar)

- [ ] **Press Voice** (<https://pressvoice.com.br>, gratuito) — criar perfil de
      fonte especializada: "Lei 14.133 e licitações para PMEs" (3-5 temas)
- [ ] Idem em **Source of Sources** e **Qwoted** (internacionais, em inglês)
- [ ] Releases com dados agregados do PNCP para Startups.com.br, Baguete, Exame
      (o futuro "Radar PNCP" do site será a munição; startup desconhecida compete
      de igual — o editor avalia a resposta, não o domain rating)
- [ ] **YouTube**: vídeos curtos (5-10 min) respondendo as mesmas perguntas dos
      guias — menção em YouTube multiplica ~3,2x a chance de citação por IA
      (vs 1,3x do próprio site); descrição estruturada com link para o guia
- [ ] **LinkedIn do fundador**: posts regulares com dados do PNCP

## Fase 4 — Medição (quinzenal, ~30 min)

- [ ] Planilha com ~20 queries estratégicas ("software para achar licitações",
      "como analisar edital", "vale a pena participar de licitação", "IA para
      licitações"...) rodadas em janela anônima no ChatGPT, Perplexity, Gemini
      e Google (AI Overviews), registrando quem é citado
- [ ] Cruzar com o Google Search Console e o AI Performance do Bing WMT
- [ ] Contexto: só ~24% das empresas BR otimizam para busca generativa — janela aberta

---

## O que o código já entrega (para referência)

robots.txt liberando todos os crawlers de IA · sitemap + IndexNow automatizado ·
llms.txt · JSON-LD completo (WebSite, Organization com @id/knowsAbout,
SoftwareApplication, Person do fundador, Article+FAQPage+BreadcrumbList por guia,
AboutPage) · guias answer-first com autor nomeado · páginas com canonical e
descrição dedicadas. O gargalo agora é **corroboração externa** — as fases acima.
