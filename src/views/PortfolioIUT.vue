<script setup lang="ts">
</script>
<template>
  <div id="portfolio-iut">
    <p class="title mt-6">Portfolio d'apprentissage</p>
    <p class="note">
      Note: les titres <span class="clickable">soulignés</span> indiquent qu'une
      trace est disponible pour la mission, et il suffit alors de
      cliquer sur le titre pour y accéder.
    </p>

    <p class="title mt-6">Réaliser</p>
    <p class="subtitle">Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)</p>
    <p class="mission">
      Stage/Alternance: Développement de fonctionnalités selon des besoins client
    </p>
    <p>
      Cette section sera complétée avec sa page dédiée une fois complétée.
    </p>
    <p>
      <span class="apprentissage">
        Apprentissages critiques du référentiel: AC2 "Faire évoluer une application existante" et
        AC2 "Intégrer des solutions dans un environnement de production" du niveau 3 de l'UE "Réaliser"
      </span>
    </p>

    <p class="title mt-6">Optimiser</p>
    <p class="subtitle">Analyser et optimiser des applications</p>
    <p class="mission clickable" @click="$router.push({name: 'project_eventmanager'})">
      Projet Web: EventManager
    </p>
    <p>
      Pendant le 5e semestre du BUT Informatique,
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
      Ces choix de conception, visant des résultats optimisés, illustrent l’apprentissage critique
      <span class="apprentissage">
        AC3 "Choisir et utiliser des bibliothèques et méthodes dédiées
        au domaine d’application",
        au niveau 3 de l’UE "Optimiser" du référentiel du BUT Informatique.
      </span>
    </p>

    <p class="title mt-6">Collaborer</p>
    <p class="subtitle">Manager une équipe informatique</p>
    <p class="mission clickable"><a target="_blank" href="https://docs.google.com/presentation/d/17J9Gv48Qu_qCwv4onBCfGkTFiTCaqf9JqixTYDKQ2XY/edit?usp=sharing">
      Travail de veille informationnelle en groupe
    </a></p>
    <p>
      Dans le cadre du cours de Communication du semestre 5 du BUT, et ce tout au long du semestre,
      j'ai effectué, en groupe avec 3 autres personnes,
      une veille informationnelle active sur deux thématiques, dont une liée au numérique.
      Nous avons choisi d’explorer les sujets suivants:
      "Intelligence artificielle: aube d’un nouvel outil ou véritable menace pour l’humanité?"
      et "La place des femmes dans le sport/la compétition".
      Pour mener à bien cette veille, nous avons utilisé des outils
      comme Google Alerts, Zotero et Feedly,
      qui ont permis d’affiner notre recherche et de présenter une analyse complète
      au sein de notre groupe.
      Cette activité s’inscrit dans l'apprentissage critique
      <span class="apprentissage">
        AC1 "Organiser et partager une veille numérique",
        correspondant au niveau 3 de l'UE "Collaborer"
        du référentiel.
      </span>
    </p>
  </div>
</template>

<style scoped>
#portfolio-iut {
  width: 80%;
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

.title, .subtitle, .mission, p, a {
  color: var(--primary-text-color);
}

.title, .subtitle, .mission {
  margin: 0 25% 0 25%;
  text-align: center;
}

a, p {
  text-align: justify;
}

.clickable {
  cursor: pointer;
  text-decoration: underline;
}

.apprentissage {
  font-weight: bold;
}

.note {
  text-align: center;
  margin: 0 25% 0 25%;
}

@media (max-width: 1024px) {
  #portfolio-iut {
    margin: 0 10px 0 10px;
  }

  .title, .subtitle, .mission, .note {
    margin: 0;
  }
}
</style>
