<template>
  <div id="menu">
    <div class="iconMenu" id="btnMenuIcon" v-on:click="openMenu()">
      <span class="material-icons">menu</span>
    </div>
    <div class="subMenu configMenu">
      <router-link to="/">
        <span>Início</span>
      </router-link>
      <router-link to="/category">
        <span>Catálogo</span>
      </router-link>
      <span>Rastreio</span>
      <span>FAQ</span>
    </div>
    <span class="identi">Kimochism</span>
    <div class="endMenu configMenu">
      <router-link to>
        <span v-on:click="changeCadastro()">Entre ou Cadastre-se</span>
      </router-link>
      <span class="material-icons">favorite_border</span>
      <router-link tag="a" to="/cart">
        <span class="material-icons">shopping_basket</span>
      </router-link>
    </div>

    <!-- hide menu -->
    <div id="secondMenu">
      <div>
        <router-link to="/">
          <span>Início</span>
        </router-link>
      </div>
      <div>
        <router-link to="/category">
          <span>Catálogo</span>
        </router-link>
      </div>
      <div>
        <span>Rastreio</span>
      </div>
      <div>
        <span>FAQ</span>
      </div>
      <div>
        <router-link to>
          <span v-on:click="changeCadastro()">Entre ou Cadastre-se</span>
        </router-link>
      </div>
      <div>
        <router-link to="/cart">
          <span class="material-icons">shopping_basket</span>
        </router-link>
      </div>
    </div>
    <!-- hide menu -->
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<script>
export default {
  name: "Menu",

  data: function () {
    return {
      message: "",
      isOpen: false,
    };
  },

  mounted: function () {
    window.onresize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth > 800) {
        document.getElementById("secondMenu").style.display = "none";
      }
    };
  },

  methods: {
    openMenu: function () {
      if (this.isOpen) {
        document.getElementById("secondMenu").style.display = "flex";
      } else {
        document.getElementById("secondMenu").style.display = "none";
      }
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

<style>
.identi {
  padding: 0px 8px;
}
#menu {
  width: 100%;
  background-color: white;
  padding: 0px 50px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.configMenu {
  padding: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.endMenu {
  width: 280px;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
}
#menu div span {
  padding: 8px;
  color: black;
}
#menu span,
i {
  cursor: pointer;
}
.glyphicon {
  font-size: 24px;
}
.iconMenu {
  display: none;
  padding: 8px;
}
/* Hide menu */

#secondMenu {
  flex-wrap: wrap;
  width: 100%;
  display: none;
}
#secondMenu div {
  width: 100%;
  padding: 16px;
}

@media screen and (max-width: 850px) {
  #secondMenu {
    display: none;
  }

  #menu {
    flex-wrap: wrap;
    padding: 0px;
  }
  .iconMenu {
    display: flex;
  }
  .subMenu {
    display: none;
  }
  .endMenu {
    display: none;
  }
}
</style>