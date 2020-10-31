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
    sameProducts: [],
    colors: [],
    sizes: [],
    selected: [],
    active: {
        color: {
            current: Element,
            previous: Element
        },
        size: {
            current: Element,
            previous: Element
        }
    }
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

            store.product = response;
            store.categoryId = response.categories[0] && response.categories[0].id;

            store.mainImage = response.images[0] && response.images[0].url;
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
        
        store.selected = await store.productService.list({name: store.product.name, color: color});
        
        store.selected = store.selected.data.map(element => {
            return element.size;  
        });

        store.selected.forEach(element => {
            console.log(element);
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

        store.selected = await store.productService.list({name: store.product.name, size: size});
        
        store.selected = store.selected.data.map(element => {
            return element.color;  
        });

        store.colors = store.selected;
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
        console.log(response);
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
}

export const mapGetters = buildStore(store);
