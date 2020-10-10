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

<style scoped>
h3,
h2 {
  text-align: center;
}
.containerItems {
  background-color: white;
  padding: 50px;
  padding-top: 0px;
}
.headerItems {
  padding: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
.headerItems h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
  font-weight: 100;
  margin: 10px;
}
.bolded {
  font-weight: bold;
}
.subContainerItems {
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
}
.subContainerItems div {
  flex: 1 1 380px;
  margin: 10px;
}
.item {
  overflow: hidden;
  cursor: pointer;
}
.item img {
  width: 100%;
  display: block;
}
/* pro produto sumir */
/* .killua:hover > img{
        opacity: 0;
    }
    .killua:hover {
        background-image: url(https://media.tenor.com/images/c4aca1d444d54ae92c796b3f6bbb76dc/tenor.gif);
        background-size: 100%;
        background-repeat: no-repeat;
    }     */
/* e aparecer animação */
.flexDescription {
  flex-direction: column;
  display: flex;
}
.buttonLoadItems {
  justify-content: center;
  display: flex;
  margin: 50px;
}
.buttonLoadItems button {
  width: 300px;
  border-radius: 0px;
  padding: 15px;
  color: white;
  background-color: black;
  border: 1px solid black;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}
.buttonLoadItems button:hover {
  background-color: white;
  color: black;
}
.flexDescription {
  padding: 8px 0px;
  justify-content: space-between;
  display: flex;
}
.flexDescription span {
  text-align: center;
  text-transform: uppercase;
}
.flexDescription span:nth-child(2n) {
  font-weight: bold;
}

@media screen and (max-width: 800px){
  .headerItems{
    padding: 40px 0px;
  }
}
</style>