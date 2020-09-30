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
    <Footer />
    <MessageBar />
  </div>
</template>

<script>
import MessageBar from "../components/navigation/MessageBar.vue";
import InstagramCase from "../components/home/InstagramCase.vue";
import { ProductService } from "../services/ProductService";
import Products from "../components/product/Products.vue";
import Footer from "../components/navigation/Footer.vue";
import Slider from "../components/home/SliderHome.vue";
import Warning from "../components/home/Warning.vue";
import Gap from "../components/navigation/Gap.vue";
import Offer from "../components/home/Offer.vue";

export default {
  name: "home",
  components: {
    MessageBar,
    Slider,
    Warning,
    Offer,
    Products,
    Footer,
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
* {
  outline: none !important;
}
.warning-shirt-maker {
  background-color: white;
  text-align: center;
  padding: 20px;
}

.linker {
  text-decoration: none;
  color: black;
}
.linker:hover {
  text-decoration: none;
  color: black;
}

.h1ShirtMaker {
  width: auto;
  text-transform: uppercase;
  line-height: 30px;
  padding: 8px;
  color: black;
  margin: 0 auto;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: "Kumbh Sans", sans-serif;
  text-rendering: optimizeLegibility !important;
  font-weight: 400;
  font-style: normal;
  overflow-x: hidden !important;
}
</style>
