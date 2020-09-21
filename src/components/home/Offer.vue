<template>
    <div id="ContainerOffer">

        <div class="HeaderOffer">
            <h3>Uma das promoções mais esperadas do mês de Setembro</h3>
            <h2><b>Oferta limitada</b></h2>
        </div>

        <div id="Offer">

            <div class="Box Product" v-if="offerProduct && offerProduct.images && offerProduct.images.length">
                <img :src="offerProduct.images[0].url" width="100%"/>
            </div>

            <div class="Box Info">

                <h1>{{ offerProduct.name }}</h1>
                <br>
                <p class="price">
                    <span>R$ {{ offerProduct.discount_price }}</span>
                    <span>R$ {{ offerProduct.price }}</span>
                </p>
                <span>Ou por apenas 6x de R$ 25,28</span>

                <br>
                <br>

                <select>
                    <option value="">Cor: Branco</option>
                    <option value="">Cor: Preto</option>
                    <option value="">Cor: Cinza</option>
                </select>

                <button>Adicionar ao Carrinho</button>
                <a href="">Ver detalhes do produto</a>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Offer',

    props: ['offerProduct'],

}
</script>

<style scoped>

    h1,h2,h3,h4,h5,h6{
        margin: 0px;
        font-weight: 100;
        letter-spacing: 2px;
        line-height: 30px;
        text-transform: uppercase;
    }
    #ContainerOffer{
        width: 100%;
        padding: 40px 0px;
        background-color: rgb(255, 255, 255);
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e6e6e6;
    }
    .HeaderOffer{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .HeaderOffer h2,h3{
        margin: 10px;
    }
    #Offer{
        width: auto;
        justify-content: center;
        align-items: center;
        display: flex;
        
        margin-top: 45px;
    }

    @media screen and (max-width:800px){
        #Offer{
            flex-wrap: wrap;
        }
    }


    .Box{
        width: 400px;
        height: 400px;  
        margin: 1%;
    }
    .Product{
        /* background-image: url(https://i.pinimg.com/564x/30/ab/68/30ab68f32c73acbe4811aafc8b5ce594.jpg); */
        background-size: cover;
    }
    .Info{
        flex-direction: column;
        display: flex;
    }
    .Info span{
        font-size: 19px;
    }
    .price{
        justify-content: space-between;
        font-size: 18px;
        margin: 10px 0px;
        color: green;
        display: flex;
        width: 140px;
    }
    .price span:nth-child(2){
        text-decoration: line-through;
        color: grey;
    }
    .Info select{
        padding: 15px;
        margin-bottom: 2%;
        border-radius: 0px;
    }
    .Info button{
        border-radius: 0px;
        padding: 15px;
        color: white;
        background-color: black;
        border: 1px solid black;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 10%;
        cursor: pointer;
    }
    .Info button:hover{
        background-color:  white;
        color: black;
    }
    .Info a{
        width: 185px;
        color: black;
        text-decoration: none;
        border-bottom: 1px solid black;
    }

</style>