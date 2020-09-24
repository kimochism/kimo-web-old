<template>
  <div>
    <footer>
      <div>
        <b class="headerMenuFooter">Menu do Rodapé</b>
        <span>Pesquisar </span>
        <span>Rastreio</span>
        <span>Perguntas frequentes</span>
        <span>Política de Entrega</span>
        <span>Política de Devolução</span>
        <span>Política de Privacidade</span>
        <span>Roupas e o COVID-19</span>
      </div>
      <div>
        <span class="marca">Kimochism 気持ち</span>
        <p class="Mission">
          <b>Missão</b>
          Oferecer ao consumidor brasileiro produtos reconhecidamente líderes em
          qualidade e que contribuam para uma vida equilibrada, gerando sempre
          oportunidades de negócios para a empresa e valor compartilhado com a
          sociedade brasileira.
        </p>
        <div class="socialMedia">
          <a href="https://www.facebook.com/kimochismstore ">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/kimochismstore">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  height: auto;
  background-color: black;
  padding: 50px 20px;
  color: white;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  display: flex;
}
footer div {
  width: 300px;
  line-height: 15px;
  margin-bottom: 50px;
}
footer div span {
  display: block;
  padding: 8px;
  cursor: pointer;
}
.headerMenuFooter {
  font-size: 20px;
  padding: 20px 8px;
  display: block;
}
.Mission {
  line-height: 25px;
}
.marca {
  margin-left: 0px;
  padding: 15px 0px;
  font-size: 34px;
  color: white;
  font-weight: bold;
  text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000,
    -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000,
    1px 1px 0px #000;
}
.socialMedia {
  width: 50px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 8px;
}
.socialMedia a {
  color: white !important;
}

@media screen and (max-width: 1160px) {
  footer {
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
}
</style>