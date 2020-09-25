<template>
  <div id="Slider"></div>
</template>

<script>
export default {
  name: "SliderHome",
};
</script>

<style scoped>
#Slider {
  width: 100%;
  height: 500px;
  background-image: url("../../assets/bg4k.jpg");
  background-position: center;
  background-size: cover;
  font-size: 75px;
  font-weight: bold;
  line-height: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
#Slider span {
  color: white;
  text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000,
    -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000,
    1px 1px 0px #000;
}
</style>