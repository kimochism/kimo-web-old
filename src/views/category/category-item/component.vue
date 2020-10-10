// 
<template>
    <div id="ContainerItemCategory">
        <div class="container" v-bind:style="{ 'background-image': 'url(' + this.category.image.url + ')' }">
            <div class="card">
                <span class="title">{{this.category.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        props: ['category'],
    };
</script>

<style scoped>
    @import url("./style.css");
</style>