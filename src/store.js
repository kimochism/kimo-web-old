import Vue from 'vue';

import { buildStore } from './utils/base-store';
import { actions as modalStore } from './views/modals/store';
import { Successful } from './utils/importModals';

export const store = Vue.observable({
});

export const actions = {

    inject() {
        modalStore.inject(Successful);
    }
}

export const mapGetters = buildStore(store);
