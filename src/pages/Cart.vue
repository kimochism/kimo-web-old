<template>
  <div>
    <div id="ContainerCart">
      <ProductList />
      <Card />
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

export default {
  name: "Cart",
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
  justify-content: center;
  display: flex;
}
@media screen and (max-width: 1024px) {
  #ContainerCart {
    flex-wrap: wrap;
  }
}
</style>