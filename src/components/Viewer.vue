<template>
	<div class='viewer'>
<!-- ------------------------------------------------------------------------------ -->
		<div class='wrapper'>
		 	<ul>
				<li>Место:</li>
				<li>Количество товара:</li>
				<li>Координата X:</li>
				<li>Координата Y:</li>
			</ul>
			<ul>
				<li v-show='!isEdited'>{{name}}</li><li v-show='isEdited'><input v-model='name'></li>
				<li v-show='!isEdited'>{{amount}}</li><li v-show='isEdited'><input v-model='amount'></li>
				<li v-show='!isEdited'>{{x}}</li><li v-show='isEdited'><input v-model='x'></li>
				<li v-show='!isEdited'>{{y}}</li><li v-show='isEdited'><input v-model='y'></li>
			</ul>
		</div>
<!-- ------------------------------------------------------------------------------ -->
		<div class='viewerTune'>
			<button v-show='isEdited' v-on:click='saveChangesToLS'>Сохранить</button>
			<button v-show='!isEdited' v-on:click='deleteMark'>Удалить</button>
			<label><input type='checkbox' v-model='isEdited'>Режим правки</label>		
		</div>
<!-- ------------------------------------------------------------------------------ -->
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	props:['mark'], 
	data(){
		return {			
			isEdited: false,
		}
	},
	computed:{
		name: {
    		get () {
     			return this.$store.state.viewData.name
    		},
    		set (value) {
      			this.$store.commit('SET_viewData_name', value)
    		}
  		},
  		amount: {
    		get () {
     			return this.$store.state.viewData.amount
    		},
    		set (value) {
      			this.$store.commit('SET_viewData_amount', value)
    		}
  		},
  		x: {
    		get () {
     			return this.$store.state.viewData.x
    		},
    		set (value) {
      			this.$store.commit('SET_viewData_x', value)
    		}
  		},
  		y: {
    		get () {
     			return this.$store.state.viewData.y
    		},
    		set (value) {
      			this.$store.commit('SET_viewData_y', value)
    		}
  		}
	},
	methods:{
		saveChangesToLS(){
			if(this.validate(this.name, this.amount, this.x, this.y)){

				this.isEdited = false;
				const currentViewData = this.$store.state.viewData;
				const appMapData = JSON.parse(localStorage['appMapData']);

					for (let i = 0; i < appMapData.workModel.length; i++){ 
						if (appMapData.workModel[i].name === this.mark.name){ 

						this.$store.commit('SET_viewData_name', this.name);
						this.$store.commit('SET_viewData_amount', this.amount);
						this.$store.commit('SET_viewData_x', this.x);
						this.$store.commit('SET_viewData_y', this.y);

						appMapData.workModel[i] = currentViewData; 

						localStorage['appMapData'] = JSON.stringify(appMapData);
						break 
					}											
				}
			}
			else {alert('- Заполните все строки!\n - X и Y должны быть от 0 до 1000!\n - Количество должно быть числом!')}
		},
		deleteMark(){
			const currentViewData = this.$store.state.viewData;
			const appMapData = JSON.parse(localStorage['appMapData']);

				for (let i = 0; i < appMapData.workModel.length; i++){
					if (appMapData.workModel[i].name === this.name){ 

					appMapData.workModel.splice(i,1); 

					this.$store.state.marks.splice(i,1);
					this.$store.commit('SET_viewData_name', null);
					this.$store.commit('SET_viewData_amount', null);
					this.$store.commit('SET_viewData_x', null);
					this.$store.commit('SET_viewData_y', null);

					localStorage['appMapData'] = JSON.stringify(appMapData);
					break 
				}
			}
		},
		validate(name,amount,x,y){
			if (name && amount && x && y){
				if ((0 <= +x && +x <= 1000) && (0 <= +y && +y <= 1000) && (typeof amount === 'number')){
					return true;
				}
				else {return false;}
			}
			else {return false;}
		}
	}
}
</script>

<style scoped>
.viewer{
	height: 200px;
	width: 420px;
	left: 25px;
	border: 2px solid orange;
	border-radius: 25px;
	position: fixed;
	display: flex;
	flex-direction: column;
}
.wrapper{
	display: flex;
	align-items: baseline;
}
.viewerTune{
	display: flex;
	position: fixed;
	justify-content: space-around;
	width: 350px;
	top:160px;
	left: 60px;
}
.viewerTune button{
	position: absolute;
	left: 10px;
	border-radius:8px;
	color: lightgoldenrodyellow;
	background-color: orange;
}
ul{
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-items: baseline;
	line-height: 2;
}
</style>