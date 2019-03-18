<template>
 		<g :id='name' v-on:click='showInfo(name)'>
			<circle  :cx='x' :cy='y' r='4' fill='red' stroke='yellow' ></circle>
			<text :x='x' :y='y'>{{name}}</text>
		</g>
</template>

<script>
import Map from './Map.vue'

export default {
	props:['name','x','y'],
	methods:{
		showInfo(id){
			const marks = this.$store.state.marks;
			for (let i = 0; i < marks.length; i++){
				if (marks[i].name === id){ 
					this.$store.commit('SET_viewData', marks[i]);
				} 
			}
		}
	}
} 
</script>

<style scoped>
text{
	font: italic bold 16px serif;
}
</style>