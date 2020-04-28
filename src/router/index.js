import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Home from '../components/pages/home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/text-operation',
    name: 'PAGE-01-01',
    meta: {
      isPublic: true
    },
    component: () => import('../components/pages/text-operation/Index.vue')
  },
  {
    path: '/api-get',
    name: 'PAGE-02-01',
    meta: {
      isPublic: true
    },
    component: () => import('../components/pages/api-get/Index.vue')
  },
  {
    path: '/vuex-store',
    name: 'PAGE-03-01',
    meta: {
      isPublic: true
    },
    component: () => import('../components/pages/vuex-store/Index.vue')
  },
  {
    path: '/login',
    name: 'PAGE-04-01',
    meta: {
      isPublic: true
    },
    component: () => import('../components/pages/user-info/Login.vue')
  },
  {
    path: '/user-info',
    name: 'PAGE-04-02',
    component: () => import('../components/pages/user-info/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 必要な画面に対するログインチェックを実施
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !store.getters.isLogin) next({ name: 'PAGE-04-01' })
  else next()
})

export default router
