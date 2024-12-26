<script setup lang="ts">
</script>

<template>
  <div id="timeline-container">
    <div class="timeline">
      <div class="outer">
        <div class="card">
          <div class="info">
            <h3 class="title">Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">Title 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">Title 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">Title 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div class="">-->
<!--    <header class="timeline-header">-->
<!--      <span class="tag is-medium is-primary">2025</span>-->
<!--    </header>-->

<!--    <div class="timeline-item">-->
<!--      <div class="timeline-marker"></div>-->
<!--      <div class="timeline-content">-->
<!--        <p class="heading">2024 - 2025</p>-->
<!--        <p>BUT Informatique 3e année - Parcours RACDV</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="timeline-item">-->
<!--      <div class="timeline-marker"></div>-->
<!--      <div class="timeline-content">-->
<!--        <p class="heading">Juillet 2024 - Aout 2025</p>-->
<!--        <p>Alternance développement web</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="timeline-item">-->
<!--      <div class="timeline-marker"></div>-->
<!--      <div class="timeline-content">-->
<!--        <p class="heading">Avril 2024 - Juin 2024</p>-->
<!--        <p>Stage développement web</p>-->
<!--      </div>-->
<!--    </div>-->


<!--    <header class="timeline-header">-->
<!--      <span class="tag is-medium is-primary">2024</span>-->
<!--    </header>-->

<!--    <div class="timeline-item">-->
<!--      <div class="timeline-marker"></div>-->
<!--      <div class="timeline-content">-->
<!--        <p class="heading">2023 - 2024</p>-->
<!--        <p>BUT Informatique 2e année - Parcours RACDV</p>-->
<!--      </div>-->
<!--    </div>-->


<!--    <header class="timeline-header">-->
<!--      <span class="tag is-medium is-primary">2023</span>-->
<!--    </header>-->

<!--    <div class="timeline-item">-->
<!--      <div class="timeline-marker"></div>-->
<!--      <div class="timeline-content">-->
<!--        <p class="heading">2022 - 2023</p>-->
<!--        <p>BUT Informatique 1e année</p>-->
<!--      </div>-->
<!--    </div>-->


<!--    <header class="timeline-header">-->
<!--      <span class="tag is-medium is-primary">2022</span>-->
<!--    </header>-->

<!--    <div class="timeline-item">-->
<!--      <div class="timeline-marker"></div>-->
<!--      <div class="timeline-content">-->
<!--        <p class="heading">2019 - 2022</p>-->
<!--        <p>Baccalauréat Général (Spécialités NSI/AMC)</p>-->
<!--      </div>-->
<!--    </div>-->


<!--    <div class="timeline-header">-->
<!--      <span class="tag is-medium is-primary">2019</span>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped>
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
  border-left: 2px solid #333;
}

/* Card container */
.card {
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  background: #003830;
  color: #05f3d0;
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
  color: white;
  position: relative;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 999px;
  left: -35px;
  border: 3px solid #003830;
}
</style>
