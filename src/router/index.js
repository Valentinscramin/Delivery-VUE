import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Pedidos from '../views/pedidos/Pedidos.vue'
import Auth from '../views/auth/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  },
  {
    path: '/login',
    name: 'login',
    component: Auth
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
