<template>
    <div id="ShoppginListContainer">
       <div id="ListBuy">

       </div>

       <div id="CardContainer">

           <h1>Card Details</h1>
           <span>Card Type</span>

           <div id="SubCardContainer">
               <div id="Card"></div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1024px-Mastercard_2019_logo.svg.png" alt="Bandeira" width="60px">
           </div>

            <label for="">Name in card</label>
            <br>
            <input type="text">

            <label for=""></label>
            <input type="number">

            <div id="LastInfoCard">
                <label for="">Experition Date</label>
                <label for="">CVV</label>
                <br>
                <input type="text">
                <input type="text">
                <input type="text">
            </div>

       </div>
    </div>
</template>

<script>
export default {
    name: 'ShoppingList'
}
</script>

<style>

    #ShoppginListContainer{
        padding: 50px;
        flex-direction: row-reverse;
        display: flex;
    }

    #CardContainer{
        min-width: 480px;
        width: 480px;
        height: 800px;
        padding: 40px;
        display: flex;
        color: white;
        border-radius: 15px;
        flex-direction: column;
        background-image: linear-gradient(30deg, #161616, #494949);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    #SubCardContainer{
        width: 100%;
        height: 200px;
        align-items: center;
        display: flex;
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
    }

    #Card:hover{
        transform: rotateY(180deg);
        transition: 1s;
    }


</style>