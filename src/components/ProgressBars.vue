<script setup lang="ts">
import type { ProgressBarItem } from '@/types.ts'

defineProps<{ items: ProgressBarItem[] }>()
</script>

<template>
  <div class="progress-container pb-5">
    <div v-for="(item, index) in items" :key="index" class="progress-item pb-2">
      <p>{{ item.name }}</p>
      <progress class="progress is-link" :value="item.percentage" max="100">
        {{ item.percentage }}%
      </progress>
    </div>
  </div>
</template>

<style scoped>
.progress-container p {
  color: var(--primary-text-color);
}
</style>
