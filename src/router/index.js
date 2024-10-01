import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import Contacts from '../pages/Contacts.vue';

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
  ]
})

export default router
