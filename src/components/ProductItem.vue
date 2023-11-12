<template>
	
			<a :href="product.link" class="item">
				<div class="item__img">
					<img :src="product.imgSrc" alt="">
				</div>
				<div class="item__info">
					<div class="item__title">{{product.title}}</div>
					<div class="item__price">{{product.price}} грн</div>
				</div>
			</a>
	
</template>

<script>

	export default {
		name:'ProductItem',
		props: {
			product: {
				type: Object,
				default: ()=>({})
			},
		},
	}
</script>

<style lang="scss" scoped>
.item {
	border: 1px solid black;
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 15px;
	text-decoration: none;
	color: rgb(84, 83, 83);
		// .item__img
		&__img {
			max-width: 25%;
			img{
				max-width: 100%;
			}
		}
		// .item__info
		&__info {
		}
		// .item__title
		&__title {
			font-size: 18px;
			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}
		// .item__price
		&__price {
			font-size: 20px;
			color: red;
		}
		
}

</style>