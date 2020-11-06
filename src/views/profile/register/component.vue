<template>
    <BaseContent>
        <div id="MyRegister">
            <h1>Meu Cadastro</h1>
            <div class="subContainerRegister">
                <div class="itemSubContainerRegister">
                    <label for="">Nome Completo</label>
                    <input type="text" placeholder="Clara" v-model="customer.fullName">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Cpf</label>
                    <input type="text" placeholder="CPF" v-model="customer.document">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Data de nascimento</label>
                    <input type="text" placeholder="01/01/2001" v-model="customer.birthDate">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">E-Mail</label>
                    <input type="text" placeholder="clara@kimochism.com" v-model="customer.email">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Telefone</label>
                    <input type="text" placeholder="(11) 98765-4321" v-model="customer.cellPhoneNumber">
                </div>
                <div class="itemSubContainerRegister">
                    <button>Atualizar</button>
                </div>
            </div>
        </div>
    </BaseContent>
</template>
<script>

import BaseContent from './../base-content/component.vue';
import { mapGetters, actions } from "./store";

export default {
    components: {
        BaseContent
    },
    computed: {
        ...mapGetters
    },
    methods: {
        ...actions
    },
    created(){
        actions.getCustomer(4);
    }
}

</script>

<style src="./style.css" scoped></style>