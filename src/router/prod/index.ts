import type { RouteRecordRaw } from "vue-router";


export default <RouteRecordRaw[]>[
  {
    path: '',
    name: 'Landing',
    component: () => import('@/views/LandingView.vue'),
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: () => import('@/views/AboutMeView.vue'),
  },
  {
    path: '/contact-me',
    name: 'ContactMe',
    component: () => import('@/views/ContactMeView.vue'),
  },
];