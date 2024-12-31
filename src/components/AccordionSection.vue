<script setup lang="ts">
import type { AccordionItem } from '@/types.ts'

defineProps<{items: AccordionItem[]}>();
</script>

<template>
  <div class="accordion-container">
    <div v-for="(item, index) in items" :key="index" class="accordion pb-4">
      <details class="box is-shadowless">
        <summary class="is-clickable is-size-5 has-text-weight-semibold" :class="'cat' + item.category">
          {{ item.summary }}
        </summary>
        <div class="content mt-2">
          {{ item.details }}
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  --comp_realiser: #B21D21;
  --comp_optimiser: #ED8846;
  --comp_administrer: #ED8846;
  --comp_gerer: #87C546;
  --comp_conduire: #051B44;
  --comp_collaborer: #051B44;
}

.accordion .cat0 {
  background: var(--comp_realiser);
  color: white;
}

.accordion .cat1 {
  background: var(--comp_optimiser);
  color: black;
}

.accordion .cat2 {
  background: var(--comp_administrer);
  color: black;
}

.accordion .cat3 {
  background: var(--comp_gerer);
  color: black;
}

.accordion .cat4 {
  background: var(--comp_conduire);
  color: white;
}

.accordion .cat5 {
  background: var(--comp_collaborer);
  color: white;
}

.accordion summary {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--accordion-summary-bg);
  color: var(--accordion-summary-color);
}

.accordion details[open] summary {
  background-color: var(--accordion-summary-bg-open);
  color: var(--primary-text-color);
}

.accordion details summary:hover {
  background-color: var(--accordion-summary-bg-hover);
  color: var(--primary-text-color);
}

.accordion details .content {
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--accordion-border-color);
  color: var(--accordion-content-color);
}
</style>
