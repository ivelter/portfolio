<script setup lang="ts">
</script>
<template>
  <!--
  Est-ce que c'est complet? Non.
  Est-ce c'est parce ce que la date de rendu a été avancée d'un mois avec un préavis de 4j? Oui.
  -->

  <div id="portfolio-iut">
    <p class="title mt-6">
      Portfolio d'apprentissage
    </p>
    <p class="note">
      Note: les titres <span class="clickable">soulignés</span> indiquent qu'une trace est disponible pour la mission,
      et il suffit alors de cliquer sur le titre pour y accéder.
    </p>



    <p class="title mt-6">Réaliser</p>
    <p class="subtitle">
      Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)
    </p>
    <p class="mission">
      Stage/Alternance: Développement de fonctionnalités selon des besoins client
    </p>
    <p>
      Mon alternance depuis juillet 2024 m'a permis de mettre en application les enseignements
      reçus lors de la formation à l'IUT.
      En effet, dans le cadre de nombreux projets, en vue de demandes de clients ou dans le cadre de
      la réalisation de projets internes, j'ai pu mettre en oeuvre une bonne partie des connaissances
      que j'ai acquises.
      En tant que seul développeur des projets sur lesquels on m'assignait, j'ai ainsi pu mettre en
      oeuvre des applications web et mobile à destination du grand public, mais également des outils
      en interne permettant des processus de SI plus simples et rapides, et des outils permettant de
      mettre en place des fonctionnalités "génériques" sur les sites web livrés aux clients,
      comme un moteur de recherche en interne.
    </p>
    <p>
      <span class="apprentissage">
        Apprentissages critiques du référentiel: AC2 "Faire évoluer une application existante"
        et AC2 "Intégrer des solutions dans un environnement de production" du niveau 3 de l'UE "Réaliser"
      </span>
    </p>



    <p class="title mt-6">Optimiser</p>
    <p class="subtitle">
      Analyser et optimiser des applications
    </p>
    <p class="mission clickable" @click="$router.push({name: 'project_eventmanager'})">
      Projet Web: EventManager
    </p>
    <p>
      Pendant le 5e semestre du BUT Informatique, il nous a été demandé de développer, en groupe,
      une application web de gestion d’évènements, permettant aux utilisateurs de s’inscrire,
      de se connecter, de modifier leurs informations personnelles, et d'interagir
      avec différents évènements (s'inscrire/se désinscrire/voir les détails...).
      Ce projet nous a offert une première expérience dans le développement d’applications web
      en utilisant des technologies et frameworks adaptés, comme Symfony et APIPlatform,
      qui ont grandement facilité la mise en place de l'API, et VueJS, qui a permis
      une navigation moderne et dynamique.
      Ces choix de conception, visant des résultats optimisés, illustrent l’apprentissage critique
      <span class="apprentissage">
        AC3 "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application"
      </span>
      au niveau 3 de l’UE "Optimiser" du référentiel.
    </p>
    <p class="mission">
      Projet Algorithmique: Moteur de recommandations de films en Scala
    </p>
    <p>
      Réalisé au 6e semestre, ce projet de data science visait à développer un
      moteur de recommandations en utilisant le langage Scala.
      En combinant des techniques de filtrage collaboratif et l’analyse de données,
      le système propose des suggestions personnalisées aux utilisateurs.
      Ce projet a permis de renforcer mes compétences en programmation fonctionnelle
      et en optimisation d’algorithmes, contribuant ainsi aux acquis suivants:
      <ul>
        <li class="apprentissage">AC2 – Profiler, analyser et justifier le comportement d’un code existant</li>
        <li class="apprentissage">AC3 – Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application</li>
      </ul>
    </p>
    <p class="mission">
      Mini projet de virtualisation Docker
    </p>
    <p>
      Dans le cadre d’un travail de groupe au 5e semestre, nous avons mis en place une
      infrastructure de services conteneurisés avec Docker.
      Le projet intégrait le déploiement d’un cluster de services avec Traefik
      en tant que reverse proxy et l’utilisation de Grafana pour le suivi des logs,
      le tout automatisé par des scripts bash.
      Cette expérience a permis d’acquérir une approche pratique de l’optimisation des déploiements,
      en lien avec
      <span class="apprentissage">
        l’AC3 "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application"
      </span>
      et l’optimisation de l’infrastructure.
    </p>
    <p class="mission">
      Mini projets de qualité de développement
    </p>
    <p>
      Au cours du semestre 5, divers mini projets ont été réalisés dans le cadre
      du cours de qualité de développement.
      Ces projets ont porté sur l’implémentation de tests unitaires,
      la configuration d’environnements d’intégration continue et la mise en place de revues de code.
      Ces initiatives visent à assurer la robustesse, la maintenabilité et la performance des applications,
      illustrant ainsi les compétences en Optimiser, notamment via
      <span class="apprentissage">
        l’AC2 et l’AC3.
      </span>
    </p>



    <p class="title mt-6">Collaborer</p>
    <p class="subtitle">
      Manager une équipe informatique
    </p>
    <p class="mission clickable">
      <a target="_blank" href="https://docs.google.com/presentation/d/17J9Gv48Qu_qCwv4onBCfGkTFiTCaqf9JqixTYDKQ2XY/edit?usp=sharing">
        Travail de veille informationnelle en groupe
      </a>
    </p>
    <p>
      Dans le cadre du cours de Communication du semestre 5 du BUT, et ce tout au long du semestre,
      j'ai effectué, en groupe avec 3 autres personnes, une veille informationnelle active
      sur deux thématiques, dont une liée au numérique.
      Nous avons choisi d’explorer les sujets suivants :
      "Intelligence artificielle: aube d’un nouvel outil ou véritable menace pour l’humanité?"
      et "La place des femmes dans le sport/la compétition".
      Pour mener à bien cette veille, nous avons utilisé des outils comme Google Alerts, Zotero et Feedly,
      qui ont permis d’affiner notre recherche et de présenter une analyse complète au sein du groupe.
      Cette activité s’inscrit dans l'apprentissage critique
      <span class="apprentissage">
        AC1 "Organiser et partager une veille numérique"
      </span>
      correspondant au niveau 3 de l'UE "Collaborer" du référentiel.
    </p>

    <p class="mission">
      Compléments – Collaboration et management
    </p>
    <p>
      Par ailleurs, au-delà de la veille informationnelle, j’ai participé à de nombreux projets
      de management en mode agile depuis la 2e année,
      où la communication, la coordination et la répartition des tâches étaient essentielles.
      Cette expérience a renforcé mes compétences dans l’intégration d’un projet dans le système
      d’information global et dans l’adaptation des processus organisationnels, attestant ainsi des
      acquis suivants:
      <ul>
        <li class="apprentissage">AC2 – Savoir intégrer un projet informatique dans le système d’information d’une organisation</li>
        <li class="apprentissage">AC3 – Savoir adapter un système d’information</li>
        <li class="apprentissage">AC4 – Accompagner le management de projet informatique</li>
      </ul>
    </p>
  </div>
</template>

<style scoped>
#portfolio-iut {
  width: 80%;
}

.subtitle, .mission {
  padding: 5px 0;
}

.subtitle {
  font-size: 1.6rem;
}

.mission {
  font-size: 1.3rem;
}

.title, .subtitle, .mission, p, a, li {
  color: var(--primary-text-color);
}

.title, .subtitle, .mission {
  margin: 0 25%;
  text-align: center;
}

a, p {
  text-align: justify;
  white-space: pre-line;
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
  margin: 0 25%;
}

@media (max-width: 1024px) {
  #portfolio-iut {
    margin: 0 10px;
  }
  .title, .subtitle, .mission, .note {
    margin: 0;
  }
}
</style>
