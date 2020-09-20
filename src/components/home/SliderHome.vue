<template>
    <div id="Slider">
        <span>Kimochism</span>
        <span>気持ち</span>
    </div>
</template>

<script>
export default {
    name: 'SliderHome'
}
</script>

<style scoped>
    #Slider{
        width: 100%;
        height: 550px;
        background-image: url("../../assets/bg4k.jpg");
        background-position: center;
        background-size: cover;
        font-size: 75px;
        font-weight: bold;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    #Slider span{
        color: white;
        text-shadow: -1px -1px 0px #000,
        0px -1px 0px #000,
        1px -1px 0px #000,
        -1px  0px 0px #000,
        1px  0px 0px #000,
        -1px  1px 0px #000,
        0px  1px 0px #000,
        1px  1px 0px #000;
    }

</style>