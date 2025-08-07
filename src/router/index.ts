import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import CityListComponent from '../features/city/city-list/CityListComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CityList',
    component: CityListComponent,
  },
  {
    path: '/city/:id',
    name: 'CityDetail',
    component: () => import('../features/city/city-detail/CityDetailComponent.vue'),
  },
  {
    path: '/profile',
    name: 'ProfileDetail',
    component: () => import('../features/profile/ProfileDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
