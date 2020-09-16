<template>
    <div id="menu">
        <div class="iconMenu" id="btnMenuIcon" v-on:click="openMenu()">
            <span class="glyphicon">
               &#xe236;
            </span>
        </div>
        <div class="subMenu configMenu">
            <span>Início</span>
            <span>Catálogo</span>
            <span>Rastreio</span>
            <span>FAQ</span>
        </div>
        <span>Kimochism</span>
        <div class="endMenu configMenu">
            <span>Entre ou Cadastre-se</span>
            <i class="fa far fa-heart" style="font-size:24px"></i>
            <i class="fa fa-shopping-bag" style="font-size:24px"></i>
        </div>

        <!-- hide menu -->
        <div id="secondMenu">
            <span>Início</span>
            <span>Catálogo</span>
            <span>Rastreio</span>
            <span>FAQ</span>
            <span>Entre ou Cadastre-se</span>
            <span>
            <i class="fa fa-shopping-bag" style="font-size:24px"></i>
            </span>
        </div>
        <!-- hide menu -->

    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<script>

export default {
    name: 'Menu',

    data: {
        message: '',
        isOpen: false
    },

    methods: {
        openMenu: function(){
            if(this.isOpen){
                document.getElementById('secondMenu').style.display = "flex";
            }else{
                document.getElementById('secondMenu').style.display = "none";
            }
            this.isOpen = !this.isOpen;
        }
    }
       
}

</script>

<style>

    #menu{
        width: 100%;
        background-color: white;
        padding: 0px 50px;
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
    .configMenu{
        padding: 8px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .endMenu{
        width: 250px;
        justify-content: space-between;
        flex-direction: row;
        display: flex;
    }
    div span{
        padding: 8px;
    }
    div span, i{
        cursor: pointer;
    }
    .glyphicon{
        font-size: 24px;
    }
    .iconMenu{
        display: none;
        padding: 8px;
    }  
    /* Hide menu */

    #secondMenu{
        flex-wrap: wrap;
        width: 100%;
        display: none;
    }
    #secondMenu span{
        width: 100%;
        padding: 16px;
    }

    @media screen and (max-width: 850px){

        #secondMenu{
            display: none;
        }

        #menu{
            flex-wrap: wrap;
            padding: 0px;
        }
        .iconMenu{
            display: flex;
        }
        .subMenu{
            display: none;
        }
        .endMenu{
            display: none;
        }
    }

</style>