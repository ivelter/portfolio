import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ProjectsPreview from '@/views/ProjectsPreview.vue'
import PortfolioIUT from '@/views/PortfolioIUT.vue'

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
  ]
})

export default router
