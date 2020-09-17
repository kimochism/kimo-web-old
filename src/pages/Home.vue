<template>
  <div>
    <Slider/>
    <Warning/>
    <Offer/>
    <ProductSlider/>
    <Products/>
    <Gap/>
    <Footer/>
    <MessageBar/>
  </div>
</template>

<script>

import MessageBar from '../components/navigation/MessageBar.vue'
import Slider from '../components/home/SliderHome.vue'
import Warning from '../components/home/Warning.vue'
import Offer from '../components/home/Offer.vue'
import Products from '../components/product/Products.vue'
import ProductSlider from '../components/product/product-slider/ProductSlider.vue'
import Footer from '../components/navigation/Footer.vue'
import Gap from '../components/navigation/Gap.vue'
import { ProductService } from '../services/ProductService'

export default {
  name: 'home',
  components: {
    MessageBar,
    Slider,
    Warning,
    Offer,
    Products,
    Footer,
    Gap,
    ProductSlider
  },

  mounted() {
    new ProductService().list().then(res => console.log(res));
  }
}
</script>

<style>

  *{
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

  html{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }

  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Kumbh Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    font-weight: 400;
    font-style: normal;
    overflow-x: hidden !important;
  }
  
</style>
