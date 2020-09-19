<template>
  <div>
    <Slider />
    <Warning />
    <Offer :offerProduct="offerProduct" />
    <ProductSlider />
    <Products :products="products" />
    <Gap />
    <Footer />
    <MessageBar />
  </div>
</template>

<script>
import MessageBar from "../components/navigation/MessageBar.vue";
import Slider from "../components/home/SliderHome.vue";
import Warning from "../components/home/Warning.vue";
import Offer from "../components/home/Offer.vue";
import Products from "../components/product/Products.vue";
import ProductSlider from "../components/product/product-slider/Slider.vue";
import Footer from "../components/navigation/Footer.vue";
import Gap from "../components/navigation/Gap.vue";
import { ProductService } from "../services/ProductService";

export default {
  name: "home",

  data() {
    return {
      products: {},
      offerProduct: {},
      productService: new ProductService(),
    };
  },

  components: {
    MessageBar,
    Slider,
    Warning,
    Offer,
    Products,
    Footer,
    Gap,
    ProductSlider,
  },

  methods: {
    listProducts() {
      this.productService
        .list({ page:1 ,limit: 6 })
        .then((products) => (this.products = products.data));
    },

    getOfferProduct() {
      this.productService
        .list({ offer: true, page: 1, limit: 1 })
        .then((products) => (this.offerProduct = products.data[0]));
    }
  },

  created() {
    this.listProducts();
    this.getOfferProduct();
  },
};
</script>

<style>
* {
  outline: none !important;
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
