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
      <div
        v-on:click="navigateToProduct(product.id)"
        class="productBoxItem"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.images[0].url" alt width="270px" />
        <span for>{{ product.name }}</span>
        <span>
          <b>R$ {{ product.price }}</b>
        </span>
      </div>
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

import { actions, mapGetters } from './store';

export default {
  name: 'Catalog',

  components: {
    ProductFilter,
  },

  computed: {
    ...mapGetters
  },

  methods: {
    ...actions,

    navigateToProduct(id) {
      this.$router.push({ path: 'product', query: { id } });
    },

  },
  created() {
    actions.listProducts();
  },
};
</script>

<style scoped>
  @import url("./style.css");
</style>