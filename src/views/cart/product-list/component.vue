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

<style scoped>
.container {
  width: 100%;
}

#ListBuy {
  width: 100%;
  
  min-height: 500px;
  max-height: 500px;
  margin-right: 50px;
  flex-direction: column;
  display: flex;
  margin: auto;
  overflow: auto;
}

/* footer */

.footerShoppingList {
  padding: 25px 15px;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.colorPrimary {
  color: #007bff;
}

.continueCart {
  align-items: center;
  display: flex;
}

.price {
  padding-right: 20px;
}

@media screen and (max-width: 800px) {
  .price {
    padding-right: 0px;
  }
}
</style>