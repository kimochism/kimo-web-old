<template>
  <div>
    <SignInUp/>
    
    <MessageBar/>
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>

import Menu from './components/navigation/Menu.vue'
import MessageBar from './components/navigation/MessageBar.vue'
import SignInUp from './components/modal/SignInUp.vue'

export default {
  name: 'App',
  components: {
    Menu,
    MessageBar,
    SignInUp
  }
}
</script>

<style>

  *{
    outline: none !important;
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }  

  html{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }

  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Kumbh Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    font-weight: 400;
    font-style: normal;
    overflow-x: hidden !important;
  }
  
</style>
