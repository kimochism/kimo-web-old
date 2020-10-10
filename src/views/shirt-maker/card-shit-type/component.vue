<template>
  <div class="image-container">
    <img class="image" :src="imageLink" />
  </div>
</template>

<script>
export default {
  name: "CardShirtType",
  props: ["imageLink"],
};
</script>

<style src="./style.css"  scoped>
  
</style>