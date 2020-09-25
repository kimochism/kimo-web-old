<template>
  <div class="content">
    <img :src="product.images[0].url" alt="" />
    <div class="items">
      <span class="item-name">{{ product.name }}</span>
      <span class="item-price">{{ product.price }}</span>
      <span class="item-description"
        >7x de R$ {{ (product.price / 7).toFixed(2) }} no cartão</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["product"],
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 5px;
  cursor: pointer;
}

.content:hover {
  background: rgba(0, 0, 0, 0.08);
}

img {
  width: 100%;
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-weight: normal;
  padding: 10px;
  color: black;
  font-size: 16px;
}

.img:hover {
  width: 120%;
  transition: 1s;
}

.item-price {
  font-weight: bold;
  font-size: 14px;
}

.item-description {
  color: gray;
  font-size: 14px;
}
</style>