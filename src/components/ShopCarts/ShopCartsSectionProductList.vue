<template>
  <div>
    <div class="product-list">
        <div class="product" @change="productCheck(pid)" :item="product" :key="pid" v-for="(product,pid) in productlist">
            <span class="checkspan">
                <input type="checkbox" v-model="product.checked">
                <label></label>
            </span>
        <a href="javascript:;">
          <img :src="product.proImg" alt="">
        </a>
        <div class="buypro-info">
          <p class="desc-info">{{product.proDesc}}</p>
          <p class="size-info">{{product.sizeInfo}}</p>
          <div class="main-info">
            <span class="priceline">￥<i>{{product.proprice}}</i></span>
            <p class="numline">
              <!--//阻止默认行为 比如a的-->
              <span class="addbtn" @click.prevent.stop="add(pid)">+</span>
              <span type="text" >{{product.qal}}</span>
              <span class="descbtn" @click.prevent.stop="desc(pid)">-</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="sendsomthing">-->
      <!--<p>-->
        <!--<span>满赠</span>-->
        <!--可以获得 <i>2</i>件赠品-->
      <!--</p>-->
      <!--<span class="details"><a href="javascript:;">查看详情 <i> ></i></a></span>-->
    <!--</div>-->
  </div>

</template>

<script>
    export default {
      props:["productlist","desc","add"],
        name: "ShopCartsSectionProductList",
      methods:{
        productCheck(i){
          this.$emit("productChecked",i)
        },

      }
    }
</script>

<style scoped>
  i{
    font-style: normal;
  }
  .product{
    padding:.18rem .08rem .2rem  .15rem;
    display: flex;
    align-items: center;
    font-size: .15rem;
    background: white;
  }
  .checkspan {
    display: inline-block;
    position: relative;
    width:.2rem;
    margin-right:.12rem;
  }
  .checkspan input{
    /*visibility: hidden;*/
  opacity:0;
    position: absolute;
  }
  .checkspan label{
    display:inline-block;
    width:.2rem;
    height:.2rem;
    border:1px solid #1b1b1b;
    margin-right:.07rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*.checkspan input:checked +label:after{*/
    /*content: "";*/
    /*display: inline-block;*/
    /*width: .07rem;*/
    /*height: .14rem;*/
    /*border: .02rem solid white;*/
    /*border-radius: .02rem;*/
    /*margin-top: -0.08rem;*/
    /*margin-left:0.02rem;*/
    /*border-top-color:transparent;*/
    /*border-left-color:transparent;*/
    /**-webkit-transform: rotate(40deg);*/
    /*-moz-transform: rotate(40deg);*/
    /*-ms-transform: rotate(40deg);*/
    /*-o-transform: rotate(40deg);*/
    /*transform: rotate(40deg);*/
  /*}*/
  .checkspan input:checked +label{
   background: url("../../assets/images/checked.jpg");
  }
  .product a img{
    width:.83rem;
    height:.90rem;
  }
  .buypro-info{
    margin-left:.08rem;
    font-size: .13rem;
  }
  .product .desc-info{
    line-height: .18rem;
    letter-spacing: .015rem;
  }
   .product .size-info{
    color:#a1a1a1;
    padding:.08rem 0;
  }
   .product .main-info{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .priceline{
    color:black;
  }
  .numline {
    border:1px solid #999999;
    border-radius: .03rem;
    display: flex;
    align-items: center;
    font-size: .15rem;
    color:#d5d5d5;
  }
  .numline span{
    width:.43rem;
    height:.3rem;
    text-align: center;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .addbtn,.descbtn{
    border-right:1px solid #999999;
    width:.28rem;
    height:.42rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .descbtn{
    border-left:1px solid #999999;
    border-right: none;
  }
  .product:last-of-type{
    border-bottom:1px solid #f3f3f3;
  }
  /*//券优惠*/
  .sendsomthing{
    padding:.11rem .09rem .11rem .19rem;
    display: flex;
    justify-content: space-between;
    font-size:.13rem;
    line-height:.13rem;
    background: white;
    align-items: center;
    margin-bottom: .1rem;
  }
  .sendsomthing p span{
    border:1px solid #a20000;
    padding:.04rem .01rem;
    color:#a20000;
    margin-right:.02rem;
  }
  .sendsomthing p i{
    color:#a20000;
  }
  .details  a{
    color:#999999;
  }
</style>
