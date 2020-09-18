<template>
  <div>
    <carousel :navigationEnabled="true" :perPageCustom="[[300, 1],[625, 2], [800, 3],[1024, 4]]" :autoplay="true">
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
      <slide><Item /></slide>
    </carousel>
  </div>
</template>

<script>

import { Carousel, Slide } from "vue-carousel"
import Item from './Item.vue'

export default {
  name: "Slider",

  data: function () {
    return {}
  },
  components: {
    Carousel,
    Slide,
    Item
  },
};
</script>

<style>
    #container {
      padding: 0 60px;
    }

    .VueCarousel-slide {
      position: relative;
      padding-top: 50px;
      cursor: pointer;
      color: #fff;
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
