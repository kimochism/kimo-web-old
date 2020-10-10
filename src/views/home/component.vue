<template>
  <div>
    <Slider />
    <Warning />
    <div class="warning-shirt-maker">
      <router-link to="/shirtMaker" class="linker">
        <h1 class="h1ShirtMaker">Faça sua estampa!</h1>
      </router-link>
    </div>
    <Offer :offerProduct="offerProduct" />
    <InstagramCase />
    <Products :products="products" />
    <Gap />
  </div>
</template>

<script>
import InstagramCase from "./instagram-case/component.vue";
import Products from "./product-list/component.vue";
import Slider from "./slider-home/component.vue";
import Warning from "./warning/component.vue";
import Gap from "../shared/gap/component.vue";
import Offer from "./offer/component.vue";
import { ProductService } from "../../services/ProductService";

export default {
  name: "home",
  components: {
    Slider,
    Warning,
    Offer,
    Products,
    Gap,
    InstagramCase,
  },
  data() {
    return {
      products: {},
      offerProduct: {},
      productService: new ProductService(),
    };
  },
  methods: {
    listProducts() {
      this.productService
        .list({ page: 1, limit: 6 })
        .then((products) => (this.products = products.data));
    },
    getOfferProduct() {
      this.productService
        .list({ offer: true, page: 1, limit: 1 })
        .then((products) => (this.offerProduct = products.data[0]));
    },
  },
  created() {
    this.listProducts();
    this.getOfferProduct();
  },
};
</script>

<style scoped>
@import url("./style.css");
</style>
