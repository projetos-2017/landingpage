<template>
  <div class="min-h-screen bg-white">
    <TheNavbar />

    <main
      id="conteudo-principal"
      class="max-w-3xl mx-auto px-6 pt-28 pb-24"
    >
      <!-- Breadcrumb (também emitido como BreadcrumbList JSON-LD) -->
      <nav
        aria-label="Trilha de navegação"
        class="text-sm text-neutral-400 mb-8"
      >
        <NuxtLink
          to="/"
          class="hover:text-neutral-700 transition-colors"
        >Início</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink
          to="/guia"
          class="hover:text-neutral-700 transition-colors"
        >Guias</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-neutral-600">{{ guide.kicker }}</span>
      </nav>

      <header class="mb-10">
        <p class="section-label mb-3">
          {{ guide.kicker }}
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight mb-4">
          {{ guide.h1 }}
        </h1>
        <p class="text-neutral-600 leading-relaxed mb-4">
          {{ guide.description }}
        </p>
        <p class="text-xs text-neutral-400">
          Atualizado em {{ formattedDate }} · {{ guide.readingTime }} de leitura ·
          Revisado por
          <NuxtLink
            to="/sobre"
            class="text-neutral-500 hover:text-neutral-700 underline underline-offset-2 transition-colors"
          >Joaquim Alves</NuxtLink>, fundador do Editus
        </p>
      </header>

      <article class="space-y-5">
        <template
          v-for="(block, i) in guide.blocks"
          :key="i"
        >
          <h2
            v-if="block.type === 'h2'"
            :id="block.id"
            class="text-xl font-semibold text-neutral-900 tracking-tight pt-6 scroll-mt-24"
          >
            {{ block.text }}
          </h2>

          <p
            v-else-if="block.type === 'p'"
            class="text-neutral-600 leading-relaxed"
          >
            {{ block.text }}
          </p>

          <ul
            v-else-if="block.type === 'ul'"
            class="space-y-2.5 pl-1"
          >
            <li
              v-for="(item, j) in block.items"
              :key="j"
              class="flex gap-3 text-neutral-600 leading-relaxed"
            >
              <span
                class="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              <span>{{ item }}</span>
            </li>
          </ul>

          <ol
            v-else-if="block.type === 'ol'"
            class="space-y-2.5 pl-1 counter-reset"
          >
            <li
              v-for="(item, j) in block.items"
              :key="j"
              class="flex gap-3 text-neutral-600 leading-relaxed"
            >
              <span
                class="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold flex items-center justify-center"
                aria-hidden="true"
              >{{ j + 1 }}</span>
              <span class="pt-0.5">{{ item }}</span>
            </li>
          </ol>

          <div
            v-else-if="block.type === 'table'"
            class="overflow-x-auto"
          >
            <table class="w-full border-collapse text-sm">
              <thead>
                <tr class="border-b-2 border-neutral-300">
                  <th
                    v-for="(header, j) in block.headers"
                    :key="j"
                    class="text-left font-semibold text-neutral-900 py-2.5 pr-4"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, j) in block.rows"
                  :key="j"
                  class="border-b border-neutral-200"
                >
                  <td
                    v-for="(cell, k) in row"
                    :key="k"
                    class="text-neutral-600 leading-relaxed py-2.5 pr-4 align-top"
                  >
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-else-if="block.type === 'callout'"
            class="rounded-eb-md border border-violet-200 bg-violet-50/60 px-6 py-5"
          >
            <p class="font-semibold text-violet-900 mb-1.5 text-sm">
              {{ block.title }}
            </p>
            <p class="text-violet-800/80 text-sm leading-relaxed">
              {{ block.text }}
            </p>
          </div>
        </template>
      </article>

      <!-- FAQ (também emitido como FAQPage JSON-LD) -->
      <section
        v-if="guide.faqs?.length"
        class="mt-14 pt-10 border-t border-neutral-200"
      >
        <h2 class="text-xl font-semibold text-neutral-900 tracking-tight mb-6">
          Perguntas frequentes
        </h2>
        <div class="space-y-6">
          <div
            v-for="(faq, i) in guide.faqs"
            :key="i"
          >
            <h3 class="font-semibold text-neutral-900 mb-1.5">
              {{ faq.q }}
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </section>

      <!-- CTA para a waitlist -->
      <div class="mt-14 rounded-eb-md border border-neutral-200 bg-neutral-50 px-8 py-10 text-center">
        <p class="text-neutral-900 font-semibold text-lg mb-2">
          Cansado de fazer isso manualmente?
        </p>
        <p class="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
          O Editus automatiza a análise de editais de licitação com IA — do PNCP à proposta.
          Entre na lista de acesso antecipado.
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

      <!-- Links para outros guias (linkagem interna do cluster) -->
      <nav
        v-if="otherGuides.length"
        aria-label="Outros guias"
        class="mt-16 pt-10 border-t border-neutral-200"
      >
        <p class="section-label mb-5">
          Continue lendo
        </p>
        <ul class="grid sm:grid-cols-2 gap-4">
          <li
            v-for="g in otherGuides"
            :key="g.slug"
          >
            <NuxtLink
              :to="`/guia/${g.slug}`"
              class="card block h-full"
            >
              <p class="font-semibold text-neutral-900 text-sm mb-1 leading-snug">
                {{ g.h1 }}
              </p>
              <p class="text-neutral-500 text-xs leading-relaxed line-clamp-2">
                {{ g.description }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Guide } from '~/composables/useGuides'
