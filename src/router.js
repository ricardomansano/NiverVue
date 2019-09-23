import Vue from 'vue'

// [*SPA] No Vue os componentes podem ser "preparados"
//        para uso aqui (staticamente) ou via => import (dinamicamente)
import Home from './views/Home.vue'

// [*Router: JS principal] Componentes do roteamento
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  // [*Router] Componentes para rotear
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/niver',
      name: 'niver',
      component: () => import('./views/Nivers.vue') // [*SPA] "Preparados" dinamicamente, no momento da carga
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: () => import('./views/Hooks.vue')
    }
  ]
})
