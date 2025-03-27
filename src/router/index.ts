import { createRouter, createWebHistory } from 'vue-router'
import ExempleView from '../views/ExempleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ExempleView,
    },
  ],
})

export default router
