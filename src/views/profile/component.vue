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
import MessageBar from '../views/navigation/MessageBar.vue'
import Footer from '../views/navigation/Footer.vue'

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

<style scoped>

    #ContainerProfile{
        max-width: 1100px;
        height: 700px;
        margin: 50px auto;
        overflow: hidden;
        display: flex;
    }

    #ContainerInfos{
        width: 100%;
        justify-content: center;
        display: flex;
    }

    #Infos{
        width: 200px;
        min-width: 200px;
        height: 100%;
        margin-right: 15px;
        flex-direction: column;
        display: flex;
    }

    #Infos .itemInfo{
        width: 100%;
        padding: 16px;
        cursor: pointer;
        border-bottom: 1px solid rgb(235, 235, 235);
        align-items: center;
        display: flex;
    }

    #Infos .itemInfo:hover{
        background-color: rgb(235, 235, 235);
    }

    .itemInfo span:nth-child(2n){
        margin-left: 20px;
    }

    /* Everyone */

    .contentBox{
        width: 100%;
        overflow: hidden;
        padding: 0px;
    }

    .contentBox input{
        background-color: transparent;
        border: 0px;
        border-bottom: 2px solid black;
        min-width: 33%;
        padding: 12px;
    }

    .contentBox h1{
        width: 100%;
        margin: 0px;
        padding: 18px;
        font-size: 20px;
        border-bottom: 1px solid rgb(235, 235, 235);
    }

    /* Register */

    .subContainerRegister{
        padding: 25px;
        flex-wrap: wrap;
        display: flex;
    }

    .itemSubContainerRegister{
        margin: 1%;
        width: 250px;
        flex-direction: column;
        display: flex;
    }

    .itemSubContainerRegister button{
        padding: 12px;
        border: 1px solid black;
        background-color: transparent;
        text-transform: uppercase;
    }

    .itemSubContainerRegister button:hover{
        background-color: black;
        cursor: pointer;
        color: white;
    }

    .itemSubContainerRegister label{
        text-transform: uppercase;
    }

    /* Requests */

    .subContainerRequests h1{
        width: 100%;
    }

    .subContainerRequests{
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }

    .headerListRequests span{
        font-weight: bold;
        padding: 10px 35px;
        margin-left: -8px;
    }

    .headerListRequests{
        width: 100%;
        justify-content: space-between;
        display: flex;
    }

    .listSubContainerRequests{
        width: 100%;
        height: 500px;
        overflow: auto;
        border-top: 5px solid rgb(211, 211, 211);
        border-bottom: 5px solid rgb(211, 211, 211);
        flex-direction: column;
        display: flex;
    }

    .itemSubContainerRequests{
        width: 100%;
        padding: 20px;
        cursor: pointer;
        border-bottom: 1px solid rgb(211, 211, 211);
        justify-content: space-between;
        align-items: center;
        display: flex;
    }  

    .itemSubContainerRequests:hover{
        background-color: rgb(241, 241, 241);
    }

    .itemSubContainerRequests label{
        width: 100px;
        text-align: center;
    }

    /* Payment */

    .subContainerPayments{
        height: 300px;
        overflow: auto;
    }

    .paymentButtons{
        padding: 8px 0px;
        display: flex;
    }

    .paymentButtons button{
        background-color: transparent;
        text-transform: uppercase;
        border: 1px solid black;
        padding: 10px 25px;
    }

    .paymentButtons button:hover{
        background-color: black;
        font-weight: bold;
        cursor: pointer;
        color: white;
    }

    .subContainerPaymentsItem{
        width: 100%;
        padding: 20px;
        border-bottom: 1px solid rgb(235, 235, 235);
        justify-content: space-between;
        align-items: center;
        display: flex;

    }

    .imgCaseCard{
        width: 50px;
        height: 32px;
        padding: 5px;
        padding-right: 7px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;
    }

    /* Devolution */

    .subContainerDevolution{
        width: 100%;
        height: 500px;
    }

    .subContainerDevolutionItem{
        width: 100%;
        padding: 8px 0px;
        border-bottom: 1px solid rgb(235, 235, 235);
        justify-content: space-between;
        display: flex;
    }

    .subContainerDevolutionItem span{
        width: 100px;
    }

    .subContainerDevolutionItem:hover{
        background-color: rgb(235, 235, 235);
        cursor: pointer;
    }

    /* Address */

    .subContainerAddresss{
        width: 100%;
        height: 600px;
        flex-direction: column;
        display: flex;
    }

    .subBoxAdress{
        width: 100%;
    }

    .subBoxAdressMap{
        height: 300px;
    }

    .subBoxAdress:nth-child(1){
        border-bottom: 1px solid rgb(235, 235, 235);
    }

    iframe{
        width: 100%;
        height: 100%;
    }

    .addAdress{
        width: 100%;
        border-bottom: 1px solid rgb(235, 235, 235);
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }

    .itemAddAddress{
        width: 150px;
        margin: 1%;
        flex-direction: column;
        display: flex;
    }

    .subBoxAdress{
        width: 100%;
        cursor: pointer;
        flex-wrap: wrap;
        display: flex;
    }

    .itemAdress{
        height: 125px;
        margin: 1% 0px;
        margin-right: 1%;
        border: 1px solid rgb(235, 235, 235);
        display: flex;
    }

    .editarItemAddress{
        padding: 15px;
        background-color: rgb(197, 197, 197);
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .itemAddAddress input{
        padding: 0px;
        padding-bottom: 2px;
        border-bottom: 1px solid black;
        text-transform: capitalize;
    }

    .itemAddAddress button{
        width: 150px;
        background-color: transparent;
        border: 1px solid black;
        font-weight: bold;
        height: 40px;
        text-transform: uppercase;
    }

    .itemAddAddress button:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
    
    .editarItemAddress:hover{
        background-color:black;
        color: white;
    }

    .infoItemAddress{
        width: 150px;
        padding: 15px;
        flex-direction: column;
        justify-content: center;
        display: flex;
    }

    .deleteItemAddress{
        padding: 15px;
    }

    .deleteItemAddress span:hover{
        background-color: rgb(253, 105, 105);
        color: white;
    }

    /* Preferences */

    .subContainerPreferences{
        padding: 8px;
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }

    .itemPreference{
        width: 150px;
        flex-direction: column;
        display: flex;
    }

    .itemPreference select{
        width: 100%;
        background-color: transparent;
        border: 1px solid black;
        padding: 8px;
    }

    .itemPreference select option{
        padding: 8px;
    }

    .btnPreferences{
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        background-color: transparent;
        border: 1px solid black;
        text-transform: uppercase;
    }

    .btnPreferences:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }

    /* Favorites */

    .subContainerFavorites{
        padding: 10px 0px;
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }

    .itemFavorites{
        width: 33%;
        height: 150px;
        margin: 1% 0;
        cursor: pointer;
        background-position: center;
        background-size: cover;
        overflow: hidden;
    }

    .itemFavorites:nth-child(1n){
        background-image: url(https://i.pinimg.com/564x/34/79/47/347947845caa02b620b79877419b39e0.jpg);
    }

    .itemFavorites:nth-child(2n){
        background-image: url(https://i.pinimg.com/564x/27/93/07/279307fadc7dbc00a4baa5fd2327ba38.jpg);
    }

    .itemFavorites:nth-child(3n){
        background-image: url(https://i.pinimg.com/564x/3a/c1/09/3ac109aa254fd8307bb68f2cf108ef2b.jpg);
    }

    .OpacityItemFavorites{
        background-image: linear-gradient(to top, rgba(155, 155, 155, 0.301), rgba(255, 255, 255, 0));
        width: 100%;
        height: 100%;
    }
    
    .OpacityItemFavorites span{
        background-color: rgba(0, 0, 0, 0.541);
        color: white;
        padding: 1.5%;
    }

    /* Password */



    /* media */

    @media screen and (max-width: 1070px){

        #ContainerProfile{
            width: 800px;
        }

    }

    @media screen and (max-width: 800px){

        #ContainerProfile{
            width: 530px;
        }

    }

    @media screen and (max-width: 800px){

        #ContainerProfile{
            width: 530px;
        }

        #Infos{
            width: 60px;
            min-width: 60px;
        }

        .disapearMobile{
            display: none;
        }

    }

    @media screen and (max-width: 799px){

        #ContainerInfos{
            width: 96%;
        }

        #Infos .itemInfo{
            margin-right: 5%;
            border: 0px;
        }

        #ContainerProfile{
            width: 380px;
        }

        .contentBox{
            width: 300px;
        }

        .itemAdress{
            justify-content: space-between;
            width: 100%;
        }

        .itemAddAddress{
            width: 100%;
            margin: 2% 0%;
        }

        .itemAddAddress button{
            width: 100%;
        }

        .subContainerRegister{
            padding: 20px 0px;
        }

        .itemSubContainerRegister{
            margin-bottom: 10%;
        }

        .itemPreference{
            margin: 3%;
            width: 100%;
        }

        .paymentButtons button{
            width: 100%;
        }

    }


</style>