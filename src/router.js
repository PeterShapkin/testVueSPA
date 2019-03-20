import Vue from 'vue'
import Router from 'vue-router'
import Autho from './components/Autho.vue'
import Map from './components/Map.vue'
import store from './store'

Vue.use(Router)

 const router = new Router({
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
      meta: {
        auth: true
      }
    }
  ]
});
  router.beforeEach((to, from, next) => {
      const appMapData = JSON.parse(localStorage['appMapData']);

      if(to.matched.some(record => record.meta.auth)){
        if (appMapData.autho.enter === true){
          next();
        } 
        else { next('/') }
      }
      else {
        appMapData.autho.enter = false;
        localStorage['appMapData'] = JSON.stringify(appMapData);
        next()
      }
    })

export default router
