<template>
    <div>
       <div id="ListBuy">
           <ItemProduto/>
       </div>
        <div class="footerShoppingList">
            <div class="continueCart">
                <span class="material-icons">keyboard_arrow_left</span>
                <span class="colorPrimary">Continuar comprando</span>
            </div>
            <div>
                <span>Subtotal: <b>R$</b></span>
                <span>24,90</span>
            </div>
        </div>
    </div>
</template>

<script>

import ItemProduto from '../components/ItemProduto.vue'

export default {
    name: 'ShoppingList',
    components: {
        ItemProduto,
    }
}
</script>

<style>

    #ListBuy{
        width: 1100px;
        margin-right: 50px;
        height: 690px;
        margin: auto;
        overflow: auto;
    }

   
    /* footer */
    
    .footerShoppingList{
        padding: 25px 15px;
        font-size: 16px;
        font-weight: bold;
        justify-content: space-between;
        align-items: center;
        display: flex;
    }

    .colorPrimary{
        color: #007bff;
    }
    
    .continueCart{
        align-items: center;
        display: flex;
    }
</style>