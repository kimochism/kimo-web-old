<template>
  <div>
    <div id="header">
      <h1>{{ this.header.title }}</h1>
      <span>{{ this.header.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["header"],
};
</script>

<style scoped>
#header {
  height: 320px;
  background-image: url("../../../assets/bg.png");
  background-size: cover;
  background-position: top;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
}

#header h1 {
  font-weight: bold;
}

#header span {
  font-size: 16px;
  text-transform: uppercase;
}
</style>