<script setup lang="ts">
import TimelineEducation from '@/components/TimelineEducation.vue'
import AboutMe from '@/components/AboutMe.vue'
import SkillsSection from '@/components/SkillsSection.vue'

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
      <div class="content-container">
        <p class="title">👋</p>
        <p class="subtitle">Ilan, développeur en développement</p>
      </div>

      <div class="jump-button-container">
        <button class="jump-button" @click="scrollToSection('about')">
          ↓
        </button>
      </div>
    </div>
  </section>

  <section class="hero is-fullheight fullwidth">
    <div class="hero-body">
      <div id="about" class="fullwidth pt-6">
        <AboutMe @nextSection="scrollToSection('skills')" />
      </div>
    </div>
  </section>

  <section class="hero is-fullheight fullwidth">
    <div class="hero-body">
      <div id="skills" class="fullwidth pt-6">
        <SkillsSection @nextSection="scrollToSection('timeline')" />
      </div>
    </div>
  </section>

  <div id="timeline" class="fullwidth pt-6">
    <TimelineEducation />
  </div>
</template>

<style scoped>
.fullwidth {
  width: 100%;
  min-width: 10vw;
}
</style>
