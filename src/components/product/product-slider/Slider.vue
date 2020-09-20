<template>
  <div>
    <carousel 
      :navigationEnabled="true"
      navigationNextLabel="<span class='material-icons arrow-right'>keyboard_arrow_right</span>"
      navigationPrevLabel="<span class='material-icons arrow-right'>keyboard_arrow_left</span>"
      :loop="true" 
      :perPageCustom="[[300, 1],[625, 2], [800, 3],[1024, 4]]" 
      :autoplay="true" 
      :autoplayTimeout="5000">
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

<style scoped>
    #container {
      padding: 0 60px;
    }

    .VueCarousel{  
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

    .VueCarousel-navigation-button, .VueCarousel-navigation-next, .VueCarousel-navigation-prev{
      height: 50% !important;
    }
    
    .VueCarousel-navigation-button, .VueCarousel-navigation-next:hover, .VueCarousel-navigation-prev:hover{
      background: rgba(0,0,0,0.05);
    }
</style>
