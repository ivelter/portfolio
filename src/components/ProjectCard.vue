<script setup lang="ts">
import type { Project } from '@/types.ts'
import router from '@/router'

//const props = defineProps<{project: Project}>();
defineProps<{project: Project}>()
</script>

<template>
  <div @click="router.push(project.route)" class="card cursor-hover project-{{ project.type }}">
    <div class="card-image">
      <figure class="image is-3">
        <img
          v-if="project.imageSource"
          :src="`/img/projects/${ project.imageSource }`"
          :alt="project.imageAlt"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ project.title }}</p>
          <p class="subtitle is-6">{{ project.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cursor-hover {
  cursor: pointer;
}
</style>
