import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/component.vue';
import ShirtMaker from './views/shirt-maker/component.vue';
import NotFound from './views/not-found/component.vue';

Vue.use(Router);

function lazyLoad(view){
  return () => import(`@/views/${view}/component.vue`);
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
      path: '/perfil',
      name: 'profile',
      component: lazyLoad('profile'),
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: lazyLoad('cart'),
    },
    {
      path: '/categorias',
      name: 'category',
      component: lazyLoad('category'),
    },
    {
      path: '/catalogo',
      name: 'catalog',
      component: lazyLoad('catalog'),
    },
    {
      path: '/produto',
      name: 'product',
      component: lazyLoad('product'),
    },
    {
      path: "/sua-estampa",
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
