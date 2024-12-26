<script setup lang="ts">
import TimelineEducation from '@/components/TimelineEducation.vue'
</script>

<template>
  <section class="hero is-fullheight fullwidth">
    <div class="hero-body">
      <div class="">
        <p class="title">Portfolio</p>
        <p class="subtitle">Bienvenue sur mon portfolio</p>
      </div>
    </div>
  </section>

  <div class="fullwidth">
    <TimelineEducation />
  </div>
</template>

<style scoped>
.fullwidth {
  width: 100%;
  min-width: 10vw;
}
</style>
