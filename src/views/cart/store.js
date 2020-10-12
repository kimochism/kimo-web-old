import Vue from 'vue';

import { buildStore } from '../../utils/base-store';

import { CustomerBagService } from '../../services/CustomerBagService';

export const store = Vue.observable({
    active: 'first',
    customerBagService: new CustomerBagService(),
    first: false,
    second: false,
    third: false,
    secondStepError: null,
    products: [],
    badge: 0,
    amount: 0,
});

export const actions = {
    setDone(id, index) {
        store[id] = true;

        store.secondStepError = null;

        if (index) {
            store.active = index;
        }
    },

    setError() {
        store.secondStepError = 'This is an error!';
    },

    async getCustomerBags() {
        const response = await store.customerBagService.list({ loggedCustomer: true });
        store.products = response;

        this.bagAmount();

        return store.products;
    },

    async getBadge() {

        const customerBags = await this.getCustomerBags();

        if (customerBags) {
            customerBags.forEach(customerBag => {

                store.badge += customerBag.quantity;
            });
        }
    },

    bagAmount(products) {
        store.amount = store.products.reduce((accumulator, current) => {
            accumulator += parseFloat(current.product.price) * current.quantity;

            return accumulator
        }, 0);

    },
}

export const mapGetters = buildStore(store);
