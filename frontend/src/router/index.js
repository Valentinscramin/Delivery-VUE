import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Pedidos from '../views/pedidos/Pedidos.vue'
import Login from '../views/auth/Login.vue'

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
    component: Login
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
