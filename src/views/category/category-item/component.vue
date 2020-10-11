// 
<template>
    <div id="ContainerItemCategory" @click="navigateToCatalog(category.name)">
        <div class="container" v-bind:style="{ 'background-image': 'url(' + category.image.url + ')' }">
            <div class="card">
                <span class="title">{{category.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        props: ['category'],

        methods: {
            navigateToCatalog(categoryName) {
                this.$router.push({ path: 'catalogo', query: { categoryName } })
            }
        }
    };
</script>

<style src="./style.css"  scoped>
    
</style>