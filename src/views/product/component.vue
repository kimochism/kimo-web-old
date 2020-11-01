<template>
  <div>
    <div id="ContainerProduct">
      <div class="subContainerProduct">
        <div class="containerImage">
          <img
            v-if="mainImage"
            :src="mainImage"
            alt
            width="100%"
          />
          <div class="picturesImg">
            <div
              class="boxImg"
              v-for="image of product.images"
              :key="image.url"
              @click="setMainImage(image.url)"
            >
              <img v-if="image && image.url" :src="image.url" alt />
            </div>
          </div>
        </div>
        <div class="infoProductBox">
          <h4>{{ product.name }}</h4>
          <span>REF: #{{ product.id }}</span>
          <div class="containerColorBoxes">
            <div 
              v-bind:class="[color.value, color.disabled ? 'color-disabled' : '']" 
              class="colorBox" 
              v-for="color in colors"
              :key="color.value" 
              v-on:click="color.disabled ? '' : selectColor(color.value, $event)">
            </div>
          </div>
          <div class="containerSizes">
            <div
              v-bind:class="size.disabled ? 'size-disabled' : ''"
              class="sizeBox"
              v-for="size in sizes" 
              :key="size.value"
              v-on:click="size.disabled ? '' : selectSize(size.value, $event)">
              {{size.value}}
            </div>
          </div>

          <div class="InfoAddons">
            <!-- <span>
              <span class="material-icons">emoji_people</span>
              Provador virtual
            </span> -->
            <span>
              <span class="material-icons">straighten</span>
              Tabela de Medidas
            </span>
          </div>

          <hr />

          <div class="containerPrice">
            <b>R$ {{ product.price }}</b>
            <span>4x de R$ {{ product.price/4 }}* s/juros no Cartão</span>
          </div>

          <div class="containerButtons">
            <button v-on:click="addToCustomerBag(product.id)">Adicionar ao carrinho</button>
            <button v-on:click="favor(product.id)">
              Favoritar
              <span class="material-icons" v-show="favorite">favorite</span>
              <span class="material-icons" v-show="!favorite">favorite_border</span>
            </button>
          </div>

          <div class="containerMessageAddon">
            <p>
              As modalidades, prazos e custos de entrega são válidas apenas para
              o item em consulta.
            </p>
          </div>

          <hr />

          <div class="containerFrete">
            <span>
              Simular Frete
            </span>
            <div class="subContainerFrete">
              <input 
                type="text"
                placeholder="Digite seu CEP" 
                v-model="cep" 
                v-mask="['#####-###']"
              />
              <button @click="calculateFreight()">OK</button>
            </div>
            <br />
            <a
              href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm"
              target="_blank"
              >Não sei meu CEP</a
            >
          </div>
          <div class="freightContainer" v-show="Object.keys(responseFreight).length > 0">
              <p>
                <span class="material-icons">local_shipping</span> 
                SEDEX R$
                {{responseFreight.amount}} em {{responseFreight.deliveryTime}} dias úteis
              </p>
          </div>
          <h1 class="we">
            Kimochism
            <br />気持ち
          </h1>
        </div>
      </div>
    </div>
    <h3 class="subtituloSlider">Semelhantes a este</h3>
    <Slider v-if="categoryId" :categoryId="categoryId" />
    <hr class="break_pdtc" />
    <Gap />
  </div>
</template>

<script>
import Slider from './product-slider/component.vue';
import Gap from '../shared/gap/component.vue';

import { mapGetters, actions } from './store';

export default {
  name: 'Product',
  components: {
    Slider,
    Gap,
  },

  computed: {
    ...mapGetters
  },

  methods: {
    getQuery(param) {
        return this.$route.query[param];
    },

    ...actions
  },

  created() {
    if (!this.$route.query.id) {
      this.$router.push({ path: "not-found" });
    }
  
    actions.getProductById(this.$route.query.id);
  },
};
</script>

<style src="./style.css"  scoped>

</style>