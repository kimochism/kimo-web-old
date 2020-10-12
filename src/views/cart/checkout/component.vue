<template>
  <div class="ContainerCheckout">

    <div class="subCont">
      <section class="payment-form dark">
        <div class="container_payment">
          <div class="form-payment">
            <form action="/process_payment" method="post" id="paymentForm">
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
                <div class="form-group col-sm-5 flexInfo" >
                  <label for="docType">Tipo de documento</label>
                  <select
                    id="docType"
                    name="docType"
                    data-checkout="docType"
                    type="text"
                    class="myForm-control"
                  >
                    <option value="">CPF</option>
                    <option value="">CNPJ</option>
                  </select>
                </div>
                <div class="form-group col-sm-7 mediumT marginAdd">
                  <label for="docNumber">Número do documento</label>
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
                
                <div class="marginGl">
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
                      />
                  </div>
                </div>

                <div class="caseItemsForm marginGl myflex">
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

                  

                  <div id="issuerInput" class="form-group col-sm-12 hidden">
                    <label for="issuer">Issuer</label>
                    <select
                      id="issuer"
                      name="issuer"
                      data-checkout="issuer"
                      class="myForm-control"
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

                <div class="form-group col-sm-12">
                  <input
                    type="hidden"
                    name="transactionAmount"
                    id="amount"
                    value="10"
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

    <div class="subCont">
      <section class="payment-form dark">
        <div class="container_payment">
          <div class="form-payment">
            <div class="products">
              <h2 class="title">Seu carrinho</h2>
              <div class="item">
                <span class="price" id="summary-price"></span>
                <p class="item-name">
                  Book x <span id="summary-quantity"></span>
                </p>
                <p class="item-name">
                  Book y <span id="summary-quantity"></span>
                </p>
                <p class="item-name">
                  Book z <span id="summary-quantity"></span>
                </p>
              </div>
              <div class="total">
                Total:
                <span class="price" id="summary-total">230,90</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>



<script>
import "./index";

export default {
  name: "Checkout",
};
</script>

<style scoped src="./style.css">
</style>