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
  </div>
</template>

<script>

import InstagramCase from './instagram-case/component.vue';
import Products from './product-list/component.vue';
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
    Products,
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
