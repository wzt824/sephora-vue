<template>
  <!--footer开始-->
  <div class="footer">
    <router-link to="/index" tag="a">
      <i class="iconfont icon-shouye"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/category" tag="a">
      <i class="iconfont icon-fenlei"></i>
      <p>分类</p>
    </router-link>

    <router-link to="/PublicPraise" tag="a">
      <i class="iconfont icon-miaowukoubei"></i>
      <p>美力口碑</p>
    </router-link>
    <router-link to="/ShopCarts" tag="a">
      <i class="iconfont icon-shoppingbag" ></i>
      <p>购物车</p>
    </router-link>
    <router-link to="/AboutMe" tag="a">
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "ShopCartsFooter"
    }
</script>

<style scoped>
  @import "../../assets/css/public.css";
  /*footer开始*/
  .footer {
    padding: 0.09rem .24rem .1rem;
    display: flex;
    box-shadow: 0 -0.02rem .07rem 0 #e1dfdf;
    justify-content: space-between;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .footer a {
    color: #858585;
    text-align: center;
    /*flex:1;*/
  }
  .footer a i {
    font-size: .23rem;
    line-height: .23rem;
  }
  .footer a p {
    font-size: .1rem;
    line-height: .1rem;
    padding-top: .06rem;
    text-align: center;
  }

</style>
