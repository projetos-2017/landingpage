<template>
  <footer class="bg-indigo-950 py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <!-- Logo oficial (lockup para superfícies escuras): /logo-lockup-dark.svg -->
            <img
              src="/logo-lockup-dark.svg"
              alt="Editus"
              width="106"
              height="28"
              class="h-7 w-auto"
              loading="lazy"
            >
          </div>
          <p class="text-xs text-white/55 max-w-xs leading-relaxed">
            Inteligência artificial para PMEs brasileiras que competem em licitações públicas.
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-x-12 gap-y-8">
          <div>
            <p class="text-xs font-medium text-white/55 uppercase tracking-wider mb-3">
              Produto
            </p>
            <div class="space-y-2">
              <a
                href="#como-funciona"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Como funciona</a>
              <a
                href="#features"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Funcionalidades</a>
              <NuxtLink
                to="/diagnostico"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Diagnóstico de oportunidades</NuxtLink>
              <NuxtLink
                to="/calculadora-custo-financeiro"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Calculadora de custo financeiro</NuxtLink>
              <NuxtLink
                to="/checklist-habilitacao"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Checklist de habilitação</NuxtLink>
              <NuxtLink
                to="/guia"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Guias de licitação</NuxtLink>
              <NuxtLink
                to="/faq"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Perguntas frequentes</NuxtLink>
              <a
                href="#waitlist"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Acesso antecipado</a>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-white/55 uppercase tracking-wider mb-3">
              Recursos
            </p>
            <div class="space-y-2">
              <NuxtLink
                to="/software-de-licitacoes"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Software de licitações</NuxtLink>
              <NuxtLink
                to="/ia-para-licitacoes"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >IA para licitações</NuxtLink>
              <NuxtLink
                to="/licitacoes/tecnologia"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Licitações de tecnologia</NuxtLink>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-white/55 uppercase tracking-wider mb-3">
              Legal
            </p>
            <div class="space-y-2">
              <NuxtLink
                to="/sobre"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Sobre o Editus</NuxtLink>
              <NuxtLink
                to="/privacidade"
                class="block text-sm text-white/55 hover:text-white/80 transition-colors"
              >Política de Privacidade</NuxtLink>
              <span
                class="block text-sm text-white/45 cursor-default"
                title="Em breve"
              >Termos de uso</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-indigo-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/45">
          © 2026 Editus. Todos os direitos reservados.
        </p>
        <p class="text-xs text-white/45">
          Editus é um produto de Joaquim Alves LTDA · CNPJ 49.076.076/0001-90 ·
          <a
            href="mailto:privacidade@editus.com.br"
            class="hover:text-white/40 transition-colors"
          >privacidade@editus.com.br</a>
        </p>
      </div>
    </div>
  </footer>
</template>
