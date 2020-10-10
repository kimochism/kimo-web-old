<template>
  <!-- NÃO MEXE AQUI, DE JEITO NENHUM -->
  <div id="Slider">
      <!-- <video controls autoplay loop>
        <source src="../../assets/video/slide2.mp4" type="video/mp4">
      </video> -->
  </div>
</template>

<script>
export default {
  name: "SliderHome",
};
</script>

<style scoped>
#Slider {
  background-image: url(https://media1.tenor.com/images/11f5a15b0a07d34ab032b92d53dcaae8/tenor.gif?itemid=14774070);
  background-color: transparent;
  background-position: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  align-items: center;
  font-weight: bold;
  line-height: 80px;
  overflow: hidden;
  font-size: 75px;
  display: flex;
  height: 500px;
  width: 100%;
}
#Slider video{
  position: fixed; 
  top: -150px;
	right: 0; 
	bottom: 0;
	min-width: 100%; 
	min-height: 100%;
	width: auto; 
	height: auto; 
	z-index: -1000;
}
#Slider span {
  color: white;
  text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000,
    -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000,
    1px 1px 0px #000;
}
</style>