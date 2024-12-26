<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { type Project, ProjectTypes } from '@/types.ts'
import router from '@/router'

const projects: Project[] = [
  {
    title: 'EventManager',
    subtitle: "API et site de gestion d'évènements",
    type: ProjectTypes.sae,
    route: "/projets/eventmanager",
    imageSource: "eventmanager/logo.png",
    imageAlt: "logo event manager"
  },
]
</script>

<template>
  <div class="container">
    <h1 class="title mt-6">Tous les projets</h1>
    <div id="grid-container" class="fixed-grid has-1-cols-mobile has-4-cols-desktop">
      <div class="grid">

        <div @click="router.push('/projects/eventmanager')" class="card cursor-hover project-sae">
          <div class="card-image">
            <figure class="image is-3 m-6">
              <img
                src="/img/projects/eventmanager/logo.png"
                alt="event manager logo"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">EventManager</p>
                <p class="subtitle is-6">API et site de gestion d'évènements</p>
              </div>
            </div>
          </div>
        </div>

        <div @click="router.push('/projects/trellotrolle')" class="card cursor-hover project-sae">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                src="/img/projects/trellotrolle/logo.png"
                alt="trello trollé logo"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Trello-Trollé</p>
                <p class="subtitle is-6">Remaniement d'un clone de Trello</p>
              </div>
            </div>
          </div>
        </div>

        <div @click="router.push('/projects/cgj2024')" class="card cursor-hover project-gamejam">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                src="/img/projects/cgj/banner.png"
                alt="cgj banner"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">CGJ 2024</p>
                <p class="subtitle is-6">Code Game Jam</p>
              </div>
            </div>
          </div>
        </div>

        <div @click="router.push('/projects/etustage')" class="card cursor-hover project-sae">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                src="/img/projects/etustage/banner.png"
                alt="etustage logo"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Etu-Stage</p>
                <p class="subtitle is-6">Application web de gestion des stages</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.card {
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease
}

.card:hover {
  transform: translateY(-10px); /* Moves the container up by 10px */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
}
</style>
