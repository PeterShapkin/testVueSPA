<template>
	<div class='newPoint'>
		<div class='wrapper'>
			<ul>
				<li>Название:</li>
				<li>Количество товара:</li>
				<li>Координата X:</li>
				<li>Координата Y:</li>
			</ul>

			<ul>
				<li><input  ref='name'></li> 
				<li><input  ref='amount' type='number'></li>
				<li><input  ref='x' type='number'></li>
				<li><input  ref='y' type='number'></li>
			</ul>
		</div>
		<button v-on:click='addMark'>Создать</button>
	</div>
</template>
<script>


export default {
	methods:{
		addMark(){
			const mark = {
				name: this.$refs.name.value, 
				amount: this.$refs.amount.value,
				x: this.$refs.x.value,
				y: this.$refs.y.value
			}
			if (this.validate(this.$refs.name.value, this.$refs.amount.value, this.$refs.x.value, this.$refs.y.value)){
					this.$store.commit('ADD_mark', mark);
					const appMapData = JSON.parse(localStorage['appMapData']);
			  		appMapData[1].unshift(mark);
			  		localStorage['appMapData'] = JSON.stringify(appMapData);
			  		this.$refs.name.value = this.$refs.amount.value = this.$refs.x.value = this.$refs.y.value = null;
			}
	  		else {alert('Заполните все строки! X и Y должны быть от 0 до 1000!')}
		},
		validate(name,amount,x,y){
			if (name && amount && x && y){
				if ((0 <= +x && +x <= 1000) && (0 <= +y && +y <= 1000)){ return true; }
				else {return false;}
			}
			else {return false;}
		}
	}
} 
</script>

<style scoped>
.newPoint{
	height: 200px;
	width: 420px;
	left: 25px;
	border: 2px solid orange;
	border-radius: 25px;
	top: 250px;
	position: fixed;
	display: flex;
	flex-direction: column;
}
.wrapper{
	display: flex;
	align-items: baseline;
}
button{
	position: absolute;
	border-radius:8px;
	color: lightgoldenrodyellow;
	background-color: orange;
	left: 150px;
	bottom: 20px;
}
ul{
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-items: baseline;
	line-height: 2;
}
</style>