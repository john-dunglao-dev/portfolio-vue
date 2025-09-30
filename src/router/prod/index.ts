import type { RouteRecordRaw } from "vue-router";


export default <RouteRecordRaw[]>[
  {
    path: '',
    name: 'Landing',
    component: () => import('@/views/LandingView.vue'),
  }
];