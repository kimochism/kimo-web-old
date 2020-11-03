<template>
  <div>
    <div class="ContainerCheckout">
      <div class="subCont">
        <section class="payment-form dark">
          <div class="container_payment">
            <div class="form-payment">
              <form @submit="getCardToken" id="paymentForm">
                <h3 class="title">Detalhes do comprador</h3>
                <div class="row">
                  <div>
                    <label for="email">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      class="myForm-control"
                    />
                  </div>
                </div>
                <div class="row myflex">
                  <div class="form-group col-sm-5 flexInfo">
                    <label for="docType">Tipo de documento</label>
                    <select
                      id="docType"
                      name="docType"
                      data-checkout="docType"
                      type="text"
                      class="myForm-control inputWidth"
                    ></select>
                  </div>
                  <div class="form-group">
                    <label for="docNumber">Documento</label>
                    <input
                      id="docNumber"
                      name="docNumber"
                      data-checkout="docNumber"
                      type="text"
                      class="myForm-control extraPadding"
                    />
                  </div>
                </div>
                <br />
                <h3 class="title">Detalhes do cartão</h3>
                <div class="row">
                  <div class="form-group col-sm-8">
                    <label for="cardholderName">Nome</label>
                    <input
                      id="cardholderName"
                      data-checkout="cardholderName"
                      type="text"
                      class="myForm-control"
                    />
                  </div>
                </div>
                <div class="marginGl">
                  <div class="form-group col-sm-8">
                        <label for="cardNumber">Número</label>
                        <input
                          type="text"
                          class="myForm-control input-background extraPadding"
                          id="cardNumber"
                          data-checkout="cardNumber"
                          onselectstart="return false"
                          onpaste="return false"
                          onCopy="return false"
                          onCut="return false"
                          onDrag="return false"
                          onDrop="return false"
                          autocomplete="off"
                          @input="guessPaymentMethod()"
                        />
                  </div>

                  <div class="caseItemsForm marginGl myflex">
                    <div class="form-group col-sm-4 medium">
                      <label for="">Data de validade</label>
                      <div class="input-group expiration-date manovsf">
                        <div class="flexInputs">
                          <input
                            type="text"
                            class="myForm-control"
                            placeholder="MM"
                            id="cardExpirationMonth"
                            data-checkout="cardExpirationMonth"
                            onselectstart="return false"
                            onpaste="return false"
                            onCopy="return false"
                            onCut="return false"
                            onDrag="return false"
                            onDrop="return false"
                            autocomplete="off"
                          />
                          <span class="date-separator">/</span>
                          <input
                            type="text"
                            class="myForm-control"
                            placeholder="YY"
                            id="cardExpirationYear"
                            data-checkout="cardExpirationYear"
                            onselectstart="return false"
                            onpaste="return false"
                            onCopy="return false"
                            onCut="return false"
                            onDrag="return false"
                            onDrop="return false"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-sm-4 marginAdd">
                      <label for="securityCode">CVV</label>
                      <input
                        id="securityCode"
                        data-checkout="securityCode"
                        type="text"
                        class="myForm-control"
                        onselectstart="return false"
                        onpaste="return false"
                        onCopy="return false"
                        onCut="return false"
                        onDrag="return false"
                        onDrop="return false"
                        autocomplete="off"
                      />
                    </div>
                  </div>

                  <div class="caseItemsForm marginGl">

                    <div class="large">
                      <div id="issuerInput" class="form-group col-sm-12 hidden">
                        <label for="issuer">Issuer</label>
                        <select
                          id="issuer"
                          name="issuer"
                          data-checkout="issuer"
                          class="myForm-control"
                          @input="updateInstallmentsForIssuer()"
                        ></select>
                      </div>
                      <div class="form-group col-sm-12">
                        <label for="installments">Parcelas</label>
                        <select
                          type="text"
                          id="installments"
                          name="installments"
                          class="myForm-control"
                        ></select>
                      </div>
                    </div>
                  </div>

                <div class="form-group col-sm-12">
                  <input
                    type="hidden"
                    name="transactionAmount"
                    id="amount"
                    :value="amount"
                  />
                  <input
                    type="hidden"
                    name="paymentMethodId"
                    id="paymentMethodId"
                  />
                  <input type="hidden" name="description" id="description" />
                  <br />
                  <button type="submit" class="myBtnBlack">Finalizar</button>
                  <br />
                  <br>
                  <a id="go-back">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      class="chevron-left"
                    >
                      <path
                        fill="#009EE3"
                        fill-rule="nonzero"
                        id="chevron_left"
                        d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"
                      ></path>
                    </svg>
                    Continuar comprando
                  </a>
                </div>
              </div>
            </form>
          </div>
          </div>
        </section>
      </div>
        <MiniCart :products="products" :amount="amount" />
    </div>

  </div>
</template>

<script>
import { actions, mapGetters } from "./store";

import MiniCart from '../shared/mini-cart/component.vue';

export default {
  name: "Payment",

  props: ["products", "amount"],

  computed: {
    ...mapGetters,
  },

  methods: {
    ...actions,
  },

  components: {
    MiniCart
  },

  updated() {
    actions.buildDescription(this.products);
  },
};
</script>

<style scoped src="./style.css">
</style>