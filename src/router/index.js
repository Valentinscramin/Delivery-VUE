import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Pedidos from '../views/pedidos/Pedidos.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
