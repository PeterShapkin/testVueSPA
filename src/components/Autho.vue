<template>
 	<form>
		<label class='autho'>Имя
			<input class='autho' placeholder='Username' v-model='username'> 
		</label>
		<label class='autho'>Пароль
			<input class='autho' placeholder='Password' v-model='password' type='password'> 
		</label>
		<button class='autho in' type='button' v-on:click='authorize()'>Войти</button>  
	</form>
</template>

<script>
import router from '../router'

export default {
	data(){
		return {
			username: 'test',
			password: 'test'
		}
	},
  	methods: {
  		authorize(){
  				if(this.username && this.password){ 

  				const appMapData = JSON.parse(localStorage['appMapData']);					
					if (appMapData.autho.username === this.username && appMapData.autho.password === this.password){ 

						appMapData.autho.enter = true; 
						localStorage['appMapData'] = JSON.stringify(appMapData); 

						router.replace('/map');
				}
				else { alert('Введите правильный пароль или логин!') }			
  			}
  			else { alert('Введите пароль и логин') }
  		}
	}
}
</script>

<style scoped>
form {
	color: dimgray;
	width:220px;
	border: 2px solid grey;
	border-radius:5px;
	box-shadow:5px 5px 15px rgba(0,0,0,0.5);
	display: flex;
	flex-direction:column;
	justify-content:center;
	position: absolute;
	left:37%;
	top:30%;
}
.autho {
	align-self:center;
	margin: 10px;
	border-radius: 8px;
}
.in{
	color: lightgoldenrodyellow;
	background-color: orange;
}
</style>