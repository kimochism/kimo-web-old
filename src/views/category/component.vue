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
  import MessageBar from "../shared/message-bar/component.vue";
  import Header from "../shared/header/component.vue";
  import Footer from "../shared/footer/component.vue";
  import { store, mutations } from "./store";
  export default {
    name: "Categories",
    components: {
      Item,
      MessageBar,
      Header,
      Footer,
    },
    computed: {
      categories() {
        return store.categories;
      },
      header() {
        return store.header;
      }
    },
    created() {
      mutations.listCategories();
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