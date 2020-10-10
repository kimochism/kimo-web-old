import Vue from "vue";

import { ProductService } from "../../services/ProductService";

export const store = Vue.observable({
  productService: new ProductService(),
  products: [],
  page: 1,
  limit: 8,
});

export const mutations = {
  listProducts: async() => {
    const response = await store.productService.list({ page: store.page, limit: store.limit });

    store.products = [...store.products, ...response.data];
  },
};
