<script setup lang="ts">
import { type AccordionItem, Competences } from '@/types.ts'
import AccordionSection from '@/components/AccordionSection.vue'

const competences: AccordionItem[] = [
  {
    category: Competences.realiser,
    summary: 'AC2 - Faire évoluer une application existante',
    details:
      "Le principal aspect de cette SAE était le refactoring de l'application. " +
      "En effet, en plus " +
      "d'avoir amélioré l'architecture du code et les algorithmes utilisés, nous avons avant tout " +
      "analysé l'entièreté du code et ses failles, le tout organisé dans un rapport."
  },
  {
    category: Competences.realiser,
    summary: 'AC3 - Intégrer des solutions dans un environnement de production',
    details:
      "Pour ce projet, j'ai également réalisé une configuration Docker, permettant de déployer " +
      "l'application et ses dépendances, et ce simplement."
  },
  {
    category: Competences.optimiser,
    summary: "AC2 - Profiler, analyser et justifier le comportement d'un code existant",
    details:
      "La première partie de cette SAE consistait à réaliser une analyse technique du code existant, " +
      "en justifiant des éventuelles failles, incompréhensions et fautes de comportement trouvées, le tout " +
      "consigné dans un rapport technique."
  },
  {
    category: Competences.gerer,
    summary: 'Compétence 4 - Gérer une BDD',
    details:
      "Une composante majeure de ce projet était la normalisation de la base de données, " +
      "jusqu'alors stockée dans une seule table. Il a ainsi fallu réaliser une preuve pour prouver " +
      "que notre nouvelle solution gardait l'intégrité des dépendances et des données. " +
      "J'estime donc que cela valide le niveau 2 de la compétence."
  },
  {
    category: Competences.collaborer,
    summary: 'Compétence 6 - Collaborer',
    details:
      "Le travail étant réalisé en équipe, il a fallu s'organiser, " +
      "d'autant plus que les contraintes de temps pour réaliser la SAE étaient courtes. " +
      "Avec l'accord du groupe, j'ai rapidement pris des décisions afin d'être le mieux organisé possible, " +
      'en priorisant notamment certaines tâches, comme la refactorisation en services et l\'utilisation de Twig, ' +
      'dont une majorité du reste du projet dépendait. ' +
      "J'estime donc avoir validé le niveau 2 de cette compétence.",
  },
]
</script>

<template>
  <div class="project-container is-fullwidth-mobile">
    <h1 class="title mt-6">Trello-Trollé (SAE S4)</h1>
    <div class="project-content columns is-multiline is-variable is-5">
      <!-- Accordion Section -->
      <div class="column is-one-third-desktop is-full-mobile">
        <AccordionSection :items="competences" />
      </div>
      <!-- Text Section -->
      <div class="column is-two-thirds-desktop is-full-mobile has-text-justified">
        <p class="subtitle">Présentation du projet</p>
        <p>
          Cette SAE a été réalisée dans le cadre des cours de
          2e année de BUT (au 4e semestre). Le travail a été réalisé en équipe de 3, et en 2 parties.
        </p>
        <p>
          Pour ce projet, une base de code en PHP nous était donnée. Cependant,
          ce code était très mal optimisé, utilisait une base de données comportant
          de nombreuses redondances (les données de l'application étaient stockées dans une seule table),
          et comportait de nombreuses failles de sécurité.
        </p>
        <p>
          Ce projet consistait en une première partie où nous avons réalisé un rapport technique
          listant tous les points à corriger et proposant une version normalisée de
          la base de données, puis une deuxième partie où nous avons appliqué tous ces correctifs.
        </p>

        <p class="subtitle mt-3">Analyse technique et rapport</p>
        <p>
          Lors de la première partie, nous avons donc réalisé un rapport de tous les points à corriger.
        </p>
        <p>
          Ce rapport technique contenait, en plus des points problématiques, d'éventuelles solutions
          pour régler ces problèmes, et une preuve de normalisation de la base de données.
        </p>

        <p class="subtitle mt-3">Refactoring de l'application</p>
        <p>
          La deuxième partie consistait donc à appliquer les correctifs listés dans le rapport.
          Plusieurs points ont été corrigés, notamment:
        </p>
        <ul>
          <li> - L'architecture du code (MVC ➡️ MVCS)</li>
          <li> - La base de données</li>
          <li> - De nombreuses failles de sécurité (manque de vérifications de privilèges...)</li>
        </ul>

        <p>
          J'ai également réalisé une configuration Docker permettant de déployer plus facilement le projet.
        </p>
        <p>
          Enfin, nous avons implémenté des fonctionnalités additionnelles, comme le drag-and-drop des cartes.
        </p>
        <p>
          <b>
            Trace:
            <a href="/doc/rapport-trellotrolle.pdf" target="_blank">
              Rapport technique
            </a>
          </b>
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
