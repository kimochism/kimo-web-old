import Vue from 'vue';

import { buildStore, clearStore } from '../../utils/base-store';

import { UserService } from '../../services/UserService';
import { CustomerService } from '../../services/CustomerService';

export const store = Vue.observable({
    userService: new UserService(),
    customerService: new CustomerService(),
    emailLogin: '',
    passwordLogin: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    cellPhoneNumber: '',
});

export const actions = {
    async auth(request) {
        const response = await store.userService.auth(request);

        if (response) {
            this.changeContainer();

            localStorage.setItem('Authorization', response.token);

            const urlToReload = window.location.href;
            window.location.href = urlToReload;
        }
    },

    async storeUser() {
        if (!this.isPasswordEquals()) {
            alert('senhas imcompatives do meu saco');
            return;
        }

        const { id, email, username, password } = await store.userService.store({
            username: store.username,
            password: store.password,
            email: store.email
        });

        if (id) {
            await this.auth({ email, password });

            await this.storeCustomer({
                userId: id,
                fullName: username,
                email: email,
                cellPhoneNumber: store.cellPhoneNumber,
            });
        }
    },

    async storeCustomer(customerData) {
        const response = await store.customerService.store(customerData)

        return response;
    },

    changeLogin: function () {
        document.getElementById("CadastroCase").style.display = "flex";
        document.getElementById("LoginCase").style.display = "none";
    },

    changeCadastro: function () {
        document.getElementById("ContainerLogin").style.display = "flex";
        document.getElementById("CadastroCase").style.display = "none";
        document.getElementById("LoginCase").style.display = "flex";
    },
    changeContainer: function () {
        document.getElementById("ContainerLogin").style.display = "none";
        document.getElementById("CadastroCase").style.display = "none";
        document.getElementById("LoginCase").style.display = "none";
    },

    isPasswordEquals() {
        return store.password === store.confirmPassword;
    },
}

export const mapGetters = buildStore(store);
export const destroyStore = () => clearStore()