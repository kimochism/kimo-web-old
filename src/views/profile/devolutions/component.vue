<template>
    <BaseContent>
        <div id="MyRequests">
            <h1>Minhas Devoluções</h1>
            <div class="subContainerDevolution">
                <div class="subContainerDevolutionItem">
                    <span>
                        Pedido
                        <br>
                        #123123
                    </span>
                    <span>
                        22/09/2020 
                        <br>
                        14:50
                    </span>
                    <span>
                        Em Análise
                    </span>
                </div>
                <div class="subContainerDevolutionItem">
                    <span>
                        Pedido
                        <br>
                        #123123
                    </span>
                    <span>
                        22/09/2020 
                        <br>
                        14:50
                    </span>
                    <span>
                        Recusado
                    </span>
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