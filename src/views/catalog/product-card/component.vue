<template>
  
  <div v-on:click="navigateToProduct(product.id)" class="productBoxItem" :key="product.id">
  
    <img :src="product.images[0].url" alt width="270px" />
    <span for>{{ product.name }}</span>
    <span>
      <b>R$ {{ product.price }}</b>
    </span>
  
  </div>
</template>

<script>

export default {
  name: 'ProductCard',

  props: ['product'],

  methods: {

    navigateToProduct(id) {
      this.$router.push({ path: 'produto', query: { id } });
    },

  },
};
</script>

<style scoped>

    .productBoxItem {
        width: 270px;
        height: 370px;
        flex: 1 1 270px;
        margin: 1%;
        cursor: pointer;
        flex-direction: column;
        align-items: center;
        display: flex;
    }

    .productBoxItem span {
        padding: 12px;
    }

</style>