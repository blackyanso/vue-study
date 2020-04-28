import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/text-operation',
    name: 'PAGE-01-01',
    component: () => import('../components/pages/text-operation/Index.vue')
  },
  {
    path: '/api-get',
    name: 'PAGE-02-01',
    component: () => import('../components/pages/api-get/Index.vue')
  },
  {
    path: '/vuex-store',
    name: 'PAGE-03-01',
    component: () => import('../components/pages/vuex-store/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
