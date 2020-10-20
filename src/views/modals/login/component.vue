<template>
  <div>
    <BaseModal :dimensions="{ width: '30%', heigth: '75vh' }">
      <template v-slot:content>
        <!-- SIGN IN -->
      
        <div id="LoginCase" class="SubContainerLogin">
          <h1>
            Kimochism
            <br />気持ち
          </h1>
          <label for>Nome</label>
          <input type="text" v-model="emailLogin" placeholder="Usuário ou E-mail" />
          <label for>Senha</label>
          <input type="password" v-model="passwordLogin" placeholder="Senha" />
          <br />
          <button class="btnLogin" v-on:click="auth({ email: emailLogin, password: passwordLogin })">Entrar</button>
          <button class="btnCadastrar" v-on:click="changeLogin()">Cadastrar</button>
          <br />
          <button class="btnFace">Entrar com Facebook</button>
          <button class="btnGoogle">Entrar com Google+</button>
        </div>

        <!-- SIGN UP -->
        <div id="CadastroCase" class="SubContainerCadastro">
          <h1>
            Kimochism
            <br />気持ち
          </h1>
          <span>É um prazer ver você aqui !</span>
          <label for>Nome</label>
          <input type="text" v-model="username" placeholder="Clara" />
          <label for>Email</label>
          <input type="text" v-model="email" placeholder="Usuário ou E-mail" />
          <label for>Senha</label>
          <input type="password" v-model="password" placeholder="Senha" />
          <label for>Confirme sua Senha</label>
          <input type="password" v-model="confirmPassword" placeholder="Senha" />
          <label for>Telefone</label>
          <input
            type="text"
            v-model="cellPhoneNumber"
            placeholder="Usuário ou E-mail"
          />
          <br />
          <button class="btnCadastrar" v-on:click="storeUser()">
            Cadastrar
          </button>
          <button class="btnLogin" v-on:click="changeCadastro()">Voltar</button>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>

  import BaseModal from '../component.vue';
  import { mapGetters, actions, destroyStore } from './store';

  export default {
    name: "Login",

    components: {
      BaseModal
    },

    computed: { ...mapGetters },

    methods: { ...actions },

    destroyed() {
      destroyStore();
    }
  };
</script>

<style src="./style.css" scoped></style>