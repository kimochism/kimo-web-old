import Vue from 'vue';

import { buildStore } from '../../../utils/base-store';

import { CustomerBagService } from '../../../services/CustomerBagService';

import { actions as cartActions, store as cartStore } from '../store';

export const store = Vue.observable({
    customerBagService: new CustomerBagService(),
});

export const actions = {
    
    async updateQuantity(newQuantity, customerBag, operation) {
        const response = await store.customerBagService.update(customerBag.id, { quantity: newQuantity });

        if (newQuantity === 0) {
            await this.destroyCustomerBag(customerBag.id);
            return;
        }

        customerBag.quantity = response.quantity;

        if (operation === 'minus') {
            cartStore.amount -= parseInt(customerBag.product.price);
        } else {
            cartStore.amount += parseInt(customerBag.product.price);
        }
 
        return response;
    },

    async destroyCustomerBag(id) {
        const response = await store.customerBagService.destroy(id);

        await cartActions.getCustomerBags();

        return response;
    }
}

export const mapGetters = buildStore(store);
