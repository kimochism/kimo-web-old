<template>
  <div id="CardContainer">
    <h1>Cartão</h1>
    <span class="fontGrey">Tipo do cartão</span>

    <div id="SubCardContainer">
      <div id="Card">
        {{ name }}
        <br />
        {{ cardNumber }}
        <br />
        <div v-if="day">{{ day }} / {{ month }}</div>
        <br />
        {{ cvv }}
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1024px-Mastercard_2019_logo.svg.png"
        alt="Bandeira"
        width="60px"
      />
    </div>

    <br />

    <label for="">Nome no cartão</label>
    <input type="text" v-model="name" placeholder="Kimochism Store" />

    <br />

    <label for="">Número do cartão</label>
    <input
      v-model="cardNumber"
      maxlength="19"
      placeholder="0000 0000 0000 0000"
    />

    <br />

    <div id="LastInfoCard">
      <div id="headerInfoCard">
        <label for="">Data de Expiração</label>
        <label for="">CVV</label>
      </div>
    </div>
    <div class="space-bet">
      <input type="text" maxlength="2" v-model="day" placeholder="01" />
      <input
        type="text"
        maxlength="2"
        v-model="month"
        class="add-pad"
        placeholder="27"
      />
      <input type="text" maxlength="3" v-model="cvv" placeholder="123" />
    </div>

    <br />
    <br />

    <button class="btnSuccess">Finalizar</button>
  </div>
</template>


<script>
export default {
  name: "Card",

  data: function () {
    return {
      name: "",
      cardNumber: "",
      day: "",
      month: "",
      cvv: "",
    };
  },
};
</script>

<style scoped>
  @import url("./style.css");
</style>