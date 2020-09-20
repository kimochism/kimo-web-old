<template>
    <div id="ContainerNotFound">
        <img src="../assets/404.png" alt="">
        <span>Oops.. Página não encontrada</span>
        <p>
            Ocorreu um erro na página que você tentou acessar 
            <br> 
            <a href="">volte</a>
            e tente novamente mais tarde.
        </p>
    </div>
</template>

<script>
export default {
    naem : 'NotFound'
}
</script>
    
<style>
    #ContainerNotFound{
        padding: 120px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    #ContainerNotFound span{
        font-size: 20px;
        padding: 28px;
    }
    #ContainerNotFound p{
        text-align: center;
        font-size: 20px;
        line-height: 25px;
    }
</style>