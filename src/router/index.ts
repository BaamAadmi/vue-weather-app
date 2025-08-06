import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import CityDetailComponent from '../features/city/city-detail/CityDetailComponent.vue';
import CityListComponent from '../features/city/city-list/CityListComponent.vue';
import ProfileDetail from '../features/profile/ProfileDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CityList',
    component: CityListComponent,
  },
  {
    path: '/city/:id',
    name: 'CityDetail',
    component: CityDetailComponent,
  },
  {
    path: '/profile',
    name: 'ProfileDetail',
    component: ProfileDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
