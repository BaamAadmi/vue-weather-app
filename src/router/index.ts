import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import CityDetailView from '../features/city/city-detail/CityDetailView.vue';
import CityListView from '../features/city/city-list/CityListView.vue';
import ProfileDetail from '../features/profile/ProfileDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CityList',
    component: CityListView
  },
  {
    path: '/city/:id',
    name: 'CityDetail',
    component: CityDetailView
  },
  {
    path: '/profile',
    name: 'ProfileDetail',
    component: ProfileDetail
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router