<template>
<div>
  <div class="quan">
    <p>优惠券</p>
    <a href="javascript:;">
      <img src="images/more.jpg" alt="">
    </a>
  </div>
  <div class="quan">
    <p>输入优惠码</p>
    <a href="javascript:;">
      <img src="images/more.jpg" alt="">
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "ShopCartsSectionProductDiscount"
    }
</script>

<style scoped>
  .details a{
    color:#9c9c9c;
  }
  .details i{
    font-weight: bolder;
    padding-left:.05rem;
  }
  .quan{
    display: flex;
    justify-content: space-between;
    padding:.16rem .1rem;
    align-items: center;
    background: white;
    margin-bottom: .1rem;
    font-size: .16rem;
    line-height: .16rem;
  }
  .quan img{
    width:.11rem;
    height:.2rem;
  }
</style>
