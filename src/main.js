import Vue from 'vue'
import App from './App.vue'
import model from './assets/model.json'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

(function (){
	if(!localStorage['appMapData']){
	  	localStorage['appMapData'] = '[]';
	  	const appMapData = JSON.parse(localStorage['appMapData']);

	  	appMapData.push({username:'test', password:'test'});
	  	appMapData.push(model);
	  	appMapData.push(model);

	  	appMapData[1].forEach(function(item){
			item.x = item.x*10;
			item.y = item.y*10;
			})
	  	
	  	localStorage['appMapData'] = JSON.stringify(appMapData);
	  }
	  else {(console.log('no'))}
})();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
   			  