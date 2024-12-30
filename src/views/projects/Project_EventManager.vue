<script setup lang="ts">
import { type AccordionItem, Competences } from '@/types.ts'
import AccordionSection from '@/components/AccordionSection.vue'

const competences: AccordionItem[] = [
  {
    category: Competences.realiser,
    summary: 'Compétence 1 - Réaliser',
    details:
      'Ce projet remplit les niveaux 2 et 3 de cette compétence. ' +
      "En effet, avec l'ensemble de mon groupe, nous avons développé une application complète et fonctionnelle " +
      'à partir des exigences données dans les consignes, et cette application est disponible sous plusieurs formats ' +
      "(API pour les développeurs, et une interface web). L'application est conçue de telle sorte à ce qu'on peut imaginer " +
      "d'autres supports sur lesquels la porter, notamment un support applicatif mobile (via une application native ou un framework comme React Native).",
  },
  {
    category: Competences.collaborer,
    summary: 'Compétence 6 - Collaborer',
    details:
      "Le travail étant réalisé en équipe, il a fallu s'organiser, " +
      "d'autant plus que les contraintes de temps pour réaliser le projet étaient courtes. " +
      "Avec l'accord du groupe, j'ai rapidement pris des décisions afin d'être le mieux organisé possible, " +
      'en priorisant notamment certaines tâches, comme la conception et réalisation des "entités" évènement et utilisateur, ' +
      'dont tout le reste du projet dépendait. ' +
      "J'estime donc avoir validé les niveaux 2 et 3 de cette compétence."
  },
]
</script>

<template>
  <div class="project-container is-fullwidth-mobile">
    <h1 class="title mt-6">Event Manager (Projet Web A3)</h1>
    <div class="project-content columns is-multiline is-variable is-5">
      <!-- Accordion Section -->
      <div class="column is-one-third-desktop is-full-mobile">
        <AccordionSection :items="competences" />
      </div>
      <!-- Text Section -->
      <div class="column is-two-thirds-desktop is-full-mobile has-text-justified">
        <p class="subtitle">Présentation du projet</p>
        <p>
          Ce projet a été réalisé dans le cadre des cours de programmation avancée (frameworks web),
          en 3e année de BUT (au 5e semestre).
        </p>
        <p>
          Le travail a été réalisé en équipe de 3, et en 3 parties. Cette présentation porte sur les deux
          dernières parties.
        </p>

        <p class="subtitle mt-3">API de gestion d'utilisateurs et d'évènements</p>
        <p>
          La première partie consistait à développer une API en utilisant le module API Platform de
          Symfony. Cette API permet de créer son compte, de se connecter, et de s'inscrire/se
          désinscrire à des évènements.
        </p>
        <p>
          Il est également possible pour les administrateurs de promouvoir certains utilisateurs en
          tant qu'organisateur et administrateur. Ces utilisateurs pourront ensuite effectuer des
          actions qui leur sont propres (créer/modifier/supprimer des évènements et des
          utilisateurs, respectivement).
        </p>
        <p>
          Le tout est automatiquement stocké dans une base de données quelconque à l'aide de
          Doctrine.
        </p>

        <p class="subtitle mt-3">Application web liée à l'API</p>
        <p>
          La troisième et dernière partie consistait à créer un site web en utilisant le framework
          VueJS, connecté à l'API réalisée précédemment et permettant à un utilisateur d'interagir
          avec l'API via le site.
        </p>
        <p>
          Pour cette partie, j'ai notamment porté mon attention sur la présentation du site, en
          utilisant le framework CSS Bulma pour simplifier la réalisation du style du site. (C'est
          également le framework que j'utilise pour ce site portfolio.)
        </p>
        <p>
          J'ai également réalisé une partie des interactions avec l'API, notamment la connexion, la
          déconnexion, et l'inscription, et tout ce qui touche à la récupération et l'affichage des
          données (évènements à venir/en cours, utilisateurs inscrits à ces évènements...)
        </p>
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
