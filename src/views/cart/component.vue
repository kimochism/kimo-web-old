<template>
  <div>
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