<script setup lang="ts">
import ProgressBars from '@/components/ProgressBars.vue'
import type { ProgressBarItem } from '@/types.ts'

const skills: ProgressBarItem[] = [
  {
    name: "PHP / Symfony",
    percentage: 85
  },
  {
    name: "JavaScript",
    percentage: 85
  },
  {
    name: "VueJS",
    percentage: 75
  },
  {
    name: "Java",
    percentage: 80
  },
  {
    name: "SQL (My/Postgre/Oracle)",
    percentage: 85
  },
  {
    name: "Mongo DB",
    percentage: 70
  },
  {
    name: "Git",
    percentage: 85
  },
  {
    name: "CSS et frameworks (Sass, Bulma, Tailwind, Bootstrap)",
    percentage: 80
  },
  {
    name: "Web design (Figma)",
    percentage: 65
  },
];
</script>


<template>
  <div id="skill-container" class="pt-6 columns is-variable is-5 is-centered">
    <div id="aboutme-container" class="is-three-quarters-desktop is-full-mobile">
      <h1 class="title">Compétences</h1>
      <ProgressBars :items="skills" />

      <div class="jump-button-container">
        <button class="jump-button" @click="$emit('nextSection')">
          ↓
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#skill-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h1 {
  text-align: center;
  color: var(--primary-text-color);
}
</style>

