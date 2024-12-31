<script setup lang="ts">
import { type AccordionItem, Competences } from '@/types.ts'
import AccordionSection from '@/components/AccordionSection.vue'

const competences: AccordionItem[] = [
  {
    category: Competences.optimiser,
    summary: 'Compétence 1 - Réaliser',
    details:
      "Avec l'ensemble de mon groupe, nous avons réalisé l'entièreté du jeu, " +
      "de sa conception à sa programmation, sur un thème donné."
  },
  {
    category: Competences.collaborer,
    summary: 'Compétence 6 - Collaborer',
    details:
      "Le travail étant réalisé en équipe, il a fallu s'organiser, " +
      "d'autant plus que les contraintes de temps pour réaliser le projet étaient courtes. " +
      "Avec l'accord du groupe, j'ai rapidement pris des décisions afin d'être le mieux organisé possible, " +
      'en organisant la priorisation des tâches à réaliser, comme le code du mouvement du joueur, ' +
      'dont une majorité du reste du projet dépendait. ' +
      "J'estime donc avoir validé le niveau 2 de cette compétence.",
  },
]
</script>

<template>
  <div class="project-container is-fullwidth-mobile">
    <h1 class="title mt-6">Fallen Tale (CGJ 2024)</h1>
    <div class="project-content columns is-multiline is-variable is-5">
      <!-- Accordion Section -->
      <div class="column is-one-third-desktop is-full-mobile">
        <AccordionSection :items="competences" />
      </div>
      <!-- Text Section -->
      <div class="column is-two-thirds-desktop is-full-mobile has-text-justified">
        <p class="subtitle">Présentation du projet</p>
        <p>
          Ce jeu a été réalisé dans le cadre de la Code Game Jam 2024.
          J'ai, avec mon équipe de 6 personnes, réalisé ce jeu en partant de zéro,
          en environ 30 heures, sur le thème "Légende éthérée".
        </p>
        <p>
          Vous pouvez retrouver le projet
          <a href="https://brichoco.itch.io/fallentale" target="_blank">
            ici.
          </a>
        </p>

        <p class="subtitle mt-3">Réalisation du projet</p>
        <p>
          Nous avons programmé le jeu avec le moteur open-source
          <a href="https://godotengine.org/" target="_blank">
            Godot.
          </a>
        </p>
        <p>
          Pour mener à bien le projet, nous avons également utilisé d'autres outils,
          tels que
          <a href="https://github.com/ivelter/cgj2024" target="_blank">
            GitHub
          </a>
          et Trello.
        </p>

        <p class="subtitle mt-3">Finalité du projet</p>
        <p>
          Bien que nous n'ayons pas remporté le premier prix, notre jeu faisait
          partie des sélections du jury.
        </p>

        <iframe class="pt-5" width="560" height="315" src="https://www.youtube-nocookie.com/embed/LCAFtoAHAB0?si=Dxm3PGo3Zezsw1j4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
