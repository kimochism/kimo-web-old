import Vue from "vue";

import { buildStore } from '../../utils/base-store';

import { ProductService } from '../../services/ProductService';
import { CustomerBagService } from '../../services/CustomerBagService';

const store = Vue.observable({
    productService: new ProductService(),
    customerBagService: new CustomerBagService(),
    product: {},
    categoryId: null,
    mainImage: ''
});

export const actions = {

    async getProductById(id) {

        const response = await store.productService.show(id);

        if (response) {
            store.product = response;
            store.categoryId = response.categories[0] && response.categories[0].id;

            store.mainImage = response.images[0] && response.images[0].url;
        }
    },

    async addToCustomerBag(productId) {
        const response = await store.customerBagService.store({ productId });
        
        if (response) {
            alert('produto adicionado pessoas do front colocar um bagui bonito aq')
        }
    },

    setMainImage(url) {
        store.mainImage = url;
    }
}

export const mapGetters = buildStore(store);
