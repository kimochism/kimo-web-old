<template>
    <BaseContent>
        <div id="MyRequests" class="contentBox">
            <h1>Minhas Preferências</h1>
            <div class="subContainerPreferences">
                <div class="itemPreference">
                    <span>
                        Preferências
                    </span>
                    <select name="" id="">
                        <option value="">Camisetas</option>
                    </select>
                </div>
                <div class="itemPreference">
                    <span>
                        Minhas Medidas
                    </span>
                    <select name="" id="">
                        <option value="">49</option>
                    </select>
                </div>
                <div class="itemPreference">
                    <span>
                        Meu Estilo
                    </span>
                    <select name="" id="">
                        <option value="">Indie</option>
                    </select>
                </div>
                <div class="itemPreference">
                    <span>*</span>
                    <button class="btnPreferences">
                        Atualizar
                    </button>
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