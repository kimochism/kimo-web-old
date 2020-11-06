import Vue from 'vue';

import { buildStore } from '../../../utils/base-store';
import { CustomerService } from '../../../services/CustomerService.js';

export const store = Vue.observable({
    customerService: new CustomerService(),
    customer: {}
});

export const actions = {
    
    async getCustomer(id) {
        const response = await store.customerService.show(id);

        store.customer = response;
    }
}

export const mapGetters = buildStore(store);