<template>
    <product-panel :category-data="getCategoryList" />
    <div v-if="filterProducts.length" class="container">
        <product-list-component :product-list="filterProducts" />
    </div>
	 <div  v-else class="message">Оберіть категорію </div>
</template>

<script>
import ProductListComponent from './ProductListComponent.vue'
import ProductPanel from '@/components/ProductPanel.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductManager',
    components: {
        ProductListComponent,
        ProductPanel,
    },
    computed: {
        ...mapGetters(['filterProducts', 'getCategoryList', 'getRadioVal']),
    },
    methods: {
        ...mapActions(['setProductToList', 'setCategoryList']),
    },
    created() {
        this.setProductToList(), this.setCategoryList()
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
	 padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    max-width: 80%;
    margin: 0 auto;
}
.message{
	font-size: 25px;
}
</style>
