<template>
  <div>
    <div id="ContainerCart">
      <md-steppers :md-active-step.sync="active" md-alternative>
        <md-step
          id="first"
          md-label="Produtos"
          md-description="Verifique se os seus produtos"
          :md-done.sync="first"
        >
          <ProductList :products="products" />
          <md-button
            class="md-raised md-primary"
            @click="setDone('first', 'second')"
            >Continue</md-button
          >
        </md-step>

        <md-step
          id="second"
          md-label="Entrega"
          md-description="Confirme o local da entrega"
          :md-error="secondStepError"
          :md-done.sync="second"
        >
          <div class="subContainerLocation">
            <div class="box Left">
              <div class="myLocations">
                <h2>Meus endereços</h2>
                <div class="itemAdress">
                  <div class="editarItemAddress">
                    <span class="material-icons"> create </span>
                  </div>
                  <div class="infoItemAddress">
                    <span>Rua José Pessota</span>
                    <span>Pq Santa Rita</span>
                    <span>CEP: 0815-020</span>
                    <span>São Paulo - SP</span>
                  </div>
                  <div class="deleteItemAddress">
                    <span class="material-icons"> clear </span>
                  </div>
                </div>
              </div>
              <div class="newLocation">
                <h2>Adicionar novo endereço</h2>
                <div class="addNewLocation">
                  <div class="inpAdress">
                    <label for="">Rua</label>
                    <input type="text" placeholder="Rua Avenida Paulista" />
                  </div>

                  <div class="inpAdress">
                    <label for="">Número</label>
                    <input type="text" placeholder="123" />
                  </div>

                  <div class="inpAdress">
                    <label for="">CEP</label>
                    <input type="text" placeholder="00000-000" />
                  </div>
                </div>

                <button class="btnBlack">Adicionar</button>
              </div>
            </div>

            <div class="box Right">
              <h1>Selecione um método de entrega</h1>
              <div class="subContainerFrete">

                <div class="itemDeliveryMet">
                  <div>
                    <input type="radio" id="entrega">
                    <label for="entrega">Sedex</label>
                  </div>
                  <label for="">Grátis</label>
                </div>

                <div class="itemDeliveryMet">
                  <div>
                    <input type="radio" id="entrega">
                    <label for="entrega">E-Sedex</label>
                  </div>
                  <label for="">Grátis</label>
                </div>

              </div>
            </div>
          </div>

          <md-button
            class="md-raised md-primary"
            @click="setDone('second', 'third')"
            >Continue</md-button
          >
          <md-button
            class="md-raised md-primary"
            @click="setDone('second', 'third')"
            >Continue</md-button
          >
          <md-button
            class="md-raised md-primary"
            @click="setError()"
            md-error="xuuxuxuxbeleza"
            >Verifique os campos</md-button
          >
        </md-step>

        <md-step
          id="third"
          md-label="Pagamento"
          md-description="Confirme o método de pagamento"
          :md-done.sync="third"
        >
          <div class="subContainerBoxPayments">
            <Checkout />
          </div>
          <!-- <md-button class="md-raised md-primary" @click="setDone('third')"
            >Done</md-button -->
        </md-step>
      </md-steppers>
    </div>
    <div>
      <Gap />
    </div>
  </div>
</template>

<script>
import ProductList from "./product-list/component.vue";
import Gap from "./../shared/gap/component.vue";

import Checkout from "./checkout/component.vue";

import { actions, mapGetters } from "./store";

export default {
  name: "StepperLinear",

  computed: {
    ...mapGetters,
  },

  methods: {
    ...actions,
  },

  created() {
    actions.getCustomerBags();
  },
  components: {
    ProductList,
    Gap,
    Checkout,
  },
};
</script>

<style src="./style.css" scoped>
</style>