<template>
    <div>
        <div id="ContainerCart">
            <ProductList/>
            <Card/>
        </div>
        <div>
            <Gap/>
            <Footer/>
            <MessageBar/>
        </div>
    </div>
</template>

<script>

import ProductList from '../components/cart/ProductList'
import MessageBar from '../components/navigation/MessageBar'
import Footer from '../components/navigation/Footer.vue'
import Card from '../components/payment/Card.vue'
import Gap from '../components/navigation/Gap.vue'

export default {
    name: 'Cart',
    components: {
        ProductList,
        Card,
        Footer,
        MessageBar,
        Gap
    }
}

</script>

<style>
    #ContainerCart{
        padding: 50px 0px;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
    }
</style>