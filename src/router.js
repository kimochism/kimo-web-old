import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Categories from './pages/Categories.vue'
import VueCarousel from 'vue-carousel';

Vue.use(Router);
Vue.use(VueCarousel);

export default new Router({
  mode: 'history',
  base: __dirname,

  routes: [
    
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories,
    }
  ]
})