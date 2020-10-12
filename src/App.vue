<template>
  <div id="ContainerDaddy">
    <SignInUp />

    <div id="main-load">
      <h2>CARREGANDO...</h2>
    </div>

    <MessageBar />
    <Menu />
    <router-view></router-view>

    <Footer />
    <MessageBar />
  </div>
</template>

<script>
import Menu from "./views/shared/menu/component.vue";
import MessageBar from "./views/shared/message-bar/component.vue";
import SignInUp from "./views/modal/SignInUp.vue";
import Footer from "./views/shared/footer/component.vue";

export default {
  name: "App",

  components: {
    Menu,
    MessageBar,
    SignInUp,
    Footer
  },
};
</script>

<style>

#main-load {
   position:fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 1000
}

#main-load h2 {
  color: white
}

.md-theme-default a:not(.md-button):hover{
  text-decoration: none !important;
}
#ContainerDaddy{
  background-color: transparent;
}

.md-theme-default a:not(.md-button){
  color: black;
}
.md-theme-default a:not(.md-button):hover{
  color: black;
  text-decoration: none;
}

* {
  outline: none !important;
}

/* width */
::-webkit-scrollbar {
  width: 10px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888 !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555 !important;
}

html {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: "Kumbh Sans", sans-serif !important;
  text-rendering: optimizeLegibility !important;
  font-weight: 400;
  font-style: normal;
  overflow-x: hidden !important;
}
</style>
