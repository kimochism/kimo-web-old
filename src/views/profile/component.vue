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
                        <span class="disapearMobile">Meu Cadastro</span>
                    </div>
                    <div class="itemInfo" v-on:click="setCurrentContent('myRequests')">
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
                    
                    <div id="MyRegister" v-show="currentContent == 'myRegister'" class="contentBox">
                        <h1>Meu Cadastro</h1>
                        <div class="subContainerRegister">
                            <div class="itemSubContainerRegister">
                                <label for="">Nome</label>
                                <input type="text" placeholder="Clara">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label for="">Sobrenome</label>
                                <input type="text" placeholder="Takahashi">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label for="">Cpf</label>
                                <input type="text" placeholder="CPF">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label for="">Data de nascimento</label>
                                <input type="text" placeholder="01/01/2001">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label for="">E-Mail</label>
                                <input type="text" placeholder="clara@kimochism.com">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label for="">Telefone</label>
                                <input type="text" placeholder="(11) 98765-4321">
                            </div>
                            <div class="itemSubContainerRegister">
                                <button>Atualizar</button>
                            </div>
                        </div>
                    </div>

                    <div id="MyRequests" v-show="currentContent == 'myRequests'" class="contentBox">
                        <h1>Meus Pedidos</h1>
                        <div class="subContainerRequests">
                            <div class="headerListRequests">
                                <span>Item</span>
                                <span>Nome</span>
                                <span>Status</span>
                            </div>
                            <div class="listSubContainerRequests">
                                
                                <div class="itemSubContainerRequests">
                                    <img src="https://i.pinimg.com/564x/b8/ef/e6/b8efe612f34e9b068fe3ca6270d31535.jpg" alt="" width="50px">
                                    <label for="">Camiseta</label>
                                    <span>Produção</span>
                                </div>

                                <div class="itemSubContainerRequests">
                                    <img src="https://i.pinimg.com/236x/1e/cd/2e/1ecd2e815b2a4074536d345c50b6f74d.jpg" alt="" width="50px">
                                    <label for="">Camiseta</label>
                                    <span>Entregue</span>
                                </div>
                                
                                <div class="itemSubContainerRequests">
                                    <img src="https://i.pinimg.com/564x/14/6c/53/146c53a592a40427b214f13ad84c5c6d.jpg" alt="" width="50px">
                                    <label for="">Camiseta</label>
                                    <span>Entregue</span>
                                </div>
                                <div class="itemSubContainerRequests">
                                    <img src="https://i.pinimg.com/564x/f0/44/48/f044485fe8299cc640c9a253710eeeee.jpg" alt="" width="50px">
                                    <label for="">Camiseta</label>
                                    <span>Entregue</span>
                                </div>

                                <div class="itemSubContainerRequests">
                                    <img src="https://i.pinimg.com/564x/48/fa/b5/48fab5017f50e3a379dc1e3c96d1fcf0.jpg" alt="" width="50px">
                                    <label for="">Camiseta</label>
                                    <span>Entregue</span>
                                </div>
                                
                                <div class="itemSubContainerRequests">
                                    <img src="https://i.pinimg.com/564x/0f/fb/6b/0ffb6b3b465f24b9dc6162dee2e90bd1.jpg" alt="" width="50px">
                                    <label for="">Camiseta</label>
                                    <span>Entregue</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div id="MyPayments" v-show="currentContent == 'myPayments'" class="contentBox">
                        <h1>Formas de Pagamentos</h1>
                        <div class="subContainerPayments">

                            <div class="subContainerPaymentsItem">
                                <div class="imgCaseCard">
                                    <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png" alt="">
                                </div>
                                <span>**** 9389</span>
                                <span>Débito</span>
                                <span class="material-icons">
                                    delete_outline
                                </span>
                            </div>

                            <div class="subContainerPaymentsItem">
                                <div class="imgCaseCard">
                                    <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" alt="">
                                </div>
                                <span>**** 4856</span>
                                <span>Débito</span>
                                <span class="material-icons">
                                    delete_outline
                                </span>
                            </div>

                            <div class="subContainerPaymentsItem">
                                <div class="imgCaseCard">
                                    <img src="https://logodownload.org/wp-content/uploads/2015/03/hipercard-logo.png" alt="">
                                </div>
                                <span>**** 1445</span>
                                <span>Crédito</span>
                                <span class="material-icons">
                                    delete_outline
                                </span>
                            </div>

                            <div class="subContainerPaymentsItem">
                                <div class="imgCaseCard">
                                    <img src="https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1.png" alt="">
                                </div>
                                <span>**** 9142</span>
                                <span>Crédito</span>
                                <span class="material-icons">
                                    delete_outline
                                </span>
                            </div>

                        </div>
                        <div class="paymentButtons">
                            <button>Adicionar cartão</button>
                        </div>
                    </div>

                    <div id="MyRequests" v-show="currentContent == 'myDevolutions'" class="contentBox">
                        <h1>Minhas Devoluções</h1>
                        <div class="subContainerDevolution">
                            <div class="subContainerDevolutionItem">
                                <span>
                                    Pedido
                                    <br>
                                    #123123
                                </span>
                                <span>
                                    22/09/2020 
                                    <br>
                                    14:50
                                </span>
                                <span>
                                    Em Análise
                                </span>
                            </div>
                            <div class="subContainerDevolutionItem">
                                <span>
                                    Pedido
                                    <br>
                                    #123123
                                </span>
                                <span>
                                    22/09/2020 
                                    <br>
                                    14:50
                                </span>
                                <span>
                                    Recusado
                                </span>
                            </div>
                        </div>
                    </div>

                    <div id="MyRequests" v-show="currentContent == 'myAddress'" class="contentBox">
                        <h1>Meus Endereços</h1>
                        <div class="addAdress">
                            <div class="itemAddAddress">
                                <span>
                                    Rua
                                </span>
                                <input type="text" placeholder="Av Paulista">
                            </div>
                            <div class="itemAddAddress">
                                <span>
                                    Número
                                </span>
                                <input type="text" placeholder="1000">
                            </div>
                            <div class="itemAddAddress">
                                <span>
                                    CEP
                                </span>
                                <input type="text" placeholder="01311-000">
                            </div>
                            <div class="itemAddAddress">
                                <button>Adicionar</button>
                            </div>
                        </div>
                        <div class="subContainerAddresss">
                            <div class="subBoxAdress">

                                <div class="itemAdress">
                                    <div class="editarItemAddress">
                                        <span class="material-icons">
                                            create
                                        </span>
                                    </div>
                                    <div class="infoItemAddress">
                                        <span>Rua José Pessota</span>
                                        <span>Pq Santa Rita</span>
                                        <span>CEP: 0815-020</span>
                                        <span>São Paulo - SP</span>
                                    </div>
                                    <div class="deleteItemAddress">
                                        <span class="material-icons">
                                            clear
                                        </span>
                                    </div>

                                </div>

                            </div>
                            <div class="subBoxAdressMap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.9978210940303!2d-46.65521284603109!3d-23.56305168755768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1600806213198!5m2!1spt-BR!2sbr" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>

                    <div id="MyRequests" v-show="currentContent == 'myPreferences'" class="contentBox">
                        <h1>Minhas Preferências</h1>
                        <div class="subContainerPreferences">
                            <div class="itemPreference">
                                <span>
                                    Preferências
                                </span>
                                <select name="" id="">
                                    <option value="">Camisetas</option>
                                </select>
                            </div>
                            <div class="itemPreference">
                                <span>
                                    Minhas Medidas
                                </span>
                                <select name="" id="">
                                    <option value="">49</option>
                                </select>
                            </div>
                            <div class="itemPreference">
                                <span>
                                    Meu Estilo
                                </span>
                                <select name="" id="">
                                    <option value="">Indie</option>
                                </select>
                            </div>
                            <div class="itemPreference">
                                <span>*</span>
                                <button class="btnPreferences">
                                    Atualizar
                                </button>
                            </div>
                        </div>
                        
                    </div>

                    <div id="MyRequests" v-show="currentContent == 'myFavorites'" class="contentBox">
                        <h1>Meus Favoritos</h1>
                        <div class="subContainerFavorites">
                            <div class="itemFavorites">
                                <div class="OpacityItemFavorites">
                                   <span class="material-icons">
                                        remove_circle_outline
                                    </span>
                                </div>
                            </div>

                            <div class="itemFavorites">
                                <div class="OpacityItemFavorites">
                                    <span class="material-icons">
                                        remove_circle_outline
                                    </span>
                                </div>
                            </div>

                            <div class="itemFavorites">
                                <div class="OpacityItemFavorites">
                                     <span class="material-icons">
                                        remove_circle_outline
                                    </span>
                                </div>
                            </div>

                            <div class="itemFavorites">
                                <div class="OpacityItemFavorites">
                                     <span class="material-icons">
                                        remove_circle_outline
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="MyRequests" v-show="currentContent == 'myPassword'" class="contentBox">
                        <h1>Alterar senha</h1>
                        <div class="subContainerRegister">
                            <div class="itemSubContainerRegister">
                                <label for="">Senha</label>
                                <input type="text" placeholder="Senha123@">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label for="">Repetir a Senha</label>
                                <input type="text" placeholder="Senha123@">
                            </div>
                            <div class="itemSubContainerRegister">
                                <label>*</label>
                                <button>Atualizar</button>
                            </div>
                        </div>
                    </div>
                    
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

export default {
    
    data(){
        return{
            currentContent: 'myRegister'
        };
    },
    methods:{
        setCurrentContent(content){
            this.currentContent = content;
        }
    },
    components:{
        Footer,
        MessageBar
    }
}
</script>

<style src="./style.css"  scoped>
    
</style>