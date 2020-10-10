<template>
  <div id="ContainerOffer">
    <div class="HeaderOffer">
      <h3>Uma das promoções mais esperadas do mês de Setembro</h3>
      <h2><b>Oferta limitada</b></h2>
    </div>

    <div id="Offer">
      <div
        class="Box Product"
        v-if="offerProduct && offerProduct.images && offerProduct.images.length"
      >
        <img :src="offerProduct.images[0].url" width="100%" />
      </div>

      <div class="Box Info">
        <h2>{{ offerProduct.name }}</h2>
        
        <label for="">Moda Unisex</label>
        <br />
        <p class="price">
          <span>R$ {{ offerProduct.discount_price }}</span>
          <span>R$ {{ offerProduct.price }}</span>
        </p>
        <span>Ou por apenas 6x de R$ 25,28</span>

        <br />
        <br />

        <select>
          <option value="">Cor: Branco</option>
          <option value="">Cor: Preto</option>
          <option value="">Cor: Cinza</option>
        </select>

        <button>Adicionar ao Carrinho</button>
        <a href="">Ver detalhes do produto</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",

  props: ["offerProduct"],
};
</script>

<style scoped>
  @import url("./style.css");
</style>