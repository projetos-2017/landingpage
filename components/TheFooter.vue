<template>
  <footer class="bg-indigo-950 py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <!-- editus-symbol-mono-dark: variante para superfícies escuras -->
            <svg
              width="28"
              height="28"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="56"
                height="56"
                rx="14.56"
                fill="#1E1654"
              />
              <rect
                x="14"
                y="15"
                width="22"
                height="4"
                rx="2"
                fill="#fff"
              />
              <rect
                x="14"
                y="24"
                width="28"
                height="4"
                rx="2"
                fill="#fff"
                opacity="0.78"
              />
              <rect
                x="14"
                y="33"
                width="16"
                height="4"
                rx="2"
                fill="#fff"
                opacity="0.6"
              />
              <path
                d="M30 40.5 L34.5 45 L44 33.5"
                stroke="#8E7BF5"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <span class="font-display font-bold text-white tracking-tight">edit<span class="font-medium text-violet-300">us</span></span>
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
