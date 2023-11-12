<template>
	
	<product-item v-for="product in productList" :key="product.id" :product="product" />
</template>

<script>

import ProductItem from '@/components/ProductItem.vue';


	export default {
    name: 'ProductListComponent',
	 components: { ProductItem }, 
    props: {
        productList: {
            type: Array,
            default: () => []
        },
    },
   //  computed: {
   //      ...mapGetters(["getAllProducts"])
   //  },
   //  methods: {
   //      ...mapActions(["setProductToList"])
   //  },
   //  created() {
   //      this.setProductToList();
   //  },
}
</script>

<style lang="scss" scoped>
</style>