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

<style src="./style.css"  scoped>
</style>