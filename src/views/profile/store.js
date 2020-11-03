import Vue from "vue";

import { buildStore } from '../../utils/base-store';

import { CustomerService } from '../../services/CustomerService';

export const store = Vue.observable({
    customerService: new CustomerService(),
    customer: {},
    currentContent: 'myRegister'
});

export const actions = {

    async getCustomerById(id) {
        
        const response = await store.customerService.show(id);

        
        console.log(response)
    },

    setCurrentContent(content){
        store.currentContent = content;
    }
}

export const mapGetters = buildStore(store);
