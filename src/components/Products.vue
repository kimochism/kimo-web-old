<template>
    <div class="containerItems">
        
        <div class="headerItems">
            <h3>Conheça nosso vestuário</h3>
            <h2>Talvez você goste dessas ideais</h2>
        </div>

        <div class="subContainerItems">

            <div class="item">
                <img src="../assets/formated/3.png" alt="">
                <p class="flexDescription">
                    <span>Preço</span>
                    <span>Parcelas</span>
                </p>
            </div>
            <div class="item">
                <img src="../assets/formated/6.png" alt="">
                <p class="flexDescription">
                    <span>Preço</span>
                    <span>Parcelas</span>
                </p>
            </div>
            <div class="item killua">
                <img src="../assets/formated/4.png" alt="">
                <p class="flexDescription">
                    <span>Preço</span>
                    <span>Parcelas</span>
                </p>
            </div>
            <div class="item">
                <img src="../assets/formated/5.png" alt="">
                <p class="flexDescription">
                    <span>Preço</span>
                    <span>Parcelas</span>
                </p>
            </div>
            <div class="item">
                <img src="../assets/formated/2.png" alt="">
                <p class="flexDescription">
                    <span>Preço</span>
                    <span>Parcelas</span>
                </p>
            </div>
            <div class="item">
                <img src="../assets/formated/1.png" alt="">
                <p class="flexDescription">
                    <span>Preço</span>
                    <span>Parcelas</span>
                </p>
            </div>
        </div>
        
            <div class="buttonLoadItems">
                <button>Ver mais</button>
            </div>
        
    </div>
</template>

<script>
export default {
    name: 'Products'
}
</script>

<style>
    h3, h2{
        text-align: center;
    }
    .containerItems{
        background-color: white;
        padding:50px;
    }
    .headerItems{
        padding: 50px;
        padding-bottom: 80px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .subContainerItems{
        display: flex;
        flex-wrap: wrap;
        max-width: 1300px;
        margin: 0 auto;
    }
    .subContainerItems div{
        flex: 1 1 380px;
        margin: 10px
    }
    .item{
        overflow:hidden;
        cursor: pointer;
    }
    .item img{
        width: 100%;
        display: block;
    }
    /* pro produto sumir */
    /* .killua:hover > img{
        opacity: 0;
    }
    .killua:hover {
        background-image: url(https://media.tenor.com/images/c4aca1d444d54ae92c796b3f6bbb76dc/tenor.gif);
        background-size: 100%;
        background-repeat: no-repeat;
    }     */
    /* e aparecer animação */
    .flexDescription{
        flex-direction: column;
        display: flex;

    }
    .buttonLoadItems{
        justify-content: center;
        display: flex;
        margin: 50px;
    }
    .buttonLoadItems button{
        width: 300px;
        border-radius: 0px;
        padding: 15px;
        color: white;
        background-color: black;
        border: 1px solid black;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
    }
    .buttonLoadItems button:hover{
        background-color:  white;
        color: black;
    }
</style>