import { createRouter, createWebHistory } from 'vue-router'
import DonorsView from '../views/DonorsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'donors',
      component: DonorsView
    },
    {
      path: '/donations',
      name: 'donations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DonationsView.vue')
    },
    {
      path: '/causes',
      name: 'causes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CausesView.vue')
    },
    {
      path: '/expenses',
      name: 'expenses',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExpensesView.vue')
    }
  ]
})

export default router
