<template>
  <div>
    <div id="ContainerProduct">
      <div class="subContainerProduct">
        <div class="containerImage">
          <img
            v-if="product && product.images && product.images.length"
            :src="product.images[0].url"
            alt
            width="100%"
          />
          <div class="picturesImg">
            <div
              class="boxImg"
              v-for="image of product.images"
              :key="image.url"
            >
              <img v-if="image && image.url" :src="image.url" alt />
            </div>
          </div>
        </div>

        <div class="infoProductBox">
          <h4>{{ product.name }}</h4>
          <span>REF: #{{ product.id }}</span>
          <div class="containerColorBoxes">
            <div class="colorBox black"></div>
            <div class="colorBox white"></div>
            <div class="colorBox gray"></div>
            <div class="colorBox pink"></div>
          </div>
          <div class="containerSizes">
            <div class="sizeBox">P</div>
            <div class="sizeBox">M</div>
            <div class="sizeBox">G</div>
          </div>

          <div class="InfoAddons">
            <!-- <span>
                        <span class="material-icons">emoji_people</span>
                        Provador virtual
            </span>-->
            <span>
              <span class="material-icons">straighten</span>
              Tabela de Medidas
            </span>
          </div>

          <hr />

          <div class="containerPrice">
            <b>R$ {{ product.price }}</b>
            <span>4x de R$ 17,48* s/juros no Cartão</span>
          </div>

          <div class="containerButtons">
            <button v-on:click="addToCustomerBag(product.id)">Adicionar ao carrinho</button>
            <button>Favoritar</button>
          </div>

          <div class="containerMessageAddon">
            <p>
              As modalidades, prazos e custos de entrega são válidas apenas para
              o item em consulta.
            </p>
          </div>

          <hr />

          <div class="containerFrete">
            <span>Simular Frete</span>
            <div class="subContainerFrete">
              <input type="text" placeholder="Digite seu CEP" />
              <button>OK</button>
            </div>
            <br />
            <a
              href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm"
              target="_blank"
              >Não sei meu CEP</a
            >
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
import Slider from "./product-slider/component.vue";
import Gap from "../shared/gap/component.vue";

import { ProductService } from "../../services/ProductService";
import { CustomerBagService } from "../../services/CustomerBagService";

export default {
  name: "Product",
  components: {
    Slider,
    Gap,
  },
  data() {
    return {
      productService: new ProductService(),
      customerBagService: new CustomerBagService(),
      product: {},
      categoryId: null,
    };
  },
  methods: {
    getProductById() {
      const id = this.getQuery("id");

      this.productService.show(id).then((product) => {
        this.product = product;
        this.categoryId = product.categories[0].id;
      });
    },
    getQuery(param) {
      return this.$route.query[param];
    },
    addToCustomerBag(productId) {
      if (!localStorage.getItem("Authorization")) {
        document.getElementById("CadastroCase").style.display = "none";
        document.getElementById("LoginCase").style.display = "flex";
        document.getElementById("ContainerLogin").style.display = "flex";
        return;
      }

      this.customerBagService.store({ productId })
        .then(result => alert('produto adicionado pessoas do front colocar um bagui bonito aq'))
        .catch(err => alert(err.message));
    },
  },
  created() {
    if (!this.$route.query.id) {
      this.$router.push({ path: "not-found" });
    }
    this.getProductById();
  },
};
</script>

<style scoped>
@import url("./style.css");
</style>