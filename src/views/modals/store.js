import Vue from 'vue';

import { buildStore } from '../../utils/base-store';

export const store = Vue.observable({
    instance: {}
});

export const actions = {

    inject(modal) {

        let app = document.getElementById("modal-stack");

        let Component = Vue.extend(modal);
        let instance = new Component();

        instance.$mount();

        app.appendChild(instance.$el);

        store.instance = instance;
    },

    destroy() {
        document.getElementById("overlay").remove(store.instance.$el);
    },
}

export const mapGetters = buildStore(store);
