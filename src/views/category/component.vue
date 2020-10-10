<template>
  <div>
    <Header :header="header" />
    <div class="container">
      <div class="content">
        <Item
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
    <Footer />
    <MessageBar />
  </div>
</template>

<script>
  import Item from "./category-item/component.vue";
  import MessageBar from "./../navigation/message-bar/component.vue";
  import Header from "./../navigation/header/component.vue";
  import Footer from "./../navigation/footer/component.vue";
  import { CategoryService } from "../services/CategoryService";

  export default {
    name: "Categories",
    components: {
      Item,
      MessageBar,
      Header,
      Footer,
    },
    data() {
      return {
        categories: {},
        categoryService: new CategoryService(),
        header: {
          title: "Categorias",
        },
      };
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
    margin: 50px 10%;
  }

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>