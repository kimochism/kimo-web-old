<template>
  <div>

      <h1>SKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SUPRESSAAA ALEEEE ARRUMA AQUI</h1>
      <h2>componentizei isso para ficar mais legivel</h2>
      <h3> e vi que em todos os outros ecommerce o carrinho com os produtos + preço sem fica visivel para a cliente (card cinza logo a baixo)</h3>
      <h3>entao por favor arrume o css disso, eu ja fiz a base vc so precisa ajustar o layout obg</h3> 
      <h4>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk deu pull se fudeu</h4>
      <h4>obs removi o step de entrega mas vou fazer um novo com olucas</h4>
    <div id="ContainerCart">
      <md-steppers :md-active-step.sync="active" md-alternative>
        <md-step
          id="first"
          md-label="Produtos"
          md-description="Confira seus produtos"
          :md-done.sync="first"
        >
          <Products :products="products" :amount="amount"/>
        </md-step>

        <md-step
          id="second"
          md-label="Entrega"
          md-description="Confirme o local da entrega"
          :md-error="secondStepError"
          :md-done.sync="second"
        >
        entrega
        </md-step>

        <md-step id="third" md-label="Pagamento" md-description="Confirme o método de pagamento" :md-done.sync="third">
          <div class="subContainerBoxPayments">
            <Payment :products="products" :amount="amount" />
          </div>
        </md-step>
      </md-steppers>
    </div>
    <div>
      <Gap />
    </div>
  </div>
</template>

<script>
import Gap from "./../shared/gap/component.vue";

import Payment from "./steps/payment/component.vue";
import Products from "./steps/products/component.vue";

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
    Gap,
    Products,
    Payment,
  },
};
</script>

<style src="./style.css" scoped>
</style>