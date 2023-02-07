import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  { path: '/', component: () => import('@/view/home/index.vue') },
  { path: '/about', component: () => import('@/view/about/index.vue') },
  { path: '/protfolio', component: () => import('@/view/protfolio/index.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/view/notFound/index.vue') }
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})