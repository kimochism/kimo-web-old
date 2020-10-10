import Vue from 'vue';

import { buildStore } from '../../utils/base-store';

import { ProductService } from "../../services/ProductService";

export const store = Vue.observable({
    products: {},
    offerProduct: {},
    productService: new ProductService(),
});

export const actions = {
    async listProducts() {
        const response = await store.productService.list({ page: 1, limit: 6 });

        store.products = response.data
    },

    async getOfferProduct() {
        const response = await store.productService.list({ offer: true, page: 1, limit: 1 })
        
        store.offerProduct = response.data[0]
    },
}

export const mapGetters = buildStore(store);
