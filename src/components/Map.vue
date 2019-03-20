<template>
	<div>
		<Viewer
			:mark='mark'
			/>
		<NewPoint/>
		<svg id='map' v-on:mousemove='mapCoords'>
 			<Mark
 				v-on:sentMark='keepMark' 
 				v-for='i in getMarks'
				:name='i.name'	
				:x='i.x'
				:y='i.y' 
 				/>
 		</svg>

 		<button class='logOut' v-on:click='toAutho'>Выйти</button>
 		<button class='reset' v-on:click='resetMap'>Сбросить</button>

 		<div class='coords'>
 			<input ref='coordX'>
 			<input ref='coordY'>
 		</div>
 			
 	</div>
</template>

<script>
import model from '../assets/model.json'
import router from '../router'
import Mark from './Mark.vue'
import Viewer from './Viewer.vue'
import NewPoint from './NewPoint.vue'

export default {
	data(){
		return {
			mark: null
		}
	},
	computed:{
		getMarks(){
			return this.$store.state.marks;
		}
	},
	components:{
		Mark,
		Viewer,
		NewPoint
	},
	methods:{
		keepMark(data){
			this.mark = Object.assign({}, data); //делаем объект this.mark независимым от store.viewData 
		},
		mapCoords(event){
    		const x = event.offsetX; 
    		const y = event.offsetY; 
   			this.$refs.coordX.value = 'x:' + x; 
   			this.$refs.coordY.value = 'y:' + y;
		},		
		toAutho(){
			router.replace('/');
		},
		resetMap(){
			const appMapData = JSON.parse(localStorage['appMapData']);
			appMapData.workModel = appMapData.baseModel;
			this.$store.commit('SET_marks', appMapData.baseModel); 
			this.$store.commit('SET_viewData', {name:null,amount:null,x:null,y:null}); 
			localStorage['appMapData'] = JSON.stringify(appMapData);
		}
	},
  	created: function(){
				const appMapData = JSON.parse(localStorage['appMapData']);
				this.$store.commit('SET_marks', appMapData.workModel); 
			},
}
</script>

<style scoped>
#map{
	position: absolute;
	background: url(../assets/map.svg) no-repeat;
	left: 25%;
	width: 1000.12px;
	height: 999.75px;
}
.logOut{
	right: 150px;
	top: 100px;
}
.reset{	
	left: 150px;
	top: 500px;
}
button{
	position: fixed;
	border-radius:15px;
	color: lightgoldenrodyellow;
	background-color: orange;
	font:  bold 15px  sans-serif;
	width: 100px;
	height: 50px;
}
.coords{
	display: flex;
	flex-direction: column;
	align-items: center;
	
	position: fixed;
	height: 200px;
	width: 150px;
	top:300px;
	right: 120px;

	border: 3px solid orange;
	border-radius:15px;
}
input{
	border: none;
	height: 100px;
	width: 120px;
	font:   50px serif ; 
}
</style>