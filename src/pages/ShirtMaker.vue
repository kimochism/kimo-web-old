<template>
  <div class="categories-body">

      <p class="title">Faça sua estampa!</p>

      <md-steppers class="container-stepper" :md-active-step.sync="active" md-linear>
        <md-step id="first" md-label="Escolha seu modelo" :md-error="firstStepError" :md-done.sync="first">
          <div class="types-container">
            <CardShirtType id="black_shirt" @click="choseItem('black_shirt')" imageLink='https://static.hering.com.br//sys_master/images/h63/ha0/9678028079134.jpg?name=0201-N1007S-D1'/>
            <CardShirtType id="white_shirt" @click="choseItem('white_shirt')" imageLink='https://static.hering.com.br//sys_master/images/h4b/he4/9654043148318.jpg?name=0299-N0A00S-D1'/>
            <CardShirtType id="gray_shirt" @click="choseItem('gray_shirt')" imageLink='https://static.hering.com.br//sys_master/images/h8f/h70/9611191091230.jpg?name=0201-M2H07S-D1'/>
            <CardShirtType id="pink_shirt" @click="choseItem('pink_shirt')" imageLink='https://static.hering.com.br//sys_master/images/hc5/h78/9777899012126.jpg?name=0201-KRQEN-D1'/>
            <CardShirtType id="black_sweatshirt" @click="choseItem('black_sweatshirt')" imageLink='https://cdn.awsli.com.br/600x700/987/987705/produto/37808766/fcc0c2398d.jpg'/>
            <CardShirtType id="white_sweatshirt" @click="choseItem('white_sweatshirt')" imageLink='https://produtos.fotos-riachuelo.com.br/media/catalog/product/cache/3541e153ef6ead3044d72626c3847968/b/l/blusa-moletom-lisa---branco-13753886_foto6_detalhe.jpg'/>
            <CardShirtType id="gray_sweatshirt" @click="choseItem('gray_sweatshirt')" imageLink='https://cdn.awsli.com.br/600x700/987/987705/produto/37808828/a847b57c38.jpg'/>
            <CardShirtType id="pink_sweatshirt" @click="choseItem('pink_sweatshirt')" imageLink='https://http2.mlstatic.com/D_NQ_NP_706290-MLB31078684416_062019-O.webp'/>
          </div>
        <md-button :disabled="firstButtonDisable" class="md-raised md-primary" @click="setDone('first', 'second')">Proximo</md-button>
      </md-step>

      <md-step id="second" md-label="Faça sua estampa" :md-error="secondStepError" :md-done.sync="second">
        
        <md-button :disabled="secondButtonDisable" class="md-raised md-primary" @click="setDone('second', 'third')">Proximo</md-button>
      </md-step>

      <md-step id="third" md-label="Faça sua estampa (costas)" md-description="Opcional" :md-error="thirdStepError" :md-done.sync="third">
        
        <md-button :disabled="thirdButtonDisable" class="md-raised md-primary" @click="setDone('third')">Finalizar</md-button>
      </md-step>
    </md-steppers>
      <Footer/>
      <MessageBar/>
  </div>
</template>

<script>
    import MessageBar from '../components/navigation/MessageBar.vue'
    import Footer from '../components/navigation/Footer.vue'
    import CardShirtType from '../components/shirtMaker/CardShirtType.vue'

  export default {
      name: 'ShirtMaker',
      components: {
        MessageBar,
        Footer,
        CardShirtType
      },
      data: () => ({
        active: 'first',
        first: false,
        second: false,
        third: false,
        firstStepError: null,
        secondStepError: null,
        thirdStepError: null,
        firstButtonDisable: true,
        secondButtonDisable: true,
        thirdButtonDisable: true,
        selectedItem: ''
      }),
      methods: {
        setDone (id, index) {
          this[id] = true

          this.secondStepError = null

          if (index) {
            this.active = index
          }
        },
        setError () {
          this.secondStepError = 'This is an error!'
        },
        choseItem(item){
          this.selectedItem = item;
        }
    }

  }
</script>

<style scoped>
    .title{
      margin: 4% 0;
      font-size: 40px;
      font-weight: bold;
    }
  .types-container {
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
    padding: 5px 25px;
  }
  .container-stepper {
    margin: 2% 0; 
  }
</style>