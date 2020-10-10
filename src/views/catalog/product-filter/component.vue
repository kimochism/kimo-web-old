<template>
  <div class="container" v-show="showProductFilter">
    <div class="overlay" v-on:click="closeFilter()"></div>
    <div class="content">
      <span class="material-icons" v-on:click="closeFilter()"> close </span>
      <div class="filter">
        <div class="filter-item">
          <p class="title">Ordenar por</p>
          <span class="item"> Padrão </span>
          <span class="item"> Camisetas </span>
          <span class="item"> Canecas </span>
          <span class="item"> Gamer </span>
          <span class="item"> Otaku </span>
        </div>
        <div class="filter-item">
          <p class="title">Tamanho</p>
          <span class="item"> PP </span>
          <span class="item"> P </span>
          <span class="item"> M </span>
          <span class="item"> G </span>
          <span class="item"> GG </span>
        </div>
      </div>
      <div class="filter">
        <div class="filter-item">
          <p class="title">Tags</p>
          <span class="item"> Padrão </span>
          <span class="item"> Camisetas </span>
          <span class="item"> Canecas </span>
          <span class="item"> Gamer </span>
          <span class="item"> Otaku </span>
        </div>
        <div class="filter-item">
          <p class="title">Preço</p>
          <span class="item"> R$10 - R$30 </span>
          <span class="item"> R$30 - R$50 </span>
          <span class="item"> R$50 - R$80 </span>
          <span class="item"> R$80 - R$120 </span>
          <span class="item"> R$120 - R$150 </span>
        </div>
      </div>
      <div class="filter-one">
        <div class="filter-item">
          <p class="title">Cor</p>
          <span class="item">
            <span class="color-black"></span>
            Preto
          </span>
          <span class="item">
            <span class="color-gray"></span>
            Cinza
          </span>
          <span class="item">
            <span class="color-white"></span>
            Branco
          </span>
          <span class="item">
            <span class="color-blue"></span>
            Azul
          </span>
          <span class="item">
            <span class="color-pink"></span>
            Rosa
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  props: ["showProductFilter"],
  methods: {
    closeFilter() {
      this.showProductFilter = !this.showProductFilter;
      this.$emit("returnShowProductFilter", this.showProductFilter);
    },
  },
};
</script>

<style src="./style.css"  scoped>
  
</style>