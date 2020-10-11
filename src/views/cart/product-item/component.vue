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
            <i class="fas fa-minus" @click="updateQuantity(customerBag.quantity - 1, customerBag)"></i></button>
          <span>{{ customerBag.quantity }}</span>
          <button>
            <i class="fas fa-plus" @click="updateQuantity(customerBag.quantity + 1, customerBag)"></i>
          </button>
        </div>

        <div class="priceCart sizeSubItem">
          <p>{{ customerBag.product.price }}</p>
        </div>

        <div class="deleteItem sizeSubItem">
          <span>
            <i class="far fa-trash-alt" @click="destroyCustomerBag(customerBag.id)"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters, actions } from './store';

  export default {
    name: "ProductItem",

    props: ['customerBag'],

    computed: { ...mapGetters },

    methods: { ...actions }
  };
</script>

<style src="./style.css"  scoped>
  
</style>