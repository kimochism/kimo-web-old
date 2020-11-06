<template>
    <BaseContent>
        <div id="MyRequests">
            <h1>Alterar senha</h1>
            <div class="subContainerRegister">
                <div class="itemSubContainerRegister">
                    <label for="">Senha</label>
                    <input type="text" placeholder="Senha123@">
                </div>
                <div class="itemSubContainerRegister">
                    <label for="">Repetir a Senha</label>
                    <input type="text" placeholder="Senha123@">
                </div>
                <div class="itemSubContainerRegister">
                    <label>*</label>
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