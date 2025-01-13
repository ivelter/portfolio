<script setup lang="ts">
</script>
<template>
  <div id="portfolio-iut">
    <p class="title mt-6">Portfolio d'apprentissage</p>

    <p class="title mt-6">Réaliser</p>
    <p class="subtitle">Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)</p>
    <p class="subtitle">Développement de fonctionnalités selon des besoins client</p>
    <p>
      Apprentissages critiques: AC2 "Faire évoluer une application existante" et
      AC2 "Intégrer des solutions dans un environnement de production" du niveau 3 de l'UE "Réaliser"
    </p>

    <p class="title mt-6">Optimiser</p>
    <p class="subtitle">Analyser et optimiser des applications</p>
    <p class="mission clickable" @click="$router.push({name: 'project_eventmanager'})">Projet Web: EventManager</p>
    <p>
      Au début du 5e semestre du BUT Informatique,
      il nous a été demandé de développer, en groupe, une application web de
      gestion d’événements, permettant aux utilisateurs de s’inscrire,
      de se connecter, de modifier leurs informations personnelles, et d'interagir
      avec différents évènements (s'inscrire/se désinscrire/voir les détails...).
      Ce projet nous a offert une première expérience dans le développement
      d’applications web en utilisant des technologies et frameworks adaptés,
      comme Symfony et APIPlatform, qui ont grandement facilité la mise en place de l'API
      utilisée par l'application web, et VueJS, un framework front-end
      qui a facilité la mise en place d’un routeur permettant une navigation
      moderne et dynamique au sein de l’application.
      J'ai également pour ma part découvert et utilisé pour la première fois le framework CSS Bulma,
      qui m'a grandement facilité la tâche de réaliser une UI optimisée et responsive.
      Ces choix de conception, visant des résultats optimisés, illustrent l’apprentissage critique
      AC3 "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application (imagerie, immersion, intelligence artificielle, jeux vidéo, parallélisme, calcul formel…)",
      au niveau 3 de l’UE "Optimiser" du référentiel du BUT Informatique.
    </p>

    <p class="title mt-6">Collaborer</p>
    <p class="subtitle">Manager une équipe informatique</p>
    <p class="mission">Travail de veille informationnelle en groupe</p>
    <p>Dans le cadre du cours de Communication du semestre 5 du BUT
      j'ai effectué, en groupe avec 3 autres personnes,
      une veille informationnelle sur deux thématiques, dont une liée au numérique.
      Nous avons choisi d’explorer les sujets suivants:
      "L’intelligence artificielle : incroyable outil ou véritable danger ?"
      et "La place des femmes au sein des compétitions sportives".
      Pour mener à bien cette veille, nous avons utilisé des outils
      comme Google Alerts, Zotero et Feedly,
      qui ont permis d’affiner notre recherche et de présenter une analyse complète
      au sein de notre groupe.
      Cette activité s’inscrit parfaitement dans l'apprentissage critique
      AC1 "Organiser et partager une veille numérique",
      correspondant au niveau 3 de l'UE "Collaborer"
      du référentiel du BUT Informatique.
    </p>
  </div>
</template>

<style scoped>
#portfolio-iut {
  width: 80%;
}

@media (max-width: 1024px) {
  #portfolio-iut {
    margin: 0 10px 0 10px;
  }
}

.subtitle, .mission {
  padding: 5px 0 5px 0;
}

.subtitle {
  font-size: 1.6rem;
}

.mission {
  font-size: 1.3rem;
}

.title, .subtitle, .mission, p {
  color: var(--primary-text-color);
}

.title, .subtitle, .mission {
  text-align: center;
}

.clickable {
  cursor: pointer;
  text-decoration: underline;
}
</style>
