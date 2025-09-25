import { createRouter, createWebHistory } from 'vue-router'
import routes from '@dynamicRoute';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: routes,
    },
  ],
})

export default router
