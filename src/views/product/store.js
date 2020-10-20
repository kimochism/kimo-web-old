import Vue from "vue";

import { buildStore } from '../../utils/base-store';

import { ProductService } from '../../services/ProductService';
import { CustomerBagService } from '../../services/CustomerBagService';
import { FreightService } from '../../services/FreightService';

const store = Vue.observable({
    productService: new ProductService(),
    customerBagService: new CustomerBagService(),
    freightService: new FreightService(),
    cep: '',
    responseFreight: {},
    product: {},
    categoryId: null,
    mainImage: '',
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

    async calculateFreight(){
        const data = {
            "originZipcode": "08150020",
            "destinyZipcode": store.cep,
            "weight": "0.2",
            "format": "1",
            "length": "16",
            "height": "5",
            "width": "15",
            "diameter": "0",
            "ownHand": "n",
            "amount": "200",
            "receivement": "n",
            "serviceCode": "40010"
        }
        const response = await store.freightService.store(data);
        console.log(response);
        store.responseFreight = response;
    },

    setMainImage(url) {
        store.mainImage = url;
    }
}

export const mapGetters = buildStore(store);
