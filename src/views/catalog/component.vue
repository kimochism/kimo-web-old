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
    <Footer />
    <MessageBar />
  </div>
</template>

<script>

import MessageBar from "./../shared/message-bar/component.vue";
import Footer from "./../shared/footer/component.vue";
import ProductFilter from "./product-filter/component.vue";
import { ProductService } from "../../services/ProductService";
// import router from '../router';

export default {
  name: "Catalog",
  components: {
    MessageBar,
    Footer,
    ProductFilter,
  },
  data() {
    return {
      productService: new ProductService(),
      products: [],
      page: 0,
      showProductFilter: false,
    };
  },
  methods: {
    listProducts() {
      this.page++;
      this.productService
        .list({ page: this.page, limit: 8 })
        .then(
          (products) => (this.products = [...this.products, ...products.data])
        );
    },
    navigateToProduct(id) {
      this.$router.push({ path: "product", query: { id } });
    },
    toggleProductFilter() {
      this.showProductFilter = !this.showProductFilter;
    },
  },
  created() {
    this.listProducts();
  },
};
</script>

<style scoped>
#header {
  height: 320px;
  background-image: url("../../assets/bg.png");
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

.productBoxItem {
  width: 270px;
  height: 370px;
  flex: 1 1 270px;
  margin: 1%;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.productBoxItem span {
  padding: 12px;
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