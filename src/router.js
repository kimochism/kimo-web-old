import Vue from 'vue';
import Router from 'vue-router'
import Home from './pages/Home.vue'
import ShirtMaker from './pages/ShirtMaker'
import NotFound from './pages/NotFound'
import VueCarousel from 'vue-carousel'

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
      path: '/userprofile',
      name: 'userprofile',
      component: lazyLoad('UserProfile'),
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
      path: '/product',
      name: 'product',
      component: lazyLoad('Product'),
    },
    {
      path: "/shirtMaker",
      name: "shirt maker",
      component: ShirtMaker,
    },
    { 
      path: '/not-found', 
      component: NotFound
    },
    { 
      path: '*', 
      redirect: '/not-found',
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next();
})

export default router
