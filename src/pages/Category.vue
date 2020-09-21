<template>
    <div>
        <Header :header="header" />
        <div class="container">
            <div class="content">
                <Item v-for="category in categories" :key="category.id" :category="category"/>
            </div>
        </div>
        <Footer/>
        <MessageBar/>
    </div>
</template>

<script>
    import Item from '../components/category/Item.vue'
    import MessageBar from '../components/navigation/MessageBar.vue'
    import Header from '../components/navigation/Header'
    import Footer from '../components/navigation/Footer.vue'
    import { CategoryService } from '../services/CategoryService'

    export default {
        name: "Categories",

        data() {
            return {
                categories: {},
                categoryService: new CategoryService(),
                header: {
                    title: "Categorias"
                }
            }
        },
        components: {
            Item,
            MessageBar,
            Header,
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

    .container {
        margin: 10%;
    }

    .content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>