<template>
  <div>
    <Slider />
    <Warning />
    <div class="warning-shirt-maker">
      <router-link to="/sua-estampa" class="linker">
        <h1 class="h1ShirtMaker" style="display: none;">Faça sua estampa! </h1>
      </router-link>
    </div>
    <Offer :offerProduct="offerProduct" />
    <InstagramCase />
    <ProductList :products="products" />
    <Gap />
  </div>
</template>

<script>

import InstagramCase from './instagram-case/component.vue';
import ProductList from './product-list/component.vue';
import Slider from './slider-home/component.vue';
import Warning from './warning/component.vue';
import Gap from '../shared/gap/component.vue';
import Offer from './offer/component.vue';

import { mapGetters, actions } from './store';

export default {
  name: "home",
  components: {
    Slider,
    Warning,
    Offer,
    ProductList,
    Gap,
    InstagramCase,
  },

  computed: {
    ...mapGetters
  },

  methods: {
    ...actions
  },
  created() {
    actions.listProducts();
    actions.getOfferProduct();
  },
};
</script>

<style src="./style.css"  scoped>

</style>
