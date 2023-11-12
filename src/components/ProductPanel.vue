<template>
	<div class="container-panel">
		<div v-for="item in categoryData" :key="item.id" class="panel" :class="{active:getCategoryValue === item.category}" @click="chooseCategory(item.category)" >
				<div class="panel__image">
					<img :src="item.imgSrc" >
				</div>
			<div class="panel__title">{{item.category}}</div>
		</div>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
	export default {
		name:'ProductPanel',
		props: {
			categoryData: {
				type: Array,
				default: ()=>[]
			},
		},
		computed: {
			...mapGetters(["getCategoryValue"]),
		},
		methods: {
			...mapActions(["setCategoryValue"]),
			chooseCategory(val){
				this.setCategoryValue(val)
			}
		},
	}
</script>

<style lang="scss" scoped>
.container-panel{
	display: flex;
	justify-content: space-around;
	padding: 10px;
	gap: 10px;
	background-color: grey;
	max-width: 1000px;
	margin: 0 auto;
}
.panel {
	display: flex;
	padding: 10px;
	background-color: #fff;
	border: 1px solid black;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	border-radius: 50%;

		// .panel__image
		&__image {
			max-width: 70%;
			img{
				max-width: 100%;
				
			}

		}
		// .panel__title
		&__title {
			font-size: 22px;
		}
}
.active{
	border: 3px solid red;
	transform: scale(1.05);
}
</style>