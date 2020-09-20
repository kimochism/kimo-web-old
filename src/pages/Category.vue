<template>
    <div class="categories-body">
        <span class="title">Categorias</span>
        <div class="categories-container">
            <Item v-for="category in categories" :key="category.id" :category="category"/>
        </div>
        <Footer/>
        <MessageBar/>
    </div>
</template>

<script>
    import Item from '../components/category/Item.vue'
    import MessageBar from '../components/navigation/MessageBar.vue'
    import Footer from '../components/navigation/Footer.vue'
    import { CategoryService } from '../services/CategoryService'

    export default {
        name: "Categories",

        data() {
            return {
                categories: {},
                categoryService: new CategoryService(),
            }
        },
        components: {
            Item,
            MessageBar,
            Footer
        },
        methods: {
            listCategories() {
                this.categoryService
                    .list({})
                    .then((categories) => (this.categories = categories));
            },
        },

        created() {
            this.listCategories();
        },
    };
</script>

<style scoped>
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