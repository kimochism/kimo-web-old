import Vue from "vue";

import { buildStore } from '../../utils/base-store';

import { CategoryService } from "../../services/CategoryService";

export const store = Vue.observable({
  categoryService: new CategoryService(),
  categories: [],
  header: {
      title: "Categorias"
  }
});

export const actions = {
  listCategories: async() => {
    const response = await store.categoryService.list({ });

    store.categories = [...store.categories, ...response];
  },
};

export const mapGetters = buildStore(store);
