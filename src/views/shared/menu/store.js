import Vue from 'vue';

import { buildStore } from '../../../utils/base-store';

export const store = Vue.observable({
    message: "",
    isOpen: true,
    routerLinks: {
        home: {
            path: '/',
            name: 'Início'
        },
        category: {
            path: '/categorias',
            name: 'Categorias'
        },
        catalog: {
            path: '/catalogo',
            name: 'Catálogo'
        },
        gamer: {
            path: '/catalogo',
            name: 'Gamer'
        },
        anime: {
            path: '/catalogo',
            name: 'Anime'
        },
        geek: {
            path: '/catalogo',
            name: 'Geek'
        },
        eGirl: {
            path: '/catalogo',
            name: 'E-girl'
        },
        kids: {
            path: '/catalogo',
            name: 'Kids'
        },
    }
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
}

export const mapGetters = buildStore(store);
