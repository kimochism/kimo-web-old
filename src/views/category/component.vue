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
  </div>
</template>

<script>
  import Item from "./category-item/component.vue";
  import Header from "../shared/header/component.vue";
  import { actions, mapGetters } from "./store";

  export default {
    name: "Categories",
    components: {
      Item,
      Header,
    },
    computed: {
      ...mapGetters
    },
    created() {
      actions.listCategories();
    },
  };
</script>
  
<style src="./style.css"  scoped>
  
</style>