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

<style src="./style.css"  scoped>

</style>