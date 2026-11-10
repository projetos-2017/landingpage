<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="section-label mb-3">
          Plataforma
        </p>
        <h2 class="section-title mb-4">
          Uma tela. Uma decisão.
        </h2>
        <p class="section-sub mx-auto">
          Tudo que você precisa ver para decidir se participa ou não —
          sem abrir o edital, sem planilha, sem advogado.
        </p>
      </div>

      <!-- Dashboard mockup: ilustração puramente decorativa (0 interatividade).
           aria-hidden remove os elementos figurativos (ex: botões fake do
           navegador) da árvore de acessibilidade — o significado já é dado
           pelo título e descrição acima. Melhora a navegação por agentes de IA. -->
      <div
        aria-hidden="true"
        style="border-radius:16px; overflow:hidden; box-shadow:0 32px 80px rgba(15,12,46,0.45); border:1px solid rgba(100,89,200,0.2);"
      >
        <!-- Browser chrome -->
        <div style="background:#100D30; border-bottom:1px solid rgba(255,255,255,0.06); display:flex; flex-direction:column;">
          <!-- Tab bar -->
          <div style="display:flex; align-items:flex-end; padding:10px 16px 0; gap:4px;">
            <!-- Traffic lights -->
            <div style="display:flex;gap:6px;align-items:center;padding-bottom:8px;margin-right:8px;flex-shrink:0;">
              <div style="width:11px;height:11px;border-radius:50%;background:#FF5F57;box-shadow:0 0 0 1px rgba(0,0,0,0.15) inset;" />
              <div style="width:11px;height:11px;border-radius:50%;background:#FEBC2E;box-shadow:0 0 0 1px rgba(0,0,0,0.15) inset;" />
              <div style="width:11px;height:11px;border-radius:50%;background:#28C840;box-shadow:0 0 0 1px rgba(0,0,0,0.15) inset;" />
            </div>
            <!-- Tab ativa -->
            <div style="display:flex;align-items:center;gap:7px;padding:6px 14px 8px;background:#1A1547;border-radius:8px 8px 0 0;border:1px solid rgba(255,255,255,0.08);border-bottom:none;max-width:220px;">
              <div style="width:14px;height:14px;background:#5A3CE0;border-radius:3px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="3"
                    height="2"
                    rx="0.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="3.5"
                    width="3"
                    height="2"
                    rx="0.5"
                    fill="white"
                    opacity="0.5"
                  />
                  <path
                    d="M4.5 2h3M4.5 4h2"
                    stroke="white"
                    stroke-width="0.8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <span style="font-size:11px;color:rgba(255,255,255,0.7);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Dashboard — Editus</span>
              <svg
                style="flex-shrink:0;margin-left:auto;"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M2.5 2.5l5 5M7.5 2.5l-5 5"
                  stroke="rgba(255,255,255,0.25)"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <!-- Tab inativa -->
            <div style="display:flex;align-items:center;gap:6px;padding:6px 12px 8px;border-radius:8px 8px 0 0;opacity:0.4;max-width:160px;">
              <span style="font-size:11px;color:rgba(255,255,255,0.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">PNCP · Portal de...</span>
            </div>
          </div>
          <!-- URL toolbar -->
          <div style="display:flex; align-items:center; gap:10px; padding:7px 16px 9px; background:#1A1547;">
            <!-- Nav buttons -->
            <div style="display:flex;gap:4px;flex-shrink:0;">
              <button
                type="button"
                tabindex="-1"
                style="width:24px;height:24px;border-radius:5px;background:rgba(255,255,255,0.05);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                ><path
                  d="M6.5 2L3 5l3.5 3"
                  stroke="rgba(255,255,255,0.35)"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg>
              </button>
              <button
                type="button"
                tabindex="-1"
                style="width:24px;height:24px;border-radius:5px;background:rgba(255,255,255,0.05);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0.4;"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                ><path
                  d="M3.5 2L7 5l-3.5 3"
                  stroke="rgba(255,255,255,0.35)"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg>
              </button>
            </div>
            <!-- URL bar -->
            <div style="flex:1;display:flex;align-items:center;gap:7px;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:4px 10px;max-width:440px;margin:0 auto;">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                style="flex-shrink:0;"
              >
                <rect
                  x="1.5"
                  y="4.5"
                  width="8"
                  height="6"
                  rx="1"
                  stroke="#28C840"
                  stroke-width="1.1"
                />
                <path
                  d="M3.5 4.5V3.2a2 2 0 014 0v1.3"
                  stroke="#28C840"
                  stroke-width="1.1"
                  stroke-linecap="round"
                />
              </svg>
              <span style="font-size:11px;color:rgba(200,196,240,0.55);font-family:ui-monospace,monospace;letter-spacing:0.01em;flex:1;text-align:center;">app.editus.com.br/dashboard</span>
            </div>
            <!-- Spacer for balance -->
            <div style="width:52px;flex-shrink:0;" />
          </div>
        </div>

        <!-- App shell -->
        <div style="display:flex; height:560px; background:#1A1547;">
          <!-- ══ SIDEBAR ══ -->
          <div style="width:220px; background:#13103A; display:flex; flex-direction:column; flex-shrink:0;">
            <!-- Logo -->
            <div style="padding:16px 16px 14px; border-bottom:1px solid rgba(255,255,255,0.06);flex-shrink:0;">
              <div style="display:flex;align-items:center;gap:9px;">
                <!-- símbolo oficial: /logo-symbol-gradient.svg -->
                <img
                  src="/logo-symbol-gradient.svg"
                  alt=""
                  width="30"
                  height="30"
                  style="flex-shrink:0;"
                >
                <div style="display:flex;flex-direction:column;gap:2px;min-width:0;">
                  <span style="color:white;font-size:15px;font-weight:600;letter-spacing:-0.03em;line-height:1;">edit<span style="color:#B6A8FB;">us</span></span>
                  <span style="font-size:9px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:rgba(155,148,224,0.5);line-height:1;white-space:nowrap;">IA para licitações</span>
                </div>
              </div>
            </div>

            <!-- Nav -->
            <div style="padding:16px 10px;flex:1;overflow:auto;">
              <div style="font-size:9px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.25);padding:0 8px 8px;">
                Principal
              </div>
              <div
                v-for="item in nav.principal"
                :key="item.label"
                style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;font-size:12px;margin-bottom:2px;cursor:pointer;transition:background 0.15s;"
                :style="item.active
                  ? 'background:rgba(100,89,200,0.25);color:white;font-weight:500;'
                  : 'color:rgba(255,255,255,0.4);'"
              >
                <component
                  :is="item.icon"
                  style="flex-shrink:0;display:flex;"
                />
                {{ item.label }}
              </div>

              <div style="font-size:9px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.25);padding:14px 8px 8px;">
                Análise
              </div>
              <div
                v-for="item in nav.analise"
                :key="item.label"
                style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;font-size:12px;margin-bottom:2px;color:rgba(255,255,255,0.4);cursor:pointer;"
              >
                <component
                  :is="item.icon"
                  style="flex-shrink:0;display:flex;"
                />
                {{ item.label }}
              </div>

              <div style="font-size:9px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.25);padding:14px 8px 8px;">
                Conta
              </div>
              <div
                v-for="item in nav.conta"
                :key="item.label"
                style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;font-size:12px;margin-bottom:2px;color:rgba(255,255,255,0.4);cursor:pointer;"
              >
                <component
                  :is="item.icon"
                  style="flex-shrink:0;display:flex;"
                />
                {{ item.label }}
              </div>
            </div>
          </div>

          <!-- ══ MAIN ══ -->
          <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
            <!-- Topbar -->
            <div style="background:#1A1547;padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
              <div>
                <div style="font-size:20px;font-weight:600;color:white;letter-spacing:-0.02em;">
                  Dashboard
                </div>
                <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px;">
                  {{ dataFormatada }}
                </div>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <div style="display:flex;align-items:center;gap:6px;padding:7px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:8px;font-size:12px;color:rgba(255,255,255,0.7);cursor:pointer;">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  ><path
                    d="M6.5 1.5a5 5 0 100 10 5 5 0 000-10zM6.5 4v3M6.5 9v.5"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  /></svg>
                  3 alertas
                </div>
                <div style="display:flex;align-items:center;gap:6px;padding:7px 14px;background:#5A3CE0;border-radius:8px;font-size:12px;color:white;font-weight:500;cursor:pointer;">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  ><path
                    d="M6 1v10M1 6h10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  /></svg>
                  Novo edital
                </div>
                <div style="width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  ><circle
                    cx="3"
                    cy="7"
                    r="1"
                    fill="rgba(255,255,255,0.5)"
                  /><circle
                    cx="7"
                    cy="7"
                    r="1"
                    fill="rgba(255,255,255,0.5)"
                  /><circle
                    cx="11"
                    cy="7"
                    r="1"
                    fill="rgba(255,255,255,0.5)"
                  /></svg>
                </div>
              </div>
            </div>

            <!-- Content area -->
            <div style="flex:1;overflow:auto;padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
              <!-- KPI row -->
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
                <div
                  v-for="kpi in kpis"
                  :key="kpi.label"
                  style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 16px;"
                >
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                    <component
                      :is="kpi.icon"
                      style="display:flex;"
                    />
                    <span style="font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">{{ kpi.label }}</span>
                  </div>
                  <div style="font-size:24px;font-weight:600;color:white;letter-spacing:-0.02em;line-height:1;">
                    {{ kpi.value }}
                  </div>
                  <div style="margin-top:6px;display:flex;align-items:center;gap:4px;">
                    <component
                      :is="kpi.trendIcon"
                      style="display:flex;"
                    />
                    <span
                      style="font-size:10px;"
                      :style="`color:${kpi.trendColor}`"
                    >{{ kpi.trend }}</span>
                  </div>
                </div>
              </div>

              <!-- Bottom row -->
              <div style="display:grid;grid-template-columns:180px 1fr 1fr;gap:12px;flex:1;min-height:0;">
                <!-- Editais recentes -->
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;">
                  <div style="padding:12px 14px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
                    <span style="font-size:12px;font-weight:500;color:white;">Editais recentes</span>
                    <span style="font-size:10px;color:#B6A8FB;cursor:pointer;">Ver todos →</span>
                  </div>
                  <div style="padding:6px 8px;overflow:auto;flex:1;">
                    <div style="font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.25);padding:6px 6px 8px;">
                      Edital
                    </div>
                    <div
                      v-for="(edital, ei) in editais"
                      :key="ei"
                      style="padding:8px 8px;border-radius:8px;margin-bottom:2px;cursor:pointer;"
                      :style="ei === 0 ? 'background:rgba(100,89,200,0.2);' : ''"
                    >
                      <div style="font-size:11px;font-weight:600;color:white;margin-bottom:2px;">
                        {{ edital.numero }}
                      </div>
                      <div style="font-size:10px;color:rgba(255,255,255,0.35);line-height:1.3;">
                        {{ edital.orgao }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Última análise -->
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;">
                  <div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="font-size:12px;font-weight:500;color:white;">Última análise · PE-042/2026</span>
                  </div>
                  <div style="padding:14px 16px;flex:1;">
                    <!-- Rec header -->
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
                      <div style="width:36px;height:36px;background:rgba(29,158,117,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 2a7 7 0 100 14A7 7 0 009 2z"
                            stroke="#1D9E75"
                            stroke-width="1.3"
                          />
                          <path
                            d="M5.5 9l2.5 2.5 4.5-5"
                            stroke="#1D9E75"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div style="font-size:15px;font-weight:600;color:white;">
                          Participar
                        </div>
                        <div style="font-size:10px;color:rgba(255,255,255,0.35);">
                          Prefeitura de Santos · PE-042/2026
                        </div>
                      </div>
                    </div>
                    <!-- Habilitação pill -->
                    <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(29,158,117,0.12);border:1px solid rgba(29,158,117,0.25);border-radius:100px;padding:4px 12px;font-size:11px;font-weight:500;color:#1D9E75;margin-bottom:14px;">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      ><path
                        d="M1.5 5.5l3 3 5-5"
                        stroke="currentColor"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg>
                      Habilitação: apta
                    </div>
                    <!-- Metrics 2x2 -->
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                      <div
                        v-for="m in metrics"
                        :key="m.label"
                        style="background:rgba(255,255,255,0.05);border-radius:8px;padding:10px 12px;"
                      >
                        <div style="font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:4px;">
                          {{ m.label }}
                        </div>
                        <div
                          style="font-size:15px;font-weight:600;"
                          :style="`color:${m.color}`"
                        >
                          {{ m.value }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Agentes IA -->
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;">
                  <div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
                    <span style="font-size:12px;font-weight:500;color:white;">Agentes IA</span>
                    <span style="font-size:10px;padding:2px 8px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:100px;color:rgba(255,255,255,0.5);">5 em execução</span>
                  </div>
                  <div style="flex:1;overflow:auto;">
                    <div
                      v-for="agent in agents"
                      :key="agent.name"
                      style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.04);"
                    >
                      <span
                        style="width:7px;height:7px;border-radius:50%;flex-shrink:0;"
                        :style="`background:${agent.dot};`"
                      />
                      <span style="font-size:12px;font-weight:500;color:white;flex:1;">{{ agent.name }}</span>
                      <span
                        style="font-size:11px;"
                        :style="`color:${agent.color}`"
                      >{{ agent.status }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        class="text-center text-sm mt-6"
        style="color:rgba(30,22,84,0.35);"
      >
        O trabalho pesado é da IA. A decisão final é sempre sua.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// ── Ícones da nav (currentColor, 14×14) ────────────────────────────────────
const s = (w: number, children: ReturnType<typeof h>[]) =>
  defineComponent(() => () => h('svg', { width: w, height: w, viewBox: `0 0 ${w} ${w}`, fill: 'none' }, children))

const IcoDashboard = s(14, [
  h('rect', { 'x': 1, 'y': 1, 'width': 5, 'height': 5, 'rx': 1.2, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('rect', { 'x': 8, 'y': 1, 'width': 5, 'height': 5, 'rx': 1.2, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('rect', { 'x': 1, 'y': 8, 'width': 5, 'height': 5, 'rx': 1.2, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('rect', { 'x': 8, 'y': 8, 'width': 5, 'height': 5, 'rx': 1.2, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
])
const IcoFile = s(14, [
  h('path', { 'd': 'M2 1.5h6l4 4v7a1 1 0 01-1 1H2a1 1 0 01-1-1V2.5a1 1 0 011-1z', 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M8 1.5v4h4', 'stroke': 'currentColor', 'stroke-width': 1.1 }),
])
const IcoAgent = s(14, [
  h('rect', { 'x': 3.5, 'y': 1, 'width': 7, 'height': 7, 'rx': 2, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M1.5 12c0-2 1.5-3 5-3s5 1 5 3', 'stroke': 'currentColor', 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoDoc = s(14, [
  h('path', { 'd': 'M2 2h10v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2z', 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M4.5 5.5h5M4.5 7.5h3', 'stroke': 'currentColor', 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoShield = s(14, [
  h('path', { 'd': 'M7 1.5L2 4v4c0 2.5 2 4.5 5 5.5 3-1 5-3 5-5.5V4L7 1.5z', 'stroke': 'currentColor', 'stroke-width': 1.1 }),
])
const IcoCoin = s(14, [
  h('path', { 'd': 'M7 1v12M4 4h4.5a2 2 0 010 4H4M4 8h5a2 2 0 010 4H4', 'stroke': 'currentColor', 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoClock = s(14, [
  h('circle', { 'cx': 7, 'cy': 7, 'r': 5.5, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M7 4v3.5l2.5 1.5', 'stroke': 'currentColor', 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoBriefcase = s(14, [
  h('rect', { 'x': 1.5, 'y': 3, 'width': 11, 'height': 9.5, 'rx': 1, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M4.5 3V2a1 1 0 012 0v1M7.5 3V2a1 1 0 012 0v1', 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M4.5 7.5h5M4.5 9.5h3', 'stroke': 'currentColor', 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoGear = s(14, [
  h('circle', { 'cx': 7, 'cy': 7, 'r': 2, 'stroke': 'currentColor', 'stroke-width': 1.1 }),
  h('path', { 'd': 'M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1M3.1 3.1l.7.7M10.2 10.2l.7.7M3.1 10.9l.7-.7M10.2 3.8l.7-.7', 'stroke': 'currentColor', 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])

// ── Ícones dos KPIs (cor fixa, 13×13) ─────────────────────────────────────
const muted = 'rgba(155,148,224,0.6)'
const IcoKpiFile = s(13, [
  h('path', { 'd': 'M2 1.5h5.5l3.5 3.5V11a1 1 0 01-1 1H2a1 1 0 01-1-1V2.5a1 1 0 011-1z', 'stroke': muted, 'stroke-width': 1.1 }),
  h('path', { 'd': 'M7.5 1.5v3.5H11', 'stroke': muted, 'stroke-width': 1.1 }),
])
const IcoKpiTrophy = s(13, [
  h('path', { 'd': 'M3 2h7v5a3.5 3.5 0 01-7 0V2z', 'stroke': muted, 'stroke-width': 1.1 }),
  h('path', { 'd': 'M3 4H1.5M10 4h1.5M6.5 9.5v2M4.5 11.5h4', 'stroke': muted, 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoKpiCoin = s(13, [
  h('path', { 'd': 'M6.5 1.5v10M4 4h4a1.5 1.5 0 010 3H4M4 7h4.5a1.5 1.5 0 010 3H4', 'stroke': muted, 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])
const IcoKpiClock = s(13, [
  h('circle', { 'cx': 6.5, 'cy': 7, 'r': 5, 'stroke': muted, 'stroke-width': 1.1 }),
  h('path', { 'd': 'M6.5 4.5V7l2 1', 'stroke': muted, 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
  h('path', { 'd': 'M5 1.5h3', 'stroke': muted, 'stroke-width': 1.1, 'stroke-linecap': 'round' }),
])

// Trend icons
const IcoTrendUp = (color: string) => defineComponent(() => () => h('svg', { width: 11, height: 11, viewBox: '0 0 11 11', fill: 'none' }, [
  h('path', { 'd': 'M2 8L5.5 4.5 8 7 10 5', 'stroke': color, 'stroke-width': 1.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
]))
const IcoTrendDown = (color: string) => defineComponent(() => () => h('svg', { width: 11, height: 11, viewBox: '0 0 11 11', fill: 'none' }, [
  h('path', { 'd': 'M2 4L5.5 7.5 8 5 10 7', 'stroke': color, 'stroke-width': 1.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
]))

// ──────────────────────────────────────────────────────────────────────────

const dataFormatada = ref('')
onMounted(() => {
  dataFormatada.value = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).replace(/^\w/, c => c.toUpperCase())
})

const nav = {
  principal: [
    { label: 'Dashboard', active: true, icon: IcoDashboard },
    { label: 'Editais', active: false, icon: IcoFile },
    { label: 'Agentes IA', active: false, icon: IcoAgent },
    { label: 'Propostas', active: false, icon: IcoDoc },
  ],
  analise: [
    { label: 'Compliance', icon: IcoShield },
    { label: 'Precificação', icon: IcoCoin },
    { label: 'Monitoramento', icon: IcoClock },
  ],
  conta: [
    { label: 'Empresa', icon: IcoBriefcase },
    { label: 'Configurações', icon: IcoGear },
  ],
}

const kpis = [
  { label: 'Editais analisados', value: '24', icon: IcoKpiFile, trend: '+6 este mês', trendColor: '#EF9F27', trendIcon: IcoTrendUp('#EF9F27') },
  { label: 'Taxa de vitória', value: '38%', icon: IcoKpiTrophy, trend: '+12% vs. média PME', trendColor: '#1D9E75', trendIcon: IcoTrendUp('#1D9E75') },
  { label: 'Economia projetada', value: 'R$ 42k', icon: IcoKpiCoin, trend: 'Custo financeiro evitado', trendColor: '#1D9E75', trendIcon: IcoTrendUp('#1D9E75') },
  { label: 'Tempo médio análise', value: '2min', icon: IcoKpiClock, trend: 'vs. 3–5 dias manual', trendColor: '#EF9F27', trendIcon: IcoTrendDown('#EF9F27') },
]

const editais = [
  { numero: 'PE-042/2026', orgao: 'Prefeitura de Santos · SP' },
  { numero: 'CC-017/2026', orgao: 'Estado do RJ · Secretaria de Saúde' },
  { numero: 'TP-008/2026', orgao: 'DNIT · Brasília · DF' },
  { numero: 'PE-091/2026', orgao: 'Prefeitura de Campinas · SP' },
]

const metrics = [
  { label: 'Compliance', value: '87/100', color: '#1D9E75' },
  { label: 'Custo financeiro', value: 'R$ 9.881', color: 'white' },
  { label: 'Risco', value: 'Médio', color: '#EF9F27' },
  { label: 'Impedimentos', value: 'Limpo', color: '#1D9E75' },
]

const agents = [
  { name: 'Leitor', status: '2 min atrás', dot: '#1D9E75', color: 'rgba(255,255,255,0.4)' },
  { name: 'Habilitador', status: 'OK · 14/14', dot: '#1D9E75', color: 'rgba(255,255,255,0.4)' },
  { name: 'Precificador', status: 'Viável', dot: '#1D9E75', color: 'rgba(255,255,255,0.4)' },
  { name: 'Compliance', status: '2 alertas', dot: '#EF9F27', color: '#EF9F27' },
  { name: 'Impedimentos', status: 'Limpo', dot: '#1D9E75', color: 'rgba(255,255,255,0.4)' },
]
</script>
