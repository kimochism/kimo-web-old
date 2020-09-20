<template>
    <div class="container" v-show="showProductFilter">
        <div class="overlay"  v-on:click="closeFilter()" >
        </div>
        <div class="content">
            <span class="material-icons" v-on:click="closeFilter()"> close </span>
            <div class="filter">
                <div class="filter-item"> 
                    <p class="title"> Ordenar por </p>
                    <span class="item"> Padrão </span>
                    <span class="item"> Camisetas </span>
                    <span class="item"> Canecas </span>
                    <span class="item"> Gamer </span>
                    <span class="item"> Otaku </span>
                </div>
                <div class="filter-item">
                    <p class="title"> Tamanho </p>
                    <span class="item"> PP </span>
                    <span class="item"> P </span>
                    <span class="item"> M </span>
                    <span class="item"> G </span>
                    <span class="item"> GG </span>
                </div>
            </div>
            <div class="filter">
                <div class="filter-item">
                    <p class="title"> Tags </p>
                    <span class="item"> Padrão </span>
                    <span class="item"> Camisetas </span>
                    <span class="item"> Canecas </span>
                    <span class="item"> Gamer </span>
                    <span class="item"> Otaku </span>
                </div>
                <div class="filter-item">
                    <p class="title"> Preço </p>
                    <span class="item"> R$10 - R$30 </span>
                    <span class="item"> R$30 - R$50 </span>
                    <span class="item"> R$50 - R$80 </span>
                    <span class="item"> R$80 - R$120 </span>
                    <span class="item"> R$120 - R$150 </span>
                </div>
            </div>
            <div class="filter-one">
                <div class="filter-item">
                    <p class="title"> Cor </p>
                    <span class="item"> 
                        <span class="color-black"></span> 
                        Preto
                    </span>
                    <span class="item"> 
                        <span class="color-gray"></span> 
                        Cinza
                    </span>
                    <span class="item"> 
                        <span class="color-white"></span> 
                        Branco
                    </span>
                    <span class="item"> 
                        <span class="color-blue"></span> 
                        Azul
                    </span>
                    <span class="item"> 
                        <span class="color-pink"></span> 
                        Rosa
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductFilter",
        props: ['showProductFilter'],
        methods: {
            closeFilter() {
                this.showProductFilter = !this.showProductFilter;
                this.$emit('returnShowProductFilter', this.showProductFilter);
            }
        }
    }
</script>

<style scoped>

    .container {
        width: 100%;
        height: 100vh;
        position: fixed;
        padding: 0;
        display: flex;
        top: 0;
        left: 0;
        justify-content: flex-end;
    }

    .overlay {
        background: rgba(0,0,0,0.5);
        width: 100%;
    }

    .content {
        padding-left: 30px;
        position: absolute;
        width: 25%;
        background: #f0f0f0;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .material-icons:hover {
        cursor: pointer;
        width: 24px;
        border-radius: 100%;
        background: rgba(0, 0, 0, 0.2);
        transition: 0.5s ease-in-out;
    }

    .filter {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .filter-item{
        width: 50%;
        display: flex;
        flex-direction: column;
        color: gray;
    }

    .item {
        line-height: 20px;
    }

    .filter-one {
        width: 80%;
        display: flex;
        justify-content: flex-start;
    }

    .title {
        font-size: 18px;
        color: black
    }

    .filter-one .filter-item .item {
        display: flex;
        align-items: center;
    }

    .color-black, .color-white, .color-gray, .color-blue, .color-pink{
        width: 12px;
        height: 12px;
        border-radius: 100%;
        margin-right: 10px;
    }

    .item:hover {
        color: red;
        cursor: pointer;
    }

    .color-black {
        background: black;
    }

    .color-white {
        background: white;
    }

    .color-blue {
        background: blue;
    }

    .color-pink {
        background: pink;
    }

    .color-gray {
        background: gray;
    }

    @media screen and (max-width: 800px){
        .content {
            width: 100%;
        }
    }
</style>