<template>
 	<form>
		<label class='autho'>Имя
			<input class='autho' placeholder='Username' ref='user' value='test'>
		</label>
		<label class='autho'>Пароль
			<input class='autho' placeholder='Password' ref='password' value='test' type='password'>
		</label>
		<button class='autho in' type='button' v-on:click='validate()'>Войти</button>  
	</form>
</template>

<script>
import router from '../router'

export default {
  	methods: {
  		validate(){
  			if(this.$refs.user.value && this.$refs.password.value){
  				const appMapData = JSON.parse(localStorage['appMapData']);					
				if (appMapData[0].username === this.$refs.user.value && appMapData[0].password === this.$refs.password.value){
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