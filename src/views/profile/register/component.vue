<template>
    <BaseContent>
        <div id="MyRegister">
            <h1>Meu Cadastro</h1>
            <div class="subContainerRegister">
                <div class="itemSubContainerRegister">
                    <label for="">Nome</label>
                    <input type="text" placeholder="Clara">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Sobrenome</label>
                    <input type="text" placeholder="Takahashi">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Cpf</label>
                    <input type="text" placeholder="CPF">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Data de nascimento</label>
                    <input type="text" placeholder="01/01/2001">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">E-Mail</label>
                    <input type="text" placeholder="clara@kimochism.com">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Telefone</label>
                    <input type="text" placeholder="(11) 98765-4321">
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

export default {
    components: {
        BaseContent
    }    
}

</script>

<style src="./style.css" scoped></style>