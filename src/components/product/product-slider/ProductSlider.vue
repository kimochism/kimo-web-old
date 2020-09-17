<template>
  <div>
    <carousel :navigationEnabled="true">
      <slide><ProductItem /></slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ProductItem from '../../cart/ProductItem'

export default {
  name: "ProductSlider",

  data: function () {
    return {};
  },
  components: {
    Carousel,
    Slide,
    ProductItem
  },
};
</script>

<style>
    #container {
    padding: 0 60px;
    }

    .VueCarousel-slide {
    position: relative;
    background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
    }

    .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
</style>
