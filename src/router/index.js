import { createRouter, createWebHistory } from 'vue-router';
import layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: layout,
    redirect: 'home',
    children:
      [{ path: 'home', component: () => import('@/view/home/index.vue') },
      { path: 'about', component: () => import('@/view/about/index.vue') },
      { path: 'portfolio', component: () => import('@/view/protfolio/index.vue') },
      { path: 'detail', component: () => import('@/view/detail/index.vue') },
      ]
  }, { path: '/:pathMatch(.*)*', component: () => import('@/view/notFound/index.vue') }

]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})