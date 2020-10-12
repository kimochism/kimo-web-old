<template>
  <div class="container">
    <div id="ListBuy">
      <ProductItem v-for="product in products" :key="product.id" :customerBag="product"/>
    </div>
    <div class="footerShoppingList">
      <div class="continueCart">
        <span class="material-icons">keyboard_arrow_left</span>
        <span class="colorPrimary"><router-link to="/catalogo">Continuar comprando</router-link></span>
      </div>
      <div>
        <span>Subtotal: <b>R$</b></span>
        <span class="price">{{ amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./../product-item/component.vue";

import { store, actions, mapGetters } from './store';

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },

  computed: { ...mapGetters },

  methods: { ...actions },

  props: ['products', 'amount'],
};
</script>

<style src="./style.css"  scoped>
  
</style>