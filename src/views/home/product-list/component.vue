<template>
  <div class="containerItems">
    <div class="headerItems">
      <h3>Conheça nosso vestuário</h3>
      <h2 class="bolded">Talvez você goste dessas ideais</h2>
    </div>

    <div class="subContainerItems">
      <div
        v-on:click="navigateToProduct(product.id)"
        class="item"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.images[0].url" alt />
        <div class="flexDescription">
          <span>{{ product.name }}</span>
          <span>R$ {{ product.price }}</span>
        </div>
      </div>
    </div>

    <div class="buttonLoadItems">
      <button>
        <router-link to="/catalog" tag="m"> Ver mais </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["products"],

  data() {
    return {};
  },

  methods: {
    navigateToProduct(id) {
      this.$router.push({ path: "product", query: { id } });
    },
  },
};
</script>

<style src="./style.css"  scoped>

</style>