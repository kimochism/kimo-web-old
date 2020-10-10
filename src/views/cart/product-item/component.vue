<template>
  <div class="item">
    <img
      class="imgProdutoBuy" v-if="customerBag.product.images && customerBag.product.images.length"
      :src="customerBag.product.images[0].url"
      alt=""
    />

    <div class="content">
      <div class="titleProdCart">
        <p>{{ customerBag.product.name }}</p>
        <p class="idProduct">#{{ customerBag.product.id }} </p>
      </div>

      <div class="sub-content">
        <div class="quantCart sizeSubItem">
          <button>
            <i class="fas fa-minus"></i></button>
          <span>{{ customerBag.quantity }}</span>
          <button>
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <div class="priceCart sizeSubItem">
          <p>{{ customerBag.product.price }}</p>
        </div>

        <div class="deleteItem sizeSubItem">
          <span>
            <i class="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",

  props: ['customerBag']
};
</script>

<style scoped>
  @import url("./style.css");
</style>