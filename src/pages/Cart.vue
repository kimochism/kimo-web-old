<template>
    <div>
        <div id="ContainerCart">
            <ShoppingList/>
            <Card/>
        </div>
        <div>
            <Gap/>
            <Footer/>
            <Messagebar/>
        </div>
    </div>
</template>

<script>

import ShoppingList from '../components/ShoppingList.vue'
import Messagebar from '../components/Messagebar.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
import Gap from '../components/Gap.vue'

export default {
    name: 'Cart',
    components: {
        ShoppingList,
        Card,
        Footer,
        Messagebar,
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