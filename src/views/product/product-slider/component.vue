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
        <Item
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
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
import Item from "./Item.vue";
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
    Item,
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
#container {
  padding: 0 60px;
}

.VueCarousel {
  width: 70vw;
  margin: 0 auto;
}

.VueCarousel-slide {
  position: relative;
  padding-top: 100px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  min-height: 80px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.VueCarousel-navigation-button,
.VueCarousel-navigation-next,
.VueCarousel-navigation-prev {
  height: 50% !important;
}

.VueCarousel-navigation-button,
.VueCarousel-navigation-next:hover,
.VueCarousel-navigation-prev:hover {
  background: rgba(0, 0, 0, 0.05);
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 5px;
  cursor: pointer;
}

.content:hover {
  background: rgba(0, 0, 0, 0.08);
}

img {
  width: 100%;
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-weight: normal;
  padding: 10px;
  color: black;
  font-size: 16px;
}

.img:hover {
  width: 120%;
  transition: 1s;
}

.item-price {
  font-weight: bold;
  font-size: 14px;
}

.item-description {
  color: gray;
  font-size: 14px;
}

</style>
