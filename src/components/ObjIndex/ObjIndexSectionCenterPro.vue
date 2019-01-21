<template>
  <div class="section-side1">
    <div class="article" :key="i" v-for="(p,i) in datahotside">
      <router-link to="/toplist" tag="a"  class="sec-show" >
        <img :src="p.imgBanner" alt="">
      </router-link>
      <div class="connect">
        <div class="product-side1">
          <a  :item="k" :key="ind" v-for="(k,ind) in p.proInfo" @click="goDetails(ind)">
            <img :src="k.proImg" alt="">
            <p class="pro-name">{{k.proName}}</p>
            <span class="hengline">
                </span>
            <p class="pro-desc">{{k.proDesc}}</p>
            <p class="priceline">￥<span class="price">{{k.proPrice}}</span></p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      props:["datahotside"],
        name: "ObjIndexSectionCenterPro",
        data(){
          return{
            // hotSide:{
            //    imgBanner:require("@/assets/images/s1-1.jpg"),
            //    proInfo:[
            //     {proImg:require("@/assets/images/s1-pro1.jpg"),proName:"LAN COMN",proDesc:"兰蔻肌底臻宠精选礼盒",proPrice:"1280.00"},
            //     {proImg:require("@/assets/images/s1-pro2.jpg"),proName:"Fresh",proDesc:"馥蕾诗明星面膜礼盒(18节日定制)",proPrice:"980.00"},
            //     {proImg:require("@/assets/images/s1-pro3.jpg"),proName:"M.A.C",proDesc:"魅可18圣诞限量迷你唇膏套组",proPrice:"1100.00"}
            //   ]
            // }
        }
        },
      methods:{
        goDetails(id){
          this.$router.push({path:`/GoodsDetails/${id}`})
        }
      }
    }
</script>
<style scoped>
  /*obj-index-section-center-pro*/
   .section-side1 {
    background: white;
  }
  .sec-show {
    padding: 0 .11rem;
  }
   .sec-show img {
    width: 100%;
    height: 1.52rem;
  }
  .connect {
    display: flex;
    justify-content: space-between;
    margin-bottom: .23rem;
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
 .product-side1 a {
    color: black;
  }
 .product-side1 a img {
    width: 1.05rem;
    height: 1.05rem;
    margin:0 auto;
  }
 .product-side1 .pro-name {
    font-size: 0.08rem;
    line-height: 0.08rem;
    margin: 0 0 0.11rem 0;
    text-align: center;
  }
 .product-side1 .hengline {
    display: block;
    width: 0.1rem;
    height: 0.01rem;
    background: black;
    margin: 0 auto;
  }
 .product-side1 .pro-desc {
    width: 100%;
    margin-top: 0.06rem;
    font-size: 0.13rem;
    line-height: 0.19rem;
    text-align: center;
  }
 .product-side1 .priceline {
    text-align: center;
  }
 .product-side1 .priceline .price {
    font-size: 0.09rem;
    line-height: 0.09rem;
  }

</style>
