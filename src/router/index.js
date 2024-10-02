import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import Contacts from '../pages/Contacts.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import ProjectByType from '@/pages/ProjectByType.vue';
import ProjectByTechnologies from '@/pages/ProjectByTechnologies.vue';
import Error404 from '@/pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/progetto-per-tipo/:slug',
      name: 'projectByType',
      component: ProjectByType
    },
    {
      path: '/progetto-per-tecnologia/:slug',
      name: 'projectByTechnologies',
      component: ProjectByTechnologies
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '404'
    },
  ]
})

export default router
