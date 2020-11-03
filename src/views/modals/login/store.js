import Vue from 'vue';

import { buildStore, clearStore } from '../../../utils/base-store';

import { UserService } from '../../../services/UserService';
import { CustomerService } from '../../../services/CustomerService';

export const store = Vue.observable({
    userService: new UserService(),
    customerService: new CustomerService(),
    loginFields: {
        email: '',
        password: '',
    },
    storeFields: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        cellPhoneNumber: '',
    }
});

export const actions = {
    async auth(request) {

        let empytFields = [];

        Object.entries(store.loginFields).map(element => {

            if(element[1] == '') {
                empytFields.push(element[0]);
            }
        });

        if(empytFields.length > 0) {
            this.setError('Preencha todos os campos!', empytFields);
            return;
        }

        if(!this.validateEmail(store.loginFields.email)){
            this.setError('Email inválido', ['email']);
            return;
        }

        const response = await store.userService.auth(request).catch(error => {

            if (error.response && error.response.status === 401) {

                this.setError('Email e/ou senha inválida(os).', null);
            } else {

                this.changeContainer();

                localStorage.setItem('Authorization', response.token);

                const urlToReload = window.location.href;
                window.location.href = urlToReload;
            }
        });
    },

    async storeUser() {

        let fields = [];
        Object.entries(store.storeFields).map(element => {

            if(element[1] == '') {
                fields.push(element[0]);
            }
        });

        if(fields.length > 0) {
            this.setError('Preencha todos os campos!', fields);
            return;
        }

        if (!this.validateEmail(store.storeFields.email)) {
            this.setError('Email inválido.', ['email']);
            return;
        }

        if (!this.isPasswordEquals()) {
            this.setError('Senhas não se comparam.', ['password', 'confirmPassword']);
            return;
        }

        if (!this.validatePhone()) {
            this.setError('Telefone inválido.', ['cellPhoneNumber']);
            return;
        }

        const { id, email, username } = await store.userService.store({
            username: store.storeFields.username,
            password: store.storeFields.password,
            email: store.storeFields.email
        });

        if (id) {
            const authenticated = await store.userService.auth({ email, password: store.storeFields.password });
            localStorage.setItem('Authorization', authenticated.token);

            await this.storeCustomer({
                userId: id,
                fullName: username,
                email: email,
                cellPhoneNumber: store.cellPhoneNumber,
            });

            localStorage.setItem('username', username);

            const urlToReload = window.location.href;
            window.location.href = urlToReload;
        }
    },

    async storeCustomer(customerData) {

        let customerService = new CustomerService();

        const response = await customerService.store(customerData)

        return response;
    },

    changeLogin: function () {
        document.getElementById("CadastroCase").style.display = "flex";
        document.getElementById("LoginCase").style.display = "none";
    },

    changeCadastro: function () {
        document.getElementById("CadastroCase").style.display = "none";
        document.getElementById("LoginCase").style.display = "flex";
    },

    changeContainer: function () {
        document.getElementById("CadastroCase").style.display = "none";
        document.getElementById("LoginCase").style.display = "none";
    },

    isPasswordEquals() {
        return store.password === store.confirmPassword;
    },

    validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    },

    validatePhone() {

        const regex = /(^|\()?\s*(\d{2})\s*(\s|\))*(9?\d{4})(\s|-)?(\d{4})($|\n)/;
        return regex.test(store.storeFields.cellPhoneNumber);
    },

    setError(message, inputs) {

        if(inputs != null) {
            inputs.forEach(input => {
            
                let inputError = document.getElementById(input);
    
                inputError.style.borderBottom = '1px solid red';
            });
        }
        
        Vue.toasted.error(message);
    }
}

export const mapGetters = buildStore(store);
export const destroyStore = () => clearStore()