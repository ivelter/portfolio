<script setup lang="ts">

import TimelineComponent from '@/components/TimelineComponent.vue'
</script>

<template>
  <section class="hero is-danger is-fullheight">
    <div class="hero-body">
      <div class="">
        <p class="title">Fullheight hero</p>
        <p class="subtitle">Fullheight subtitle</p>
      </div>
    </div>
  </section>

  <div>
    <TimelineComponent title="education" class="fullwidth" />
  </div>
</template>

<style scoped>
.fullwidth {
  width: 100%;
}
</style>
