<template>
  <div>
    <Slider/>
    <Warning/>
    <Offer/>
    <Products/>
    <Gap/>
    <Footer/>
    <MessageBar/>
  </div>
</template>

<script>

import MessageBar from '../components/Messagebar.vue'
import Slider from '../components/Slider.vue'
import Warning from '../components/Warning.vue'
import Offer from '../components/Offer.vue'
import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'
import Gap from '../components/Gap.vue'
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
    Gap
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
