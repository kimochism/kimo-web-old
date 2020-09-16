import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'


Vue.use(Router);

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

  ]
})