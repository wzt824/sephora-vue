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
        name: "ObjCategoryFooter"
    }
</script>

<style scoped>
  @import "../../assets/css/public.css";
  .footer {
    padding: 0.09rem .24rem .1rem;
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0 -0.04rem .06rem 0 #f4f4f4;
    align-items: center;
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
