<template>
  <div id="ContainerInstagramCase">

    <div class="boxInstagram" style="background-image:url('https://i.pinimg.com/564x/40/34/f0/4034f05e24eae60631ce39d3e8d08677.jpg');">
      <div class="instaOpacity">
        <span>@dapessoa</span>
      </div>
    </div>
    
    <div class="boxInstagram" style="background-image:url('https://i.pinimg.com/564x/12/0b/43/120b4312f0bef8d4ede0b3661aacbfda.jpg');">
      <div class="instaOpacity">
        <span>@dapessoa</span>
      </div>
    </div>

    <div class="boxInstagram" style="background-image:url('https://i.pinimg.com/564x/3f/13/90/3f1390fb6e6db3e25633223ec1325c12.jpg');">
      <div class="instaOpacity">
        <span>@dapessoa</span>
      </div>
    </div>

    <div class="boxInstagram" style="background-image:url('https://i.pinimg.com/564x/ac/ad/10/acad1099bf3e6b3a64efd8f7130a8ab2.jpg');">
      <a href="https://www.instagram.com/blezale/">
        <div class="instaOpacity">
          <span>@dapessoa</span>
        </div>
      </a>
    </div>

    <div class="boxInstagram" style="background-image:url('https://i.pinimg.com/564x/de/1c/e3/de1ce3abbae5685cf05f80c350db70b9.jpg');">
      <div class="instaOpacity">
        <span>@dapessoa</span>
      </div>
    </div>

    <div class="boxInstagram" style="background-image:url('https://i.pinimg.com/564x/31/1e/a9/311ea9031362193ea525f6f1efcdb5c2.jpg');">
      <div class="instaOpacity">
        <span>@dapessoa</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'InstagramCase'
}
</script>

<style>

#ContainerInstagramCase{
  height: 500px;
  margin-top: 80px;
  display: flex;
}
.boxInstagram{
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}
.instaOpacity:hover{
  opacity: 1;
  cursor: pointer;
}
.instaOpacity{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.80);
  background-image: url('../../assets/insta.png');
  background-size: 70px 70px;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: white;
  transition: 1s;
  display: flex;
  opacity: 0;
}
.instaOpacity span{
  margin-top: 110px;
  text-align: center;
}
</style>