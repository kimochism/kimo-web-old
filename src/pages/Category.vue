<template>
    <div class="categories-body">
        <span class="title">Categorias</span>
        <div class="categories-container">
            <Card :categorie="categorie1"></Card>
            <Card :categorie="categorie2"></Card>
            <Card :categorie="categorie3"></Card>
            <Card :categorie="categorie2"></Card>
            <Card :categorie="categorie1"></Card>
            <Card :categorie="categorie3"></Card>
        </div>
        <Footer/>
        <MessageBar/>
    </div>
</template>

<script>
    import Card from '../components/category/Card.vue'
    import MessageBar from '../components/navigation/MessageBar.vue'
    import Footer from '../components/navigation/Footer.vue'

    export default {
        name: "Categories",
        components: {
            Card,
            MessageBar,
            Footer
        },
        data() {
            return {
                categorie1: {
                    backgroundUrl: 'https://i.pinimg.com/564x/2a/3e/da/2a3edaa3cf5d3996a74846225e2ae5c9.jpg',
                    title: 'Otaku'
                },
                categorie2: {
                    backgroundUrl: 'https://i.pinimg.com/564x/bd/e6/62/bde662ee04fb0b517cf2610cce8fea16.jpg',
                    title: 'Gamer'
                },
                categorie3: {
                    backgroundUrl: 'https://i.pinimg.com/564x/cc/28/f9/cc28f92d03de23674705aa1b4bfb48b5.jpg',
                    title: 'Cartoons'
                },
            }
        }
    };
</script>

<style>
    .categories-container {
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
        padding: 5px 25px;
    }
    .title{
        font-size: 40px;
        font-weight: bold;
    }
    .categories-body{
        text-align: center;
    }
</style>