import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Formularios from '../views/Formularios.vue'
import EtsView from '../views/EtsView.vue'
import MetoAnticonceptivoView from '../views/MetoAnticonceptivoView.vue'
import aprender from '../views/aprender.vue'
import contactos from '../views/contactos.vue'
import formulario_aprender from '../views/formulario_aprender.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formularios',
    name: 'Formularios',
    component: Formularios
  },
  {
    path: '/ets',
    name: 'ETS',
    component: EtsView
  },
  {
    path: '/metodos-anticonceptivos',
    name: 'Metodos-Anticonceptovos',
    component: MetoAnticonceptivoView
  },
  {
    path: '/aprender',
    name: 'aprender',
    component: aprender
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: contactos
  },
  {
    path: '/formulario-aprender',
    name: 'formulario_aprender',
    component: formulario_aprender
  },
]

const router = new VueRouter({
  routes
})

export default router
