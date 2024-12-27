<script setup lang="ts">
import type { AccordionItem } from '@/types.ts'

defineProps<{items: AccordionItem[]}>();
</script>

<template>
  <div class="accordion-container">
    <div v-for="(item, index) in items" :key="index" class="accordion pb-4">
      <details class="box is-shadowless">
        <summary class="is-clickable is-size-5 has-text-weight-semibold">
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
.accordion summary {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--accordion-summary-bg);
  color: var(--accordion-summary-color);
}

.accordion details[open] summary {
  background-color: var(--accordion-summary-bg-open);
}

.accordion details summary:hover {
  background-color: var(--accordion-summary-bg-hover);
}

.accordion details .content {
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--accordion-border-color);
  color: var(--accordion-content-color);
}
</style>
