<template>
  <div>
    <div id="ContainerNotFound">
      <img src="../assets/404.png" alt="" />
      <span>Oops.. Página não encontrada</span>
      <p>
        Ocorreu um erro na página que você tentou acessar
        <br />
        <a href="/">volte</a>
        e tente novamente mais tarde.
      </p>
    </div>
    <Footer />
    <MessageBar />
  </div>
</template>

<script>
import MessageBar from "./../shared/message-bar/component.vue";
import Footer from "./../shared/footer/component.vue";

export default {
  name: "NotFound",
  components: {
    MessageBar,
    Footer,
  },
};
</script>
    
<style scoped>
#ContainerNotFound {
  padding: 120px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
#ContainerNotFound span {
  font-size: 18px;
  padding: 28px;
}
#ContainerNotFound p {
  text-align: center;
  font-size: 18px;
  line-height: 25px;
}
</style>