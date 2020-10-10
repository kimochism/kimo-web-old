<template>
  <div>
    <div id="ContainerCart">
      <md-steppers :md-active-step.sync="active" md-linear>
        <md-step
          id="first"
          md-label="First Step"
          md-description="Optional"
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
          md-label="Second Step"
          :md-error="secondStepError"
          :md-done.sync="second"
        >
          <Card />
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
          <md-button class="md-raised md-primary" @click="setError()"
            >Set error!</md-button
          >
        </md-step>

        <md-step id="third" md-label="Third Step" :md-done.sync="third">
          <div class="subContainerBoxPayments">
            <div class="boxBoleto">boletin</div>
            <div class="boxCard">
              <Card />
            </div>
          </div>
          <md-button class="md-raised md-primary" @click="setDone('third')"
            >Done</md-button
          >
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
import Card from "./form-payment/component.vue";
import Gap from "./../shared/gap/component.vue";

import { actions, mapGetters } from './store';

export default {
  name: 'StepperLinear',

  computed: {
    ...mapGetters
  },

  methods: {
    ...actions,
  },

  created() {
    actions.getCustomerBags();
  },
  components: {
    ProductList,
    Card,
    Gap,
  },
};
</script>

<style scoped>
  @import url("./style.css");
</style>