<template>
  <div>
    <div id="header">
      <h1>Catálogo</h1>
      <span>Produtos</span>
    </div>
    <!-- ******* -->
    <!-- Modelo pra componente -->
    <!-- ******* -->

    <div class="optionsHeader">
      <div class="options">
        <div class="firstOptionHeader">
          <span>Todos</span>
        </div>
        <div>
          <span>Camisetas</span>
        </div>
        <div>
          <span>Canecas</span>
        </div>
        <div>
          <span>Gamer</span>
        </div>
        <div>
          <span>Otaku</span>
        </div>
      </div>

      <div class="lastOptions">
        <div>
          <span v-on:click="toggleProductFilter()">Filtro</span>
        </div>
      </div>
    </div>

    <div id="ContainerCatalog">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <div class="btnSeeMore">
      <button v-on:click="listProducts()">Ver Mais</button>
    </div>

    <ProductFilter
      v-show="showProductFilter"
      :showProductFilter="showProductFilter"
      @returnShowProductFilter="showProductFilter = $event"
    />
  </div>
</template>

<script>

import ProductFilter from './product-filter/component.vue';
import ProductCard from './product-card/component';

import { actions, mapGetters } from './store';

export default {
  name: 'Catalog',

  components: {
    ProductFilter,
    ProductCard
  },

  computed: {
    ...mapGetters
  },

  methods: {
    ...actions,

  },
  created() {
    actions.listProducts();
  },
};
</script>

<style src="./style.css"  scoped>
  
</style>