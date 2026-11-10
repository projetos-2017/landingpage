<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="solidBar ? 'bg-indigo-900/95 backdrop-blur-md shadow-lg shadow-indigo-950/30' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5"
        aria-label="Editus — página inicial"
      >
        <!-- Logo oficial (lockup para superfícies escuras): /logo-lockup-dark.svg -->
        <img
          src="/logo-lockup-dark.svg"
          alt="Editus"
          width="121"
          height="32"
          class="h-8 w-auto"
        >
      </NuxtLink>

      <!-- Nav links -->
      <nav
        class="hidden md:flex items-center gap-8"
        aria-label="Menu principal"
      >
        <NuxtLink
          to="/#problema"
          class="text-sm text-white/60 hover:text-white transition-colors"
        >Problema</NuxtLink>
        <NuxtLink
          to="/#decisao"
          class="text-sm text-white/60 hover:text-white transition-colors"
        >Decisão</NuxtLink>
        <NuxtLink
          to="/#como-funciona"
          class="text-sm text-white/60 hover:text-white transition-colors"
        >Como funciona</NuxtLink>
        <NuxtLink
          to="/#features"
          class="text-sm text-white/60 hover:text-white transition-colors"
        >Funcionalidades</NuxtLink>
        <NuxtLink
          to="/#faq"
          class="text-sm text-white/60 hover:text-white transition-colors"
        >FAQ</NuxtLink>
      </nav>

      <!-- CTA -->
      <NuxtLink
        to="/#waitlist"
        class="btn-primary text-sm py-2"
        @click="onCtaClick"
      >
        Quero acesso antecipado
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
  </header>
</template>

<script setup lang="ts">
const { track } = useUmami()

const ctaCopyVariant = useABTest('cta-copy', ['control', 'benefit', 'action'])
const buttonColorVariant = useABTest('button-color', ['control'])

const route = useRoute()
// Só a home tem hero escuro no topo — lá o navbar pode começar transparente e
// virar sólido no scroll. Nas demais rotas (fundo branco), a barra transparente
// sumiria; por isso fica sólida desde o topo. Evita o navbar "invisível".
const isHome = computed(() => route.path === '/')

const scrolled = ref(false)
const solidBar = computed(() => scrolled.value || !isHome.value)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  if (import.meta.client) window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  if (import.meta.client) window.removeEventListener('scroll', onScroll)
})

function onCtaClick() {
  track('cta_click', {
    location: 'navbar',
    ab_cta_copy: ctaCopyVariant.value,
    ab_button_color: buttonColorVariant.value,
  })
}
</script>
