<template>
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
</template>

<script>
export default {
    name: 'MiniCart',

    props: ['products', 'amount']
}
</script>

<style scoped src="./style.css">

</style>