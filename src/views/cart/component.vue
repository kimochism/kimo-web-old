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
      <Footer />
      <MessageBar />
    </div>
  </div>
</template>

<script>
import ProductList from './product-list/component.vue';
import MessageBar from './../shared/message-bar/component.vue';
import Footer from './../shared/footer/component.vue';
import Card from './form-payment/component.vue';
import Gap from './../shared/gap/component.vue';

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
    Footer,
    MessageBar,
    Gap,
  },
};
</script>

<style scoped>
#ContainerCart {
  padding: 50px 0px;
  width: 100%;
  min-width: 100%;
  justify-content: center;
  display: flex;
}
.md-steppers.md-theme-default .md-stepper-number {
  border-radius: 1px;
}
.md-steppers.md-theme-default {
  width: 80%;
  min-height: 500px;
}
.subContainerBoxPayments {
  padding: 0px 0px;
  flex-direction: row;
  display: flex;
}

.boxBoleto {
  width: 50%;
  justify-content: center;
  display: flex;
}
.boxCard {
  width: 50%;
  justify-content: center;
  display: flex;
}

@media screen and (max-width: 1024px) {
  #ContainerCart {
    flex-wrap: wrap;
  }
}
</style>