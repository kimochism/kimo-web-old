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
    sameProducts: [],
    colors: [],
    sizes: [],
    sizesAvailable: [],
    colorsAvailable: [],
    favorite: false,
    active: {
        color: {
            current: Element,
            previous: Element
        },
        size: {
            current: Element,
            previous: Element
        }
    },
});

export const actions = {

    async getProductById(id) {

        const response = await store.productService.show(id);

        if (response) {

            store.sameProducts = await store.productService.list({ name: response.name });

            store.sameProducts = store.sameProducts.data.map(element => {

                store.colors.push(element.color);
                store.sizes.push(element.size);

                return { id: element.id, size: element.size, color: element.color, quantity: element.quantity };
            });

            store.colors = this.removeDuplicates(store.colors);
            store.sizes = this.removeDuplicates(store.sizes);

            store.sizes = store.sizes.map(size => {
                return { value: size, disabled: false };
            });
            
            store.colors = store.colors.map(color => {
                return { value: color, disabled: false };
            });

            store.product = response;
            store.categoryId = response.categories[0] && response.categories[0].id;

            store.mainImage = response.images[0] && response.images[0].url;
            store.favorite = response.wishlist !== null ? true : false;
        }
    },
    
    async selectColor(color, event) {

        if(store.active.color.current != '') {
            store.active.color.previous = store.active.color.current;
        }

        store.active.color.current = event.target;
        
        store.active.color.current.classList.add('colorBoxActive');

        if(store.active.color.previous.length != 0) {
            store.active.color.previous.classList.remove('colorBoxActive');
        }
        
        store.sizesAvailable = await store.productService.list({name: store.product.name, color: color});
        
        store.sizesAvailable = store.sizesAvailable.data.map(available => {
            return available.size;  
        });

        store.sizes = store.sizes.map(size => {

            store.sizesAvailable.some(available => {
                if(size.value == available) {
                    size.disabled = false;
                    return true;
                }else{
                    size.disabled = true;
                }
            });

            return size;
        });
    },

    async selectSize(size, event) {

        if(store.active.size.current != '') {
            store.active.size.previous = store.active.size.current;
        }

        store.active.size.current = event.target;

        store.active.size.current.classList.add('sizeBoxActive');

        if(store.active.size.previous.length != 0) {
            store.active.size.previous.classList.remove('sizeBoxActive');
        }

        store.colorsAvailable = await store.productService.list({name: store.product.name, size: size});
        
        store.colorsAvailable = store.colorsAvailable.data.map(available => {
            return available.color;  
        });

        store.colors = store.colors.map(color => {

            store.colorsAvailable.some(available => {
                if(color.value == available) {
                    color.disabled = false;
                    return true;
                }else{
                    color.disabled = true;
                }
            });

            return color;
        });
    },

    async addToCustomerBag(productId) {
        const response = await store.customerBagService.store({ productId });
        
        if (response) {
            Vue.toasted.success("Produto adicionado ao carrinho.", { className: ['custom-toast', 'success']});
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
     
    removeDuplicates(array) {
        return array.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, []);
    },

    async favor(productId) {

        if(store.favorite) {
            const response = await store.wishlistService.destroy([productId]);

            if(response) {
                Vue.toasted.error("Produto removido da lista de favoritos.");
            }
        }else{
            const response = await store.wishlistService.store({ productId });

            if(response) {
                Vue.toasted.success("Produto adicionado á lista de favoritos.");
            }
        }

        store.favorite = !store.favorite;
    }
}

export const mapGetters = buildStore(store);
