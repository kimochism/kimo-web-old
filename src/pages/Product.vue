<template>
    <div id="ContainerProduct">
        <div class="subContainerProduct">
            <div class="containerImage" style="background-image:url('https://i.pinimg.com/564x/08/f7/af/08f7afb7fcbd09ca57ec9fb12329b055.jpg'); background-size: cover;">

            </div>
            <div class="infoProductBox">

                <h4>CAMISETA SAILOR MOON</h4>
                <span>REF: 550869051</span>
                <div class="containerColorBoxes">
                    <div class="colorBox black"></div>
                    <div class="colorBox white"></div>
                    <div class="colorBox gray"></div>
                    <div class="colorBox pink"></div>
                </div>
                <div class="containerSizes">
                    <div class="sizeBox">
                        P
                    </div>
                    <div class="sizeBox">
                        M
                    </div>
                    <div class="sizeBox">
                        G
                    </div>
                    
                </div>

                <div class="InfoAddons">
                    Provador virtual ; Tabela de Medidas
                </div>

                <hr>

                <div class="containerPrice">
                    <span>
                        <b>R$ 69,90</b>
                        <span>4x de R$ 17,48* s/juros no Cartão</span>
                    </span>
                </div>

                <div class="containerButtons">
                    <button>Adicionar ao carrinho</button>
                    <button>Comprar com 1 click</button>
                </div>

                <div class="containerMessageAddon">
                    <p>As modalidades, prazos e custos de entrega são válidas apenas para o item em consulta.</p>
                </div>

                <div class="containerFrete">
                    <span>
                        Simular Frete
                    </span>
                    <div class="subContainerFrete">
                        <input type="text" placeholder="Digite seu CEP">
                        <button>OK</button>
                    </div>
                    <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm">Não sei meu CEP</a>
                </div>

                <h1 class="we">
                    Kimochism <br> 気持ち
                </h1>
            </div>
        </div>

        <div class="rentaguloLL">
            asdsad
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product'
}
</script>

<style>
    #ContainerProduct{
        padding: 80px;
        flex-direction: column;
        align-items: center;
        display: flex;
    }
    .we{
        margin: 50px 0px ;
        font-weight: bold;
        text-align: center;
    }
    
    .subContainerProduct{
        max-width: 1200px;
        justify-content: space-between;
        display: flex;
    }

    .containerImage{
        width: 500px;
        height: 500px;
    }

    .infoProductBox{
        width: 300px;
        padding: 0 20px;
        margin: 50px;
        justify-content: center;
        flex-direction: column;
        display: flex;
    }

    /* Cores */
    .containerColorBoxes{
        width: 200px;
        padding: 15px 0px;
        justify-content: space-around;
        display: flex;
    }
    .colorBox{
        width: 25px;
        height: 25px;
        padding: 3px;
        background-color: rebeccapurple;
    }
    .colorBox::before{
        position: absolute;
        display: block;
        content: '';
        border: 2px solid black;
        height: 25px;
        width: 25px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    /* Tamanhos */
    .containerSizes{
        width: 200px;
        padding: 15px 0px;
        display: flex;
    }
    .sizeBox{
        width: 25px;
        height: 25px;
        margin: 1% 6.9%;
        text-transform: uppercase;
        border: 1px solid rgb(196, 196, 196);
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .black{
        background-color: rgb(24, 24, 24);
    }
    .gray{
        background-color: grey;
    }
    .white{
        background-color: rgb(218, 218, 218);
    }
    .pink{
        background-color: rgb(240, 155, 152);
    }









    .rentaguloLL{
        max-width: 1000px;
        height: 100px;
        background-color: bisque;
    }
    
</style>