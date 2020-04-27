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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
