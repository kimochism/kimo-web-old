<template>
    <div class="content">

        <img src="https://i.pinimg.com/564x/5c/45/61/5c4561d95857586852116379d86ce1fe.jpg" alt="">
        <div class="items">
            <span class="item-name">Camisa Manga Curta</span>
            <span class="item-price">R$ 200,00</span>
            <span class="item-description">7x de R$ 23.55 no cartão</span>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'Item'
    }
</script>

<style scoped>
    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 5px;
        cursor: pointer;
    }

    .content:hover {
        background: rgba(0,0,0,0.08);
    }

    img {
        width: 100%;
    }

    .items {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        font-weight: normal;
        padding: 10px;
        color: black;
        font-size:16px;
    }

    .img:hover {
        width: 120%;
        transition: 1s;
    }

    .item-price {
        font-weight: bold;
        font-size: 14px;
    }

    .item-description {
        color: gray;
        font-size: 14px;
    }
</style>