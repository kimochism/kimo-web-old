<template>
  <div id="Containermenu">
    <div class="subMessage">
      <span v-on:click="changeCadastro()">Registrar</span>
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
        <span>Gamer</span>
        <span>Anime</span>
        <span>Geek</span>
        <span>E-girl</span>
        <span>Kids</span>
      </div>
      <div class="searchMenu ajust">
        <input type="text" placeholder="Procurar" />
        <span class="material-icons weSearch"> search </span>
        <router-link to="/perfil">
          <span class="material-icons"> perm_identity </span>
        </router-link>
        <router-link to="/carrinho">
          <span class="material-icons"> shopping_basket </span>
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
          <router-link :to="routerLink.path" tag="span" v-for="routerLink in routerLinks" :key="routerLink.name">
            <span v-on:click="openMenu()">{{routerLink.name}}</span>
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<script>
export default {
  name: "Menu",

  data: function () {
    return {
      message: "",
      isOpen: true,
      routerLinks: {
        home: {
          path: '/',
          name: 'Início'
        },
        category: {
          path: '/category',
          name: 'Categorias'
        },
        catalog: {
          path: '/catalog',
          name: 'Catálogo'
        },
        gamer: {
          path: '/catalog',
          name: 'Gamer'
        },
        anime: {
          path: '/catalog',
          name: 'Anime'
        },
        geek: {
          path: '/catalog',
          name: 'Geek'
        },
        eGirl: {
          path: '/catalog',
          name: 'E-girl'
        },
        kids: {
          path: '/catalog',
          name: 'Kids'
        },
      }
    };
  },

  mounted: function () {
    window.onresize = () => {
      if (window.innerWidth > 800) {
        document.getElementById("MenuOptions").style.display = "none";
      }
    };
  },

  methods: {
    openMenu: function () {
      if (this.isOpen) {
        document.getElementById("MenuOptions").style.display = "flex";
      } else {
        document.getElementById("MenuOptions").style.display = "none";
      }
      console.log(this.isOpen);
      this.isOpen = !this.isOpen;
    },
    changeCadastro: function () {
      document.getElementById("ContainerLogin").style.display = "flex";
      document.getElementById("CadastroCase").style.display = "none";
      document.getElementById("LoginCase").style.display = "flex";
    },
  },
};
</script>

<style src="./style.css"  scoped>
  
</style>