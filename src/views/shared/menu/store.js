import Vue from 'vue';

import { buildStore } from '../../../utils/base-store';

import { CategoryService } from '../../../services/CategoryService';

export const store = Vue.observable({
    message: "",
    isOpen: true,
    categoryService: new CategoryService(),
    categories: []
});

export const actions = {

    openMenu() {
        if (store.isOpen) {
          document.getElementById("MenuOptions").style.display = "flex";
        } else {
          document.getElementById("MenuOptions").style.display = "none";
        }
  
        store.isOpen = !store.isOpen;
    },

    changeCadastro() {
        document.getElementById("ContainerLogin").style.display = "flex";
        document.getElementById("CadastroCase").style.display = "none";
        document.getElementById("LoginCase").style.display = "flex";
    },

    async listCategories() {
        const response = await store.categoryService.list({});
        
        store.categories = response;
    }
}

export const mapGetters = buildStore(store);
