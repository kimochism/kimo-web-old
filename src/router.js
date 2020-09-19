import Vue from 'vue';
import Router from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(Router);

function lazyLoad(view){
  return () => import(`@/pages/${view}.vue`)
}

const router = new Router({
  mode: 'history',
  base: __dirname,

  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: lazyLoad('Cart'),
    },
    {
      path: '/category',
      name: 'category',
      component: lazyLoad('Category'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: lazyLoad('Catalog'),
    },
    {
      path: '/Product',
      name: 'product',
      component: lazyLoad('Product'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next();
})

export default router
