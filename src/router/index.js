import { createRouter, createWebHistory } from 'vue-router'
import VoorraadView from '../views/voorraadView.vue'
import boekingenView from '../views/boekingenView.vue'
import scannerView from '../views/scannerView.vue'
import notificatiesView from '../views/notificatiesView.vue'
import instellingenView from '../views/instellingenView.vue'
import addproductView from '../views/addProductView.vue'

const routes = [
  {
    path: '/',
    name: 'Voorraad',
    component: VoorraadView
  },
  {
    path: '/boekingen',
    name: 'boekingen',
    component: boekingenView,
  },
  {
    path: '/scanner',
    name: 'scanner',
    component: scannerView,
  },
  {
    path: '/notificaties',
    name: 'notificaties',
    component: notificatiesView,
  },
  {
    path: '/instellingen',
    name: 'instellingen',
    component: instellingenView,
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: addproductView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
