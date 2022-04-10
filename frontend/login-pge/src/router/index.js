import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
