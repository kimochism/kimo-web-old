import Vue from 'vue';

import { buildStore } from './utils/base-store';
import Successful from "./views/modals/successful/component.vue";

export const store = Vue.observable({
});

export const actions = {
    open() {
        
        let SuccessfulComponent = Vue.extend(Successful);

        let instance = new SuccessfulComponent();
        instance.$mount();

        this.$refs.app.appendChild(instance.$el);
    }
}

export const mapGetters = buildStore(store);
