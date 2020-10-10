import Vue from 'vue';

import { buildStore } from '../../utils/base-store';

import { ProductService } from '../../services/ProductService';

export const store = Vue.observable({
  productService: new ProductService(),
  products: [],
  page: 0,
  limit: 8,
  showProductFilter: false,
});

export const actions = {

  listProducts: async () => {
    store.page++;

    const response = await store.productService.list({ page: store.page, limit: store.limit });

    store.products = [...store.products, ...response.data];
  },

  toggleProductFilter() {
    store.showProductFilter = !store.showProductFilter;
  },
}

export const mapGetters = buildStore(store);
