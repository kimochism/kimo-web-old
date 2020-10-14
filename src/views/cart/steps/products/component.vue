<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr">
    <div>
      <ProductItem
        :customerBag="product"
        v-for="product in products"
        :key="product.id"
      />
    </div>

    <MiniCart :products="products" :amount="amount" />

  </div>
</template>

<script>
import ProductItem from "./product-item/component.vue";
import MiniCart from "../shared/mini-cart/component.vue";

export default {
  name: "Products",

  props: ["products", "amount"],

  components: {
    ProductItem,
    MiniCart
  },
};
</script>

<style scoped src="./style.css">
</style>