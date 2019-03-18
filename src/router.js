import Vue from 'vue'
import Router from 'vue-router'
import Autho from './components/Autho.vue'
import Map from './components/Map.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/autho',
      component: Autho
    },
    {
      path: '/map',
      component: Map
    }
  ]
})
