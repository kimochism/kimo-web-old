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
        <router-link to="/category">
          <span>Categorias</span>
        </router-link>
        <router-link to="/catalog">
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
        <router-link to="/UserProfile">
          <span class="material-icons"> perm_identity </span>
        </router-link>
        <router-link to="/cart">
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

<style scoped>
#Containermenu {
  background-color: white;
  border-bottom: 1px solid rgba(202, 202, 202, 0.288);
}

#Logo {
  justify-content: center;
  align-items: center;
  display: flex;
}

#Logo h1 {
  margin: 0px;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: bold;
}

.ajust {
  width: 300px;
}

.subMessage {
  height: 32px;
  font-size: 12px;
  cursor: pointer;
  flex-direction: row-reverse;
  padding-right: 50px;
  display: flex;
}

.subMessage span:hover {
  font-weight: bold;
}

.subMessage span {
  padding: 6px;
}

.subOptionsMenu {
  padding: 0px 50px;
  justify-content: space-between;
  display: flex;
}

.optionsMenu {
  width: 500px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  display: flex;
}

.optionsMenu span {
  cursor: pointer;
}

.optionsMenu span:nth-child(-n + 3) {
  font-weight: bold;
}

.searchMenu {
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.searchMenu input {
  width: 70%;
  padding: 8px;
  border: 0px;
  background-color: #ebedee;
}

.searchMenu input::placeholder {
  font-weight: bold;
}

.weSearch {
  margin-left: -50px;
  margin-right: 15px;
  cursor: pointer;
}

.subMessageTwo {
  width: 700px;
  margin: 0 auto;
  display: flex;
}

.subContainerMessageTwo {
  width: 100%;
  justify-content: space-between;
  display: flex;
}

.subMessageTwo span {
  padding: 8px;
}
* {
  color: black;
}

/* Responsividade */

#HiderMenu {
  display: none;
}
#MenuOptions {
  display: none;
}

@media screen and (max-width: 1100px) {
  #Logo {
    display: none;
  }
}
@media screen and (max-width: 900px) {
  .subContainerMessageTwo {
    justify-content: center;
  }
  .mobileDisapear {
    width: 0px;
    display: none !important;
  }
  .subMessage {
    margin: 0px;
    padding-right: 10px;
  }
  .subOptionsMenu {
    padding: 0px 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .optionsMenu {
    display: none;
  }
  .searchMenu {
    display: none;
  }
  #HiderMenu {
    width: 100%;
    flex-direction: column;
    display: flex;
  }
  .headerHideMenu {
    width: 100%;
    justify-content: space-between;
    padding: 8px;
    display: flex;
  }
  .headerHideMenu span {
    cursor: pointer;
  }
  #MenuOptions {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;
    flex-direction: column;
  }
  #MenuOptions span {
    padding: 8px;
    width: 100%;
    cursor: pointer;
  }
  #MenuOptions span:hover {
    background-color: #ebedee;
  }
}
</style>