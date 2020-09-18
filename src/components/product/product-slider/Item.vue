<template>
    <div class="content">

        <img src="https://i.pinimg.com/564x/5c/45/61/5c4561d95857586852116379d86ce1fe.jpg" alt="">
        <div class="items">
            <span>Camisa Manga Curta Estampa Chihiro</span>
            <span>R$ 200,00</span>
            <span>7x de R$ 23.55 no cartão kimochism</span>
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
        padding: 0 5% 0 5%;
        border:
    }

    img {
        width: 70%;
        height: 220px;
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

    span:nth-child(2) {
        font-weight: 600;
    }
</style>