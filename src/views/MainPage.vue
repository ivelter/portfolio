<script setup lang="ts">
import TimelineEducation from '@/components/TimelineEducation.vue'

function scrollToSection(section: string) {
  const nextSection = document.getElementById(section);
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <section class="hero is-fullheight fullwidth">
    <div class="hero-body">
      <div>
        <p class="title">Portfolio</p>
        <p class="subtitle">Bienvenue sur mon portfolio</p>
      </div>

      <div class="jump-button-container">
        <button class="jump-button" @click="scrollToSection('timeline-edu')">
          ↓
        </button>
      </div>
    </div>
  </section>

  <div id="timeline-edu" class="fullwidth pt-6">
    <TimelineEducation />
  </div>
</template>

<style scoped>
.fullwidth {
  width: 100%;
  min-width: 10vw;
}

.jump-button-container {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.jump-button {
  background-color: #3273dc;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.jump-button:hover {
  background-color: #275aa8;
  transform: scale(1.1) rotate(15deg);
}
</style>
