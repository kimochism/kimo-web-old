<template>
  <div class="container">
    <div id="ListBuy">
      <ProductItem />
    </div>
    <div class="footerShoppingList">
      <div class="continueCart">
        <span class="material-icons">keyboard_arrow_left</span>
        <span class="colorPrimary">Continuar comprando</span>
      </div>
      <div>
        <span>Subtotal: <b>R$</b></span>
        <span class="price">24,90</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}

#ListBuy {
  width: 100%;
  margin-right: 50px;
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