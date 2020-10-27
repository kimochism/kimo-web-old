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
          <label for>Email</label>
          <input type="email" id="email" v-model="loginFields.email" autocomplete="autocomplete" placeholder="Digite seu email" />
          <label for>Senha</label>
          <input type="password" id="password" v-model="loginFields.password" placeholder="Digite sua senha" />
          <br />
          <button class="btnLogin" v-on:click="auth({ email: loginFields.email, password: loginFields.password })">Entrar</button>
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
          <input type="text" id="username" v-model="storeFields.username" placeholder="Clara" />
          <label for>Email</label>
          <input type="email" id="email" v-model="storeFields.email" placeholder="Usuário ou E-mail" />
          <label for>Senha</label>
          <input type="password" id="password" v-model="storeFields.password" placeholder="Senha" />
          <label for>Confirme sua Senha</label>
          <input type="password" id="confirmPassword" v-model="storeFields.confirmPassword" placeholder="Senha" />
          <label for>Telefone</label>
          <input
            type="phone"
            id="cellPhoneNumber"
            v-model="storeFields.cellPhoneNumber"
            placeholder="Telefone"
            v-mask="['(##) ####-####', '(##) #####-####']"
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