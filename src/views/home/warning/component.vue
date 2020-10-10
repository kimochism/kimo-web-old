<template>
  <div id="Warning">
    <h2><b>Entregas normalizadas</b></h2>
    <br />
    <p>
      Estamos entregando normalmente. Agradecemos a compreensão neste momento!
    </p>
  </div>
</template>

<script>
export default {
  name: "Warning",
};
</script>

<style scoped>
#Warning {
  background-color: white;
  padding: 70px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
}
#Warning h2 {
  font-weight: 100;
  text-transform: uppercase;
}
#Warning p {
  text-align: center;
  width: 430px;
}

@media screen and (max-width: 800px) {
  #Warning p {
    width: auto;
  }
}
</style>