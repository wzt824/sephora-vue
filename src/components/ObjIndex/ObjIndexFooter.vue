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
        name: "ObjIndexFooter"
    }
</script>

<style scoped>
  @import "../../assets/css/public.css";
  .footer {
    font-family: "微软雅黑", Arial;
    padding: 0.09rem .24rem .1rem;
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0 -0.01rem .02rem 0 #c1c1c1;
    align-items: center;
    position:fixed;
    bottom:0;
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 990;
  }
  .footer a {
    color: #858585;
    text-align: center;
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
