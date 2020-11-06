<template>
  <div>
      <div id="ContainerProfile">
        <div id="ContainerInfos">
                <!-- Button -->
                <div id="Infos">

                    <div class="itemInfo" v-on:click="setCurrentContent('myRegister')">
                        <span class="material-icons">
                        perm_identity
                        </span>
                        <span class="disapearMobile" @click="getCustomerById(2)">Meu Cadastro</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myOrders')">
                    <span class="material-icons">
                        shopping_cart
                        </span>
                        <span class="disapearMobile">Meus Pedidos</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myPayments')">
                        <span class="material-icons">
                        payment
                        </span>
                        <span class="disapearMobile">Formas de Pagamento</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myDevolutions')">
                        <span class="material-icons">
                        swap_horizontal_circle
                        </span>
                        <span class="disapearMobile">Devoluções</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myAddress')">
                        <span class="material-icons">
                        room
                        </span>
                        <span class="disapearMobile">Meus Endereços</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myPreferences')">
                        <span class="material-icons">
                        grade
                        </span>
                        <span class="disapearMobile">Minhas Preferências</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myFavorites')">
                        <span class="material-icons">
                        favorite
                        </span>
                        <span class="disapearMobile">Meus Favoritos</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myPassword')">
                        <span class="material-icons">
                        vpn_key
                        </span>
                        <span class="disapearMobile">Alterar Senha</span>
                    </div>

                </div>

                <!-- Containers -->
                <div id="ContainerInfos">
                    <Register v-show="currentContent == 'myRegister'"/>
                    <Orders v-show="currentContent == 'myOrders'"/>
                    <Payments v-show="currentContent == 'myPayments'"/>
                    <Devolutions v-show="currentContent == 'myDevolutions'" />
                    <Address v-show="currentContent == 'myAddress'"/>
                    <Preferences v-show="currentContent == 'myPreferences'"/>
                    <Favorites v-show="currentContent == 'myFavorites'"/>
                    <ChangePassword v-show="currentContent == 'myPassword'" />
                </div>
        </div>
    </div>
    <Footer/>
    <MessageBar/>
  </div>
</template>

<script>

import MessageBar from '../shared/message-bar/component.vue';
import Footer from '../shared/message-bar/component.vue';
import Address from './address/component';
import ChangePassword from './change-password/component';
import Devolutions from './devolutions/component';
import Favorites from './favorites/component';
import Orders from './orders/component';
import Payments from './payments/component';
import Preferences from './preferences/component';
import Register from './register/component';
import { mapGetters, actions } from './store';

export default {
    
    computed: {
        ...mapGetters
    },
    methods:{
        ...actions
    },
    components:{
        Footer,
        MessageBar,
        Address,
        ChangePassword,
        Devolutions,
        Favorites,
        Orders,
        Payments,
        Preferences,
        Register
    },
    props: ['content']
}
</script>

<style src="./style.css"  scoped>
    
</style>