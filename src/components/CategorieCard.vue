<template>
    <div class="cardBox" v-bind:style="{ 'background-image': 'url(' + this.categorie.backgroundUrl + ')' }">
        <div class="cardContent">
            <div class="cardTitle">
                <span class="textTitle">{{this.categorie.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CategorieCard',
        props: ['categorie'],
    };
</script>

<style scoped>
    .cardBox {
        cursor: pointer;
        height: 50vh;
        width: 30vw;
        margin: 1% 0%;
        box-shadow: 0 6px 20px #00000040, 0 2px 2px #00000038;
        transition: linear .2s;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .cardBox:hover {
        box-shadow: 0 8px 22px #00000050, 0 4px 4px #00000048;
    }
    .cardContent {
        height: 100%;
        width: 100%;
        background-color: #00000040;
        text-align: center;
        line-height: 25vw;
        transition: linear .2s;
    }
    .cardContent:hover{
        background-color: #000000aa;
    }
    .textTitle {
        font-size: 64px;
        color: white;
        opacity: 0;
        transition: linear .1s;
    }
    .cardContent:hover .textTitle {
        opacity: 1;
    }

</style>