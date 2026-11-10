<template>
  <div>
    <a
      href="#conteudo-principal"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-eb-sm focus:font-medium focus:text-sm"
    >Ir para o conteúdo principal</a>
    <NuxtPage />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Injeta o script do Umami via runtimeConfig (lido em runtime, não em build-time)
// Isso garante que variáveis de ambiente definidas após o build também funcionem
//
// Só em produção: o script nem entra no HTML em `nuxt dev` nem quando o site é
// acessado por host local (inclui o build rodando em localhost). Sem script, o
// useUmami().track vira no-op e nenhuma métrica de desenvolvimento é enviada.
const hostname = useRequestURL().hostname
const isLocalHost = ['localhost', '127.0.0.1', '[::1]', '::1'].includes(hostname)
  || hostname.endsWith('.localhost')

if (!import.meta.dev && !isLocalHost && config.public.umamiScriptUrl && config.public.umamiWebsiteId) {
  useHead({
    script: [
      {
        'src': config.public.umamiScriptUrl,
        'defer': true,
        'data-website-id': config.public.umamiWebsiteId,
        'data-host-url': 'https://cloud.umami.is',
      },
    ],
  })
}
</script>
