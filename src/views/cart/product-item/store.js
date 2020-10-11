import Vue from 'vue';

import { buildStore } from '../../../utils/base-store';

import { CustomerBagService } from '../../../services/CustomerBagService';

import { actions as cartActions } from '../store';

export const store = Vue.observable({
    customerBagService: new CustomerBagService(),
});

export const actions = {
    
    async updateQuantity(newQuantity, customerBag) {
        const response = await store.customerBagService.update(customerBag.id, { quantity: newQuantity });

        customerBag.quantity = response.quantity;

        return response;
    },

    async destroyCustomerBag(id) {
        const response = await store.customerBagService.destroy(id);

        await cartActions.getCustomerBags();

        return response;
    }
}

export const mapGetters = buildStore(store);
