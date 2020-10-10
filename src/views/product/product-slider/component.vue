<template>
  <div>
    <carousel
      :navigationEnabled="true"
      navigationNextLabel="<span class='material-icons arrow-right'>keyboard_arrow_right</span>"
      navigationPrevLabel="<span class='material-icons arrow-right'>keyboard_arrow_left</span>"
      :loop="true"
      :perPageCustom="[[300, 1], [625, 2], [800, 3], [1024, 4]]"
      :autoplay="true"
      :autoplayTimeout="5000"
    >
      <slide>
        <div class="content" v-for="product in products" :key="product.id" :product="product">
          <img :src="product.images[0].url" alt="" />
          <div class="items">
            <span class="item-name">{{ product.name }}</span>
            <span class="item-price">{{ product.price }}</span>
            <span class="item-description">
              7x de R$ {{ (product.price / 7).toFixed(2) }} no cartão
            </span>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { CategoryService } from "../../../services/CategoryService";

export default {
  name: "Slider",
  props: ["categoryId"],

  data: function () {
    return {
      products: {},
      categoryService: new CategoryService(),
    };
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    listProductsByCategory(id) {
      this.categoryService
        .listProductsByCategory(id)
        .then((category) => (this.products = category[0].products));
    },
  },
  created() {
    this.listProductsByCategory(this.categoryId);
  },
};
</script>

<style scoped>
@import url("./style.css");
</style>
