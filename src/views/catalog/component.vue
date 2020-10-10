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

<style scoped>
#header {
  height: 320px;
  background-image: url('../../assets/bg.png');
  background-size: cover;
  background-position: top;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
}

#header h1 {
  font-weight: bold;
}

#header span {
  font-size: 16px;
  text-transform: uppercase;
}

/* ^ modelo pra componente */

.optionsHeader {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 130px;
  justify-content: space-between;
  display: flex;
}
.optionsHeader span {
  cursor: pointer;
}

.options {
  display: flex;
}

.options div {
  padding: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.firstOptionHeader {
  padding-left: 0px !important;
}

.lastOptions {
  padding: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#ContainerCatalog {
  max-width: 1250px;
  margin: 50px auto;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
}

.btnSeeMore {
  max-width: 1250px;
  margin: 50px auto;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.btnSeeMore button {
  background-color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  border: 0px;
  padding: 12px;
  width: 250px;
  margin: 0px;
}
</style>