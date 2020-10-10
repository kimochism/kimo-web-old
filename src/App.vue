<template>
  <div id="ContainerDaddy">
    <!-- <SignInUp :auth="auth" :storeUser="storeUser" /> -->

    <MessageBar />
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./views/shared/menu/component.vue";
import MessageBar from "./views/shared/message-bar/component.vue";
// import SignInUp from "./views/modal/SignInUp.vue";
import { CustomerService } from "./services/CustomerService";
import { UserService } from "./services/UserService";

export default {
  name: "App",

  data() {
    return {
      userService: new UserService(),
      customerService: new CustomerService(),
    };
  },

  methods: {
    auth(request) {
      this.userService
        .auth(request)
        .then((res) => {
          document.getElementById("ContainerLogin").style.display = "none";
          document.getElementById("LoginCase").style.display = "none";
          document.getElementById("CadastroCase").style.display = "none";

          localStorage.setItem("Authorization", res.token);
        })
        .catch(() => {
          alert("incorreto (ale ou lucas arruma aq pfv o front dps, coloca umas msg de erro no form)");
        });
    },

    storeUser(userData) {
      this.userService
        .store(userData)
        .then((userResponse) => {
          this.userService
            .auth({ email: userData.email, password: userData.password })
            .then((response) => {
              this.storeCustomer({
                user_id: userResponse.id,
                full_name: userData.username,
                email: userData.email,
                cell_phone_number: userData.cellPhoneNumber,
              });
            });
        })
        .catch(() => {
          alert("nao cadastrou deu errinho feio");
        });
    },

    storeCustomer(customerData) {
      this.customerService
        .store(customerData)
        .then((customer) => {
          document.getElementById("ContainerLogin").style.display = "none";
          document.getElementById("LoginCase").style.display = "none";
          document.getElementById("CadastroCase").style.display = "none";
          alert("cadastrou");
        })
        .catch(() => {});
    },
  },
  components: {
    Menu,
    MessageBar,
  // SignInUp,
  },
};
</script>

<style>
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
