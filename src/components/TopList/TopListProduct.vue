<template>
  <div>
    <div class="connect" :item="k" :key="i" v-for="(k,i) in topListInfo" @click="godetail(i)">
      <div class="product-side1">
        <router-link to="/GoodsDetails" tag="a">
          <img :src="k.proImg"  class="pro-img " alt="">
        </router-link>
        <div class="pro-right">
          <p class="pro-name">{{k.proName}}</p>
          <p class="pro-desc">{{k.proDesc}}</p>
          <router-link to="\GoodsDetails" tag="p"  class="buynow">
            <img src="../../assets/images/nowbuyImg.jpg" alt="">
          </router-link>
          <p class="priceline">￥<span class="price">{{k.proPrice}}</span></p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
    export default {
      props:["topListInfo"],
      name: "TopListProduct",
      methods:{
        godetail(id){
          this.$router.push({path:`/toplist/${id}`})
        }
      }

    }
</script>
<style scoped>
  .connect {
    display: flex;
    justify-content: space-between;
    background:white;
    padding:.13rem .1rem;
    border-bottom:1px solid #ccc;
  }
  .product-side1 {
    width: 1.05rem;
    padding: 0 .07rem 0.11rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .pro-right{
    flex: 1;
    padding-top:.25rem;
  }
  .pro-right .buynow{
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }
  .pro-right .buynow img{
   width:.84rem;
    height:.2rem;

  }
  .product-side1 a {
    color: black;
    display: flex;
    text-decoration: none;
  }
  .product-side1 .pro-img {
    width: 1.05rem;
    height: 1.05rem;
    margin:0 auto;
  }
  .product-side1 .pro-name {
    font-size: 0.14rem;
    line-height: 0.08rem;
    font-weight: bold;
    margin: 0 0 0.11rem 0;

  }
  .product-side1 .pro-desc {
    width: 100%;
    margin-top: 0.06rem;
    font-size: 0.13rem;
    line-height: 0.19rem;
    margin-bottom: .23rem;
    color:#7a7a7a;

  }
  .product-side1 .priceline {
    font-weight: bold;

  }
  .product-side1 .priceline .price {
    line-height: 0.09rem;
    font-size: .16rem;
  }

</style>
