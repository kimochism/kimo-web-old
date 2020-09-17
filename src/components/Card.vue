<template>
    <div id="CardContainer">

           <h1>cartão</h1>
           <span>Tipo do cartão</span>

           <div id="SubCardContainer">
               <div id="Card">
                   {{ name }}
                   <br>
                   {{ cardNumber }}
                   <br>
                   <div v-if="day">
                    {{ day }} / {{ month }}
                   </div>
                    <br>
                    {{ cvv }}
               </div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1024px-Mastercard_2019_logo.svg.png" alt="Bandeira" width="60px">
           </div>

            <br>

            <label for="">Nome no cartão</label>
            <input type="text" v-model="name" placeholder="Kimochism Store">

            <br>

            <label for="">Número do cartão</label>
            <input v-model="cardNumber" maxlength="19" placeholder="0000 0000 0000 0000">

            <br>

            <div id="LastInfoCard">
                <div id="headerInfoCard">
                    <label for="">Data de Expiração</label>
                    <label for="">CVV</label>
                </div>
            </div>
            <div class="space-bet">
                <input type="text" maxlength="2" v-model="day" placeholder="01">
                <input type="text" maxlength="2" v-model="month" class="add-pad" placeholder="27">
                <input type="text" maxlength="3" v-model="cvv" placeholder="123">
            </div>

            <br>
            <br>

            <button class="btnSuccess">Finalizar</button>

    </div>
</template>


<script>

export default {
    name: 'Card',

    data: function() {
        return {
            name: '',
            cardNumber: '',
            day: '',
            month: '',
            cvv: ''
        }
    }
}

</script>

<style>
    #CardContainer{
        min-width: 480px;
        width: 480px;
        padding: 40px;
        margin-left: 60px;
        display: flex;
        color: white;
        border-radius: 15px;
        flex-direction: column;
        background-image: linear-gradient(30deg, #161616, #494949);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    #CardContainer input{
        color: white;
        border: 0px;
        padding: 8px 0px;
        margin-bottom: 5%;
        background-color: transparent;
        border-bottom: 1px solid grey;
    }

    #CardContainer label{
        color: grey;
        margin: 0px;
        padding: 0px;
    }

    #SubCardContainer{
        width: 100%;
        height: 200px;
        align-items: center;
        display: flex;
        margin-bottom: 5%;
    }

    #SubCardContainer img{
        margin: 15%
    }

    #Card{
        margin-left: -80px;
        width: 320px;
        height: 180px;
        border-radius: 5px;
        background-color: rgb(206, 206, 206);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        cursor: pointer;
    }

    #Card:hover{
        transform: rotateY(180deg);
        transition: 1s;
    }

    .btnSuccess{
        border-radius: 5px;
        border: 0px;
        padding: 25px;
        background-image: linear-gradient(-170deg, rgb(10, 128, 35), rgb(27, 230, 71));
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
    }

    #headerInfoCard{
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }

    #headerInfoCard:nth-child(1){
        width: 70%;
    }

    #LastInfoCard input{
        width: 20%;
        margin-right: 2%;
        background-color: rgb(27, 230, 71);
    }

    .space-bet{
        display: flex;
    }

    .space-bet input{
        width: 20%;
        margin-right: 5%;
    }

    .add-pad{
        margin-right: 69px !important;
    }

</style>