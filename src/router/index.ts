import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name:'Register',
    component: () => import('@/views/Register.vue')
  },
   {
    path: '/login',
    name:'Login',
    component: () => import('@/views/Login.vue')
  }/*,
  {
    path: '/connect',
    name:'Connect',
    component: () => import('@/views/Connect.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
