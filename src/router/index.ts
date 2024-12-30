import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ProjectsPreview from '@/views/ProjectsPreview.vue'
import PortfolioIUT from '@/views/PortfolioIUT.vue'
import Project_EventManager from '@/views/projects/Project_EventManager.vue'
import Project_TrelloTrolle from '@/views/projects/Project_TrelloTrolle.vue'
import Project_CGJ2024 from '@/views/projects/Project_CGJ2024.vue'
import Project_Etustage from '@/views/projects/Project_Etustage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'home'},
    },
    {
      path: '/home',
      name: 'home',
      component: MainPage
    },
    {
      path: '/portfolio-iut',
      name: 'portfolio-iut',
      component: PortfolioIUT
    },

    {
      path: '/projets',
      name: 'projets',
      component: ProjectsPreview
    },
    {
      path: '/projets/eventmanager',
      name: 'project_eventmanager',
      component: Project_EventManager
    },
    {
      path: '/projets/trellotrolle',
      name: 'project_trellotrolle',
      component: Project_TrelloTrolle
    },
    {
      path: '/projets/cgj2024',
      name: 'project_cgj2024',
      component: Project_CGJ2024
    },
    {
      path: '/projets/etustage',
      name: 'project_etustage',
      component: Project_Etustage
    },
  ]
})

export default router
