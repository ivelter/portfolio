<template>
  <div id="aboutsection-container" class="pt-6 columns is-multiline is-variable is-5 is-centered">
    <div id="lefunny" class="is-one-third-desktop is-full-mobile">
      <img src="/img/cat-jumping.gif" alt="cat jumping gif">
    </div>

    <div id="aboutme-container" class="is-two-thirds-desktop is-full-mobile">
      <div id="articles">
        <article class="message">
          <div class="message-header">
            <p>Qui suis-je?</p>
          </div>
          <div class="message-body">
            Actuellement en 3e année de BUT Informatique, j'étudie le développement web
            tout en appliquant mes connaissances en alternance.
          </div>
        </article>

        <article class="message">
          <div class="message-header">
            <p>Projet d'avenir</p>
          </div>
          <div class="message-body">
            todo
          </div>
        </article>
      </div>

      <div class="buttons mt-6">
        <a href="" class="button is-link is-medium">
          <span class="icon is-small pl-3 pr-5">
            <i class="fas fa-download"></i>
          </span>
          Télécharger mon CV
        </a>
      </div>

      <div class="jump-button-container">
        <button class="jump-button" @click="$emit('nextSection')">
          ↓
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#aboutme-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#articles {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#articles > article {
  width: 100%;
}
</style>

<script setup lang="ts">

</script>
