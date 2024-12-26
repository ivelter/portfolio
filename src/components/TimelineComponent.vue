<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { TimelineType } from '@/types.ts';

const props = defineProps<{ title: string }>();
const timeline = ref<TimelineType | null>(null);

onMounted(async () => {
  try {
    const response = await fetch(`assets/json/timelines/${props.title}.json`);
    if (!response.ok) {
      console.error(`Failed to load JSON: ${response.statusText}`);
    }
    timeline.value = await response.json();
  } catch (error) {
    console.error('Error loading timeline:', error);
  }
});
</script>

<template>
  <div v-if="timeline" class="timeline">
    <!-- Start Header -->
    <header v-if="timeline.start" class="timeline-header">
      <span class="tag is-medium is-primary">{{ timeline.start.description }}</span>
    </header>

    <!-- Timeline Content -->
    <template v-for="(entry, index) in timeline.content" :key="index">
      <!-- Header -->
      <header v-if="entry.type === 'header'" class="timeline-header">
        <span class="tag is-primary">{{ entry.header?.description }}</span>
      </header>

      <!-- Items -->
      <div v-else-if="entry.type === 'items'" v-for="(item, itemIndex) in entry.items" :key="itemIndex" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">{{ item.date }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </template>

    <!-- End Header -->
    <header v-if="timeline.end" class="timeline-header">
      <span class="tag is-medium is-primary">{{ timeline.end.description }}</span>
    </header>
  </div>

  <!-- Loading or Error -->
  <div v-else>
    <progress class="progress is-small is-primary" max="100"></progress>
  </div>
</template>
