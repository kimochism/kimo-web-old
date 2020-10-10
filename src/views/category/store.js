import Vue from "vue";

import { CategoryService } from "../../services/CategoryService";

export const store = Vue.observable({
  categoryService: new CategoryService(),
  categories: [],
  header: {
      title: "Categorias"
  }
});

export const mutations = {
  listCategories: async() => {
    const response = await store.categoryService.list({ });

    store.categories = [...store.categories, ...response];
  },
};
