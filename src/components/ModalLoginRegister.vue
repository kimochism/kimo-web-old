<template>

  <div>
      
    <div id="ContainerLogin" v-on:click="changeContainer()">
    </div>

    <div id="LoginCase" class="SubContainerLogin">
        <h1>Kimochism <br> 気持ち</h1>
        <span>Bem vindo</span>
        <label for="">Nome</label>
        <input type="text" placeholder="Usuário ou E-mail">
        <label for="">Senha</label>
        <input type="password" placeholder="Senha">
        <br>
        <button class="btnLogin">Entrar</button>
        <button class="btnCadastrar" v-on:click="changeLogin()">Cadastrar</button>
        <br>
        <button class="btnFace">Entrar com Facebook</button>
        <button class="btnGoogle">Entrar com Google+</button>
    </div>

    <div id="CadastroCase" class="SubContainerCadastro">
        <h1>Kimochism <br> 気持ち</h1>
        <span>É um prazer ver você aqui !</span>
        <label for="">Nome</label>
        <input type="text" placeholder="Clara">
        <label for="">Email</label>
        <input type="text" placeholder="Usuário ou E-mail">
        <label for="">Senha</label>
        <input type="password" placeholder="Senha">
        <label for="">Confirme sua Senha</label>
        <input type="password" placeholder="Senha">
        <label for="">Telefone</label>
        <input type="text" placeholder="Usuário ou E-mail">
        <br>
        <button class="btnCadastrar">Cadastrar</button>
        <button class="btnLogin"  v-on:click="changeCadastro()">Voltar</button>
    </div>
  </div>
 

</template>

<script>
export default {
    name: 'ModalLoginRegister',

    methods: {
            changeLogin: function(){
                document.getElementById('CadastroCase').style.display = "flex";
                document.getElementById('LoginCase').style.display = "none";
            },
            changeCadastro: function(){
                document.getElementById('ContainerLogin').style.display = "flex";
                document.getElementById('CadastroCase').style.display = "none";
                document.getElementById('LoginCase').style.display = "flex";
            },
            changeContainer: function(){
                document.getElementById('ContainerLogin').style.display = "none";
                document.getElementById('CadastroCase').style.display = "none";
                document.getElementById('LoginCase').style.display = "none";
            }
    }
}


</script>

<style>

    #ContainerLogin{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-image: url('../assets/bglogin2.png');
        background-position: center;
        background-size: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    
    .SubContainerLogin span{
        padding: 20px;
    }

    .SubContainerLogin{
        width: 400px;
        padding: 50px;
        position: fixed;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        flex-direction: column;
        text-align: center;
        display: flex;
        box-shadow: 0 6px 20px #00000040, 0 2px 2px #00000038;
    } 

    .SubContainerLogin h1{
        font-weight: bold;
    }

    .SubContainerLogin label{
        padding: 0px;
        margin: 0px;
        text-align: left;
    }
    .SubContainerLogin input, button{
        background-color: transparent;
        margin-bottom: 1%;
        padding: 8px;
    }

    .SubContainerLogin input{
        background-color: transparent;
        padding-left: 0px;
        border: 0px;
        border-bottom: 1px solid gray;
        margin-bottom: 10%;
    }

    .btnGoogle{
        background-color: #f14956;
        letter-spacing: 2px;
        font-weight: bold;
        color: white;
        border: 0px;
    }
    .btnFace{
        background-color: #325cbb;
        letter-spacing: 2px;
        font-weight: bold;
        color: white;
        border: 0px;
    }
    .btnLogin{
        background-color: #000;
        letter-spacing: 2px;
        font-weight: bold;
        color: white;
        border: 0px;
    }
    .btnCadastrar{
        border: 2px solid black;
        letter-spacing: 2px;
        font-weight: bold;
    }

    /* Cadastro */

    .SubContainerCadastro{
        width: 400px;
        padding: 50px;
        background-color: white;
        position: fixed;
        top: 8%;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        text-align: center;
        display: flex;
        box-shadow: 0 6px 20px #00000040, 0 2px 2px #00000038;
        display: none;
    }

    .SubContainerCadastro h1{
        font-weight: bold;
    }

    .SubContainerCadastro span{
        padding: 20px;
    }

    .SubContainerCadastro label{
        padding: 0px;
        margin: 0px;
        text-align: left;
    }
    .SubContainerCadastro input, button{
        background-color: transparent;
        margin-bottom: 1%;
        padding: 8px;
    }

    .SubContainerCadastro input{
        background-color: transparent;
        padding-left: 0px;
        border: 0px;
        border-bottom: 1px solid gray;
        margin-bottom: 10%;
    }
</style>