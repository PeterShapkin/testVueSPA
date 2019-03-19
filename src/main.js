import Vue from 'vue'
import App from './App.vue'
import model from './assets/model.json'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

(function (){
	if(!localStorage['appMapData']){
		
	  	localStorage['appMapData'] = '{}'; 

	  	const appMapData = JSON.parse(localStorage['appMapData']);

	  	appMapData.autho = {username:'test', password:'test', enter: false}; 

	  	appMapData.workModel = model; 

	  	//добавляем данные точек ещё раз, недоступные для редактирования, - для выполнения сброса изменений; 
	  	appMapData.baseModel = model; 

	  	appMapData.workModel.forEach(function(item){ 
			item.x = item.x*10;
			item.y = item.y*10;
			})

	  	localStorage['appMapData'] = JSON.stringify(appMapData);
	  }
})();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
   			  