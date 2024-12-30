<script setup lang="ts">
</script>

<template>
  <div id="timeline-title">
    <h1 class="title">Parcours de formation</h1>
  </div>
  <div id="timeline-container">
    <div class="timeline">
      <div class="outer">
        <div class="card">
          <div class="info">
            <h3 class="title">2024 - 2025</h3>
            <p>BUT Informatique 3e année (Parcours RADCV)<br>Alternance en développement web PHP</p>
          </div>
        </div>

        <div class="card">
          <div class="info">
            <h3 class="title">2023 - 2024</h3>
            <p>BUT Informatique 2e année (Parcours RADCV)<br>Stage en développement web PHP</p>
          </div>
        </div>

        <div class="card">
          <div class="info">
            <h3 class="title">2022 - 2023</h3>
            <p>BUT Informatique 1e année</p>
          </div>
        </div>

        <div class="card">
          <div class="info">
            <h3 class="title">2022</h3>
            <p>Baccalauréat général | Spécialités NSI/AMC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#timeline-title h1 {
  text-align: center;
  color: var(--primary-text-color);
}

#timeline-container {
  display: flex;
  justify-content: center;
}

/* Timeline Container */
.timeline {
  margin: 20px auto;
  padding: 20px;
}

/* Outer Layer with the timeline border */
.outer {
  border-left: 2px solid var(--accordion-summary-bg);
}

/* Card container */
.card {
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  background: var(--accordion-summary-bg);
  color: var(--primary-text-color);
  border-radius: 8px;
  max-width: 400px;
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Title of the card */
.title {
  color: var(--primary-text-color);
  position: relative;
  margin-bottom: 0;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--primary-text-color);
  border-radius: 999px;
  left: -35px;
  border: 3px solid var(--accordion-summary-bg);
}
</style>
