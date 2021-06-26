import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup Page',
    component: () => import(/* webpackChunkName: "signup" */ '../views/signup.vue')
  },
  {
    path: '/login',
    name: 'Login Page',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/kviz_1',
    name: 'Kviz 1',
    component: () => import(/* webpackChunkName: "kviz_1" */ '../views/kviz_1.vue')
  },
  {
    path: '/kviz_formula_1',
    name: 'kviz_formula_1',
    component: () => import(/* webpackChunkName: "kviz_1" */ '../views/kviz_formula_1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
