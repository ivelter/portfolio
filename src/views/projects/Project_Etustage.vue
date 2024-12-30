<script setup lang="ts">
import { type AccordionItem, Competences } from '@/types.ts'
import AccordionSection from '@/components/AccordionSection.vue'

const competences: AccordionItem[] = [
  {
    category: Competences.optimiser,
    summary: 'Compétence 1 - Réaliser',
    details:
      "Niveaux 1 et 2: " +
      "Il a fallu concevoir et réaliser l'ensemble de l'application à partir " +
      "des contraintes données au fur et à mesure par le client."
  },
  {
    category: Competences.conduire,
    summary: 'Compétence 5 - Conduire',
    details:
      "Niveaux 1 et 2: " +
      "Il a fallu respecter au mieux les besoins du client."
  },
  {
    category: Competences.collaborer,
    summary: 'Compétence 6 - Collaborer',
    details:
      "Niveaux 1 et 2: " +
      "L'organisation du projet s'est fait avec un product owner et un scrum master " +
      "désignés. Les tâches étaient répartis avec l'accord de l'ensemble du groupe, et " +
      "ces dernières étaient organisés avec des outils tels que GitLab et Trello."
  },
]
</script>

<template>
  <div class="project-container is-fullwidth-mobile">
    <h1 class="title mt-6">Etu-sTAGE, le système de gestion des stages et alternances de l'IUT de Montpellier-Sète</h1>
    <div class="project-content columns is-multiline is-variable is-5">
      <!-- Accordion Section -->
      <div class="column is-one-third-desktop is-full-mobile">
        <AccordionSection :items="competences" />
      </div>
      <!-- Text Section -->
      <div class="column is-two-thirds-desktop is-full-mobile has-text-justified">
        <p>
          Ce projet a été réalisé dans le cadre de la SAE du semestre 3 de ma formation de BUT Informatique, en l'espace
          d'environ 3 mois.
        </p>
        <p>
          Il consistait en la création, de toute pièce, d'une application web visant à remplacer le système déjà en place
          de gestion des stages et alternances de l'IUT. Il permet ainsi aux élèves de gérer leur démarches, qui peuvent être administrées
          par les différents personnels comme les responsables de stage et le secrétariat. Enfin, les entreprises concernées par les stages
          et alternances des étudiants peuvent également utiliser la plateforme.
        </p>
        <p>
          Ce projet a été réalisé dans le cadre d'une organisation en gestion agile. Ainsi, nous devions rendre compte de notre
          progression toutes les 3 semaines environ, ce qui donnait un aspect dynamique et un feedback constant à notre travail.
        </p>
        <p>
          Pour ce projet, j'ai été amené à travailler sur de nombreux points. Tout d'abord, sur la planification et l'organisation
          (en tant que <i>scrum master</i>), mais également sur le design de certaines des pages du site. J'ai également pu travailler sur
          quelques aspects en front-end (en HTML, CSS et JS), et principalement sur la partie back-end côté serveur du site, avec notamment
          PHP et une base de données MariaDB.
        </p>
        <img src="/img/projects/etustage/figma-mobile.png" alt="figma mobile">
        <img src="/img/projects/etustage/figma-dashboard.png" alt="figma dashboard">
        <img src="/img/projects/etustage/figma-convention.png" alt="figma convention">
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  padding: 1.5rem;
  width: 80%;
}

@media (max-width: 1024px) {
  .project-container {
    width: 100%;
  }
}

.project-content {
  margin-top: 1.5rem;
}

.project-container h1 {
  text-align: center;
}

.project-container h1,
.project-container h2,
.project-container p,
.project-container ul {
  color: var(--primary-text-color);
}

.subtitle {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
