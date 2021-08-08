import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "about" */ '../views/Characters.vue')
  },
  {
    path: '/weapons',
    name: 'Weapons',
    component: () => import(/* webpackChunkName: "about" */ '../views/Weapons.vue')
  },
  {
    path: '/artifacts',
    name: 'Artifacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artifacts.vue')
  },
  {
    path: '/calc',
    name: 'Calc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calc.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
