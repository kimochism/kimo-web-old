<template>
  <div id="Containermenu">
    <div class="subMessage">
      <span v-on:click="inject()">Registrar</span>
      <span>Devoluções</span>
      <span>Pedidos</span>
      <span>Newsletter</span>
      <span>Ajuda</span>
    </div>

    <div class="subOptionsMenu">
      <div id="Logo" class="ajust">
        <router-link to="/">
          <h1>Kimochism 気持ち</h1>
        </router-link>
      </div>
      <div class="optionsMenu">
        <router-link to="/categorias">
          <span>Categorias</span>
        </router-link>
        <router-link to="/catalogo">
          <span>Catálogo</span>
        </router-link>
        <span v-for="category in categories" :key="category.id" @click="navigateToCatalog(category.name)" >{{ category.name.toUpperCase() }}</span>
      </div>
      <div class="searchMenu ajust">
        <input type="text" placeholder="Procurar" />
        <span class="material-icons weSearch"> search </span>
        <router-link to="/perfil">
          <span class="material-icons"> perm_identity </span>
        </router-link>
        <router-link to="/carrinho">
          <md-badge :md-content="badge">
          <md-button class="md-icon-button">
            <span class="material-icons"> shopping_basket </span>
          </md-button>
        </md-badge>
        </router-link>
      </div>

      <!-- Hider Menu -->
      <div id="HiderMenu">
        <div class="headerHideMenu">
          <span class="material-icons" v-on:click="openMenu()"> menu </span>
          <span class="material-icons" v-on:click="changeCadastro()">
            perm_identity
          </span>
        </div>

        <div id="MenuOptions">
          <router-link :to="'/catalogo?categoryName=' +category.name" tag="span" v-for="category in categories" :key="category.id">
            <span v-on:click="openMenu()">{{category.name.toUpperCase()}}</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="subMessageTwo">
      <div class="subContainerMessageTwo">
        <span class="mobileDisapear"
          >COVID-19 | SAIBA SOBRE OS NOSSOS SERVIÇOS</span
        >
        <span class="mobileDisapear">FRETE GRÁTIS PARA TODO BRASIL</span>
      </div>
    </div>
  </div>
</template>

<script>

import { actions, mapGetters } from "./store";
import { actions as cartActions, mapGetters as cartMapGetters} from "./../../cart/store";

export default {
  name: "Menu",

  computed: {
    ...mapGetters,
    ...cartMapGetters
  },

  methods: {
    ...actions,
    ...cartActions,

    navigateToCatalog(categoryName) {
      this.$router.push({ path: 'catalogo', query: { categoryName } });
    }
  },

  created() {
    cartActions.getBadge();
    actions.listCategories();
  }
};
</script>

<style src="./style.css"  scoped>
  
</style>