<template>
    <div id="MessageBar">
        <span>KIMOCHISM #FIQUEEMCASA</span>
    </div>
</template>

<script>
export default {
    name: 'MessageBar'
}
</script>

<style scoped>

    #MessageBar{
        width: 100%;
        height: 40px;
        background-color: whitesmoke;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    #MessageBar span{
        letter-spacing: 0.2em;
        font-size: 12px;
    }
    
</style>