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
          <md-button class="md-raised md-primary" @click="setError()"
            >Set error!</md-button
          >
        </md-step>

        <md-step id="third" md-label="Third Step" :md-done.sync="third">
          <p>asd</p>
          <p>asd</p>
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
import ProductList from "../components/cart/ProductList";
import MessageBar from "../components/navigation/MessageBar";
import Footer from "../components/navigation/Footer.vue";
import Card from "../components/payment/Card.vue";
import Gap from "../components/navigation/Gap.vue";

import { CustomerBagService } from "../services/CustomerBagService";

export default {
  name: "StepperLinear",
  data: () => ({
    active: "first",
    customerBagService: new CustomerBagService(),
    first: false,
    second: false,
    third: false,
    secondStepError: null,
    products: []
  }),
  methods: {
    setDone(id, index) {
      this[id] = true;

      this.secondStepError = null;

      if (index) {
        this.active = index;
      }
    },
    setError() {
      this.secondStepError = "This is an error!";
    },
  },

  created() {
    this.customerBagService.list({ loggedCustomer: true }).then(products => this.products = products)
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
@media screen and (max-width: 1024px) {
  #ContainerCart {
    flex-wrap: wrap;
  }
}
</style>