import {
  GUIDES,
  guideUrl,
  guideArticleJsonLd,
  guideBreadcrumbJsonLd,
  guideFaqJsonLd,
} from '~/composables/useGuides'

const props = defineProps<{ guide: Guide }>()

// Prioriza os guias topicamente relacionados (guide.related); completa com os
// demais só se related estiver ausente ou tiver menos de 3 entradas — assim a
// seção nunca aponta para um guia desconexo do assunto atual.
const otherGuides = computed(() => {
  const rest = GUIDES.filter(g => g.slug !== props.guide.slug)
  const related = (props.guide.related ?? [])
    .map(slug => rest.find(g => g.slug === slug))
    .filter((g): g is Guide => g !== undefined)
  if (related.length >= 3) return related.slice(0, 4)
  const fallback = rest.filter(g => !related.includes(g))
  return [...related, ...fallback].slice(0, 4)
})

const formattedDate = computed(() => {
  // Formata a data ISO (guide.updated) em pt-BR sem depender de Date.now().
  const [y, m, d] = props.guide.updated.split('-')
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${y}`
})

// SEO: title, description, canonical, OG e JSON-LD (Article + BreadcrumbList + FAQPage).
const schemas = computed(() => {
  const list = [guideArticleJsonLd(props.guide), guideBreadcrumbJsonLd(props.guide)]
  const faq = guideFaqJsonLd(props.guide)
  if (faq) list.push(faq)
  return list
})

useHead(() => ({
  title: props.guide.title,
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'description', content: props.guide.description },
    { property: 'og:title', content: props.guide.title },
    { property: 'og:description', content: props.guide.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: guideUrl(props.guide.slug) },
  ],
  link: [
    { rel: 'canonical', href: guideUrl(props.guide.slug) },
  ],
  script: schemas.value.map(s => ({
    type: 'application/ld+json',
    innerHTML: JSON.stringify(s),
  })),
}))

const { track } = useUmami()

onMounted(() => {
  // Atribuição: se o visitante clicar em "waitlist" a partir daqui, o lead
  // fica marcado com utm_source='guia' + utm_campaign=<slug> (ver
  // useContentAttribution e WaitlistForm.vue). Sem isso, era impossível saber
  // se um cadastro veio de um guia específico ou direto da home.
  setContentAttribution({ source: 'guia', campaign: props.guide.slug })
  track('section_view', { location: 'guia', slug: props.guide.slug })
})
</script>
