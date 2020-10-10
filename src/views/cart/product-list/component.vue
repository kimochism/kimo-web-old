<template>
  <div class="container">
    <div id="ListBuy">
      <ProductItem v-for="product in products" :key="product.id" :customerBag="product"/>
    </div>
    <div class="footerShoppingList">
      <div class="continueCart">
        <span class="material-icons">keyboard_arrow_left</span>
        <span class="colorPrimary"><router-link to="/catalog">Continuar comprando</router-link></span>
      </div>
      <div>
        <span>Subtotal: <b>R$</b></span>
        <span class="price">24,90</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./../product-item/component.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },

  props: ['products']
};
</script>

<style src="./style.css"  scoped>
  
</style>