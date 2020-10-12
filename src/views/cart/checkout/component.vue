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
                    <label for="email">E-Mail</label>
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
                      class="myForm-control"
                    ></select>
                  </div>
                  <div class="form-group col-sm-7">
                    <label for="docNumber">Número do documento</label>
                    <input
                      id="docNumber"
                      name="docNumber"
                      data-checkout="docNumber"
                      type="text"
                      class="myForm-control"
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

                  <div class="caseItemsForm marginGl">
                    <div class="form-group col-sm-4 medium">
                      <label for="">Data de validade</label>
                      <div class="input-group expiration-date">
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
                    <div class="form-group col-sm-4">
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
                    <div class="medium">
                      <div class="form-group col-sm-8">
                        <label for="cardNumber">Número</label>
                        <input
                          type="text"
                          class="myForm-control input-background"
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
                    </div>

                    <div class="medium">
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
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="subCont">
        <section class="payment-form dark">
          <div class="container_payment">
            <div class="form-payment">
              <div class="products">
                <h2 class="title">Seu carrinho</h2>
                <div class="item">
                  <span class="price" id="summary-price"></span>
                  <p class="item-name" v-for="bag in products" :key="bag.id">
                    {{ bag.quantity }}x {{ bag.product.name }} 
                  <span id="summary-quantity"></span>
                  </p>
                </div>
                <div class="total">
                  Total:
                  <span class="price" id="summary-total">R$ {{ amount }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { actions, mapGetters } from "./store";

export default {
  name: "Checkout",

  props: ["products", "amount"],

  computed: {
    ...mapGetters,
  },

  methods: {
    ...actions,
  },

  updated() {
    actions.buildDescription(this.products);
  },
};
</script>

<style scoped src="./style.css">
</style>