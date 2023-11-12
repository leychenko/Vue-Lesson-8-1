import { createStore } from "vuex";
import {products} from '@/data/productList.js'
import {categoryData} from '@/data/mainPanelList.js'

export default createStore({
    state: {
        allProducts: [],
        categoryList: [],
        categoryValue: null,
    },
    getters: {
        getAllProducts: ({ allProducts }) => allProducts,
        getCategoryList: ({ categoryList }) => categoryList,
        getCategoryValue: ({ categoryValue }) => categoryValue,

        filterProducts: ({ categoryValue, allProducts }) => {
            if (!categoryValue) return allProducts = []
				else return allProducts.filter((products) => products.category === categoryValue)
        },
    },
    mutations: {
        setProductToList(state, list) {
            state.allProducts = list
        },
        setCategoryList(state, list) {
            state.categoryList = list
        },
        setCategoryValue(state, newVal) {
            state.categoryValue = newVal
        },
    },
    actions: {
        setProductToList({ commit }) {
            commit('setProductToList', products)
        },
        setCategoryList({ commit }) {
            commit('setCategoryList', categoryData)
        },
        setCategoryValue({ commit }, val) {
            commit('setCategoryValue', val)
        },
    },
    modules: {},
})
