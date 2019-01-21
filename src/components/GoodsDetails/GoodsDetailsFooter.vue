<template>
<div class="footer">
 <div class="footerLeft">
   <router-link to="/ShopCarts" tag="a" class="gotoCarts">
     <i class="iconfont icon-shoppingbag" ></i>
     <p>购物车</p>
   </router-link>
   <router-link to="/ShopCarts" tag="a" class="onlineserver">
     <i> <img src="/static/images/server1.jpg" alt=""></i>

     <p>在线客服</p>
   </router-link>
 </div>
  <div class="footer-right">
    <a href="$" class="addCarts">
      加入购物车
    </a>
    <a href="#" class="nowbuy">
      立即购买
    </a>
  </div>

</div>
</template>

<script>
    export default {
        name: "GoodsDetailsFooter"
    }
</script>

<style scoped>
  @import "../../assets/css/public.css";
.footer{
  display: flex;
  justify-content: space-between;
  background:white!important;
  height:.5rem;
  color:#b7b7b7;
  padding:.02rem;
  -webkit-box-shadow: 0 0 .05rem .02rem #b7b7b7;
  -moz-box-shadow: none;
  box-shadow: none;
}
.onlineserver,.gotoCarts{
  width:.12rem;
  height:.12rem;

}
img{
  width:.34rem;
  height:.34rem;
}
.footerLeft{
  display: flex;
  flex: 1;
}
.footerLeft a{
  flex:1;
  text-align: center;
  color:#b7b7b7;
  background:white;
}
.gotoCarts i{
  font-size:.24rem;
}
  .addCarts,.nowbuy{
    width: 1.25rem;
    height: .5rem;
    color: white;
    font-size: .13rem;
    line-height: .5rem;
    text-align: center;
     }
.nowbuy{
  background:#ee0000;
}
.addCarts{
  background:black;
}
</style>
