<template>
  <div id="aboutsection-container" class="pt-6 columns is-variable is-5 is-centered">
    <div id="lefunny" class="is-one-quarter-mobile is-full-mobile is-centered">
      <img src="/img/cat-jumping.gif" alt="cat jumping gif">
    </div>

    <div id="aboutme-container" class="is-three-quarters-desktop is-full-mobile">
      <div id="articles">
        <article class="message">
          <div class="message-header">
            <p>Qui suis-je?</p>
          </div>
          <div class="message-body">
            <p>
              Actuellement en 3e année de BUT Informatique (parcours RACDV), j'étudie le développement web
              tout en appliquant mes connaissances en alternance.
            </p>
            <p>
              Je suis polyvalent et m'adapte facilement à de nombreuses technologies.
              Je possède des compétences en développement de sites web full-stack (HTML, CSS, PHP, JavaScript et quelques un de ses frameworks comme React et VueJS).
            </p>
          </div>
        </article>

        <article class="message">
          <div class="message-header">
            <p>Projet d'avenir</p>
          </div>
          <div class="message-body">
            A terme, je souhaite principalement intégrer le monde du travail directement après mon BUT,
            mais je pourrais également intégrer une école d'ingénieur pour compléter mes études
            si l'occasion et les conditions se présentent.
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

@media (max-width: 1024px) {
  #lefunny {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
}
</style>

<script setup lang="ts">

</script>
