import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'

const routes = [
  {
    path: '/',
    name: '홈',
    component: HomeView
  },
  {
    path: '/about',
    name: '소개',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/work',
    name: '노동',
    component: WorkView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
