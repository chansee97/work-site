import { createRouter, createWebHistory } from 'vue-router';
const routes = [

  { path: '/', component: () => import('@/view/home/index.vue') },
  { path: '/about', component: () => import('@/view/about/index.vue') }
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})