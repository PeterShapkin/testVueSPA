import Vue from 'vue'
import Router from 'vue-router'
import Autho from './components/Autho.vue'
import Map from './components/Map.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/autho' 
    },
    {
      path: '/autho',
      component: Autho
    },
    {
      path: '/map',
      component: Map,
      beforeEnter: (to, from, next) => { 
          const appMapData = JSON.parse(localStorage['appMapData']); 
          if (appMapData.autho.enter === true){ 
          next();
        } 
        else {
          next('/autho');
        }
      }

    }
  ]
})
