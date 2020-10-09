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
    <Footer />
    <MessageBar />
  </div>
</template>

<script>
import Slider from "../components/product/product-slider/Slider.vue";
import MessageBar from "../components/navigation/MessageBar";
import Footer from "../components/navigation/Footer.vue";
import Gap from "../components/navigation/Gap.vue";

import { ProductService } from "../services/ProductService";
import { CustomerBagService } from "../services/CustomerBagService";

export default {
  name: "Product",
  components: {
    MessageBar,
    Footer,
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
        document.getElementById("CadastroCase").style.display = "flex";
        document.getElementById("LoginCase").style.display = "none";
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
/* Container Big daddy */
#ContainerProduct {
  padding: 50px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
  display: flex;
}
.we {
  margin: 50px 0px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
}
/* Container sub daddy */
.subContainerProduct {
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}
.containerImage {
  background-position: center;
  background-size: cover;
  width: auto;
  min-width: 360px;
  margin: 0 auto;
  width: 30vw;
}
.picturesImg {
  width: 100%;
  min-width: 350px;
  margin: 0 auto;
  margin-bottom: 25px;
  justify-content: center;
  display: flex;
}
.boxImg {
  width: 80px;
  height: 80px;
  margin: 5px 5px;
  border: 1px solid rgba(0, 0, 0, 0.226);
  overflow: auto;
  justify-content: center;
  align-items: center;
  display: flex;
}
.boxImg:hover {
  border: 2px solid black;
  cursor: pointer;
}

.break_pdtc {
  height: 60px;
  border: 0px;
}

.boxImg img {
  width: 90%;
  height: 90%;
}
.infoProductBox {
  background-color: white;
  width: 330px;
  padding: 0 20px;
  margin: 0 auto;
  margin-left: 50px;
  justify-content: center;
  flex-direction: column;
  display: flex;
}
.infoProductBox h4 {
  font-weight: bold;
  font-size: 20px;
  padding: 0px 0px;
  margin: 0px;
  width: 300px;
}
.infoProductBox span {
  font-size: 12px;
  color: grey;
}
.infoProductBox hr {
  width: 90%;
  border-top: 1px solid rgb(224, 224, 224);
}
.containerPrice {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 5%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  display: flex;
}
.containerPrice b {
  margin-bottom: 10px;
}
.containerButtons {
  width: 100%;
}
.containerButtons button {
  width: 100%;
  border: 0px;
  padding: 8px;
  background-color: #00ae7c;
  letter-spacing: 2px;
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
  border: 0px;
}
.containerButtons button:nth-child(1) {
  padding: 14px;
}
.containerButtons button:nth-child(2) {
  background-color: transparent;
  color: black;
  border: 1px solid rgb(224, 224, 224);
  font-size: 12px;
}
.containerMessageAddon {
  width: 100%;
  text-align: center;
  margin-top: 4%;
  font-size: 10px;
  padding: 10px 32px;
}
.containerFrete {
  width: 100%;
  padding: 18px;
}
.containerFrete span {
  font-weight: bold;
}
.subContainerFrete {
  width: 100%;
  text-align: center;
  display: flex;
}
.subContainerFrete input {
  width: 80%;
  margin-right: 5%;
  padding: 10px;
  border: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.subContainerFrete button {
  width: 100px;
  border: 0px;
  margin: 0.2%;
  background-color: #000;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  border: 0px;
}
/* Cores */
.containerColorBoxes {
  width: 200px;
  padding: 15px 0px;
  justify-content: space-around;
  display: flex;
}
.colorBox {
  width: 25px;
  height: 25px;
  padding: 3px;
}
.colorBox::before {
  position: absolute;
  display: block;
  content: "";
  cursor: pointer;
  border: 2px solid black;
  height: 25px;
  width: 25px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.colorBox:active {
  border: 2px solid black;
}
/* Tamanhos */
.containerSizes {
  width: 200px;
  padding: 15px 0px;
  display: flex;
}
.sizeBox {
  width: 25px;
  cursor: pointer;
  height: 25px;
  margin: 1% 6.9%;
  border: 1px solid rgb(196, 196, 196);
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  display: flex;
}
.sizeBox:active {
  border: 2px solid black;
}
/* pós medidas */
.InfoAddons {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.InfoAddons span {
  margin-top: 3%;
  font-size: 13px;
  align-items: center;
}
.black {
  background-color: rgb(24, 24, 24);
}
.gray {
  background-color: grey;
}
.white {
  background-color: rgb(218, 218, 218);
}
.pink {
  background-color: rgb(240, 155, 152);
}
/* Quebra de linha */
.breakAd {
  width: 100vw;
  background-image: url(https://images8.alphacoders.com/632/thumb-1920-632051.png);
  background-position: top;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100px;
}
.breakAd h1 {
  font-weight: bold;
  text-align: center;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
}
.subtituloSlider {
  width: 70vw;
  padding: 35px;
  padding-bottom: 0px;
  border-top: 1px solid rgb(226, 226, 226);
  font-weight: bold;
  margin: 0 auto;
}

@media screen and (max-width: 800px) {
  .infoProductBox {
    margin: 0 auto;
  }
}
</style>