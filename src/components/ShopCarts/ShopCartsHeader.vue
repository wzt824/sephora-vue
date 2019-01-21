<template>
  <div class="header" id="shopHeader">
    <span class="cart-title">购物车</span>
    <div  class="header-right">
      <span class="editor">编辑</span>
      <span class="finish" >完成</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopCartsHeader"
    }
</script>

<style scoped>
  /*header开始*/
  #shopHeader{
    padding:.18rem .15rem;
    color:#2e2e2e;
    font-size: .13rem;
    background: white;
    box-shadow: 0 0.05rem .03rem .09rem #d7d7d7;
    text-align: center;
  }
  .cart-title{
    text-align: center;
  }
  .header-right{
    color:#8b8b8b;
    float: right;
  }
  .finish{
    display: none;
  }
</style>
