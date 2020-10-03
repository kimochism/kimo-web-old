<template>
  <div class="item">
    <img
      class="imgProdutoBuy" v-if="customerBag.product.images && customerBag.product.images.length"
      :src="customerBag.product.images[0].url"
      alt=""
    />

    <div class="content">
      <div class="titleProdCart">
        <p>{{ customerBag.product.name }}</p>
        <p class="idProduct">#{{ customerBag.product.id }} </p>
      </div>

      <div class="sub-content">
        <div class="quantCart sizeSubItem">
          <button>
            <i class="fas fa-minus"></i></button>
          <span>{{ customerBag.quantity }}</span>
          <button>
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <div class="priceCart sizeSubItem">
          <p>{{ customerBag.product.price }}</p>
        </div>

        <div class="deleteItem sizeSubItem">
          <span>
            <i class="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",

  props: ['customerBag']
};
</script>

<style scoped>
.item {
  height: 180px;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  align-items: center;
  display: flex;
}

.content {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.sub-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titleProdCart {
  width: 70%;
  font-weight: bold;
}

.titleProdCart p {
  margin: 0px;
}

.idProduct {
  color: rgb(158, 158, 158);
}

.quantCart {
  justify-content: space-between;
  display: flex;
}

.quantCart span {
  padding: 8px 20px;
  margin: 0px 8px;
  border-radius: 5px;
  border: 0.5px solid rgb(231, 231, 231);
}

button {
  background-color: transparent;
  border-radius: 50%;
  border: 0px;
}

.priceCart {
  width: 100px;
  letter-spacing: 2px;
  font-weight: bold;
  display: block;
}

.priceCart p {
  margin: 0px;
}

.sizeSubItem {
  margin: 0px;

  align-items: center;
  display: flex;
}

.imgProdutoBuy {
  max-width: 100px;
  max-height: 100px;
}

@media screen and (max-width: 800px) {
  .content {
    flex-direction: column;
  }

  .sub-content {
    margin-top: 20px;
  }

  .titleProdCart {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

@media screen and (max-width: 375px) {
  .content {
    margin-left: 20px;
  }

  .titleProdCart,
  .sub-content {
    flex-wrap: wrap;
  }

  .sub-content {
    justify-content: center;
  }
  .priceCart {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .deleteItem {
    margin-top: 10px;
  }
}
</style>