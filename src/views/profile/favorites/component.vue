<template>
    <BaseContent>
        <div id="MyRequests">
            <h1>Meus Favoritos</h1>
            <div class="subContainerFavorites">
                <div class="itemFavorites">
                    <div class="OpacityItemFavorites">
                        <span class="material-icons">
                            remove_circle_outline
                        </span>
                    </div>
                </div>

                <div class="itemFavorites">
                    <div class="OpacityItemFavorites">
                        <span class="material-icons">
                            remove_circle_outline
                        </span>
                    </div>
                </div>

                <div class="itemFavorites">
                    <div class="OpacityItemFavorites">
                            <span class="material-icons">
                            remove_circle_outline
                        </span>
                    </div>
                </div>

                <div class="itemFavorites">
                    <div class="OpacityItemFavorites">
                            <span class="material-icons">
                            remove_circle_outline
                        </span>
                    </div>
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