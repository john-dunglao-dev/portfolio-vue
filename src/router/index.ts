import routes from '@dynamicRoute'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layouts/VMain.vue'),
      children: routes,
    },
  ],
})

export default router
