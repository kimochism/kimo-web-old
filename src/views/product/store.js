import Vue from "vue";

import { buildStore } from '../../utils/base-store';

import { ProductService } from '../../services/ProductService';
import { CustomerBagService } from '../../services/CustomerBagService';
import { FreightService } from '../../services/FreightService';
import { WishlistService } from "../../services/WishlistService";

const store = Vue.observable({
    productService: new ProductService(),
    customerBagService: new CustomerBagService(),
    freightService: new FreightService(),
    wishlistService: new WishlistService(),
    cep: '',
    responseFreight: {},
    product: {},
    categoryId: null,
    mainImage: '',
    favorite: false
});

export const actions = {

    async getProductById(id) {

        const response = await store.productService.show(id);

        if (response) {
            store.product = response;
            store.categoryId = response.categories[0] && response.categories[0].id;

            store.mainImage = response.images[0] && response.images[0].url;
            store.favorite = response.wishlist != null ? true : false;
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

        store.responseFreight = response;
    },

    setMainImage(url) {
        store.mainImage = url;
    },

    async favor(productId) {

        store.favorite = !store.favorite;

        if(!store.favorite) {
            const response = await store.wishlistService.destroy({ productId });

            if(response) {
                Vue.toasted.error("Produto removido da lista de favoritos.");
            }
        }else{
            const response = await store.wishlistService.store({ productId });

            if(response) {
                Vue.toasted.success("Produto adicionado á lista de favoritos.");
            }
        }
    }
}

export const mapGetters = buildStore(store);
