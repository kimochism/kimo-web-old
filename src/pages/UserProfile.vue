<template>
  <div id="ContainerProfile">
      <div id="ContainerInfos">
            <div id="Infos">

                <div class="itemInfo" v-on:click="setContent('MyRegister')">
                    <span class="material-icons">
                    perm_identity
                    </span>
                    <span>Meu Cadastro</span>
                </div>
                <div class="itemInfo" v-on:click="setContent('MyRequests')">
                   <span class="material-icons">
                    shopping_cart
                    </span>
                    <span>Meus Pedidos</span>
                </div>
                <div class="itemInfo">
                    <span class="material-icons">
                    payment
                    </span>
                    <span>Formas de Pagamento</span>
                </div>
                <div class="itemInfo">
                    <span class="material-icons">
                    swap_horizontal_circle
                    </span>
                    <span>Devoluções</span>
                </div>
                <div class="itemInfo">
                    <span class="material-icons">
                    room
                    </span>
                    <span>Meus Endereços</span>
                </div>
                <div class="itemInfo">
                    <span class="material-icons">
                    grade
                    </span>
                    <span>Minhas Preferências</span>
                </div>
                <div class="itemInfo">
                    <span class="material-icons">
                    favorite
                    </span>
                    <span>Meus Favoritos</span>
                </div>
                <div class="itemInfo">
                    <span class="material-icons">
                    vpn_key
                    </span>
                    <span>Alterar Senha</span>
                </div>

            </div>
            <div id="ContainerInfos">
                
                <div id="MyRegister" v-show="content">
                    aaa
                </div>
                <div id="MyRequests" v-show="content.MyRequests">
                    bbb
                </div>
                
            </div>
      </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            content: 'MyRegister'
        };
    },
    methods:{
        setContent(){

        }
    }
}
</script>

<style>
    #ContainerProfile{
        width: 1200px;
        height: 900px;
        margin: 50px auto;
        overflow: hidden;
        display: flex;
    }
    #ContainerInfos{
        width: 100%;
        height: 100%;
        background-color: hotpink;
        justify-content: space-between;
        display: flex;
    }
    #Infos{
        height: 100%;
        background-color: rebeccapurple;
        margin-right: 15px;
        flex-direction: column;
        display: flex;
    }

    #Infos .itemInfo{
        width: 100%;
        padding: 16px;
        border-bottom: 1px solid rgb(206, 206, 206);
        align-items: center;
        display: flex;
    }
    .itemInfo span:nth-child(2n){
        margin-left: 20px;
    }

</style>