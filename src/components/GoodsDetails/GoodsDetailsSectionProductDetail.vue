<template>
  <!--//detailed description-->
  <div class="detailed-description" >
    <div class="detailed-description-title" ref="title" >
      <span class="pro-description cur" @click="changeSubTab(0)">商品详情</span>
      <span class="shuline">|</span>
      <span class="pro-param" @click="changeSubTab(2)">规格参数</span>
    </div>
    <div class="detailed-description-side" v-if="flag==0">

      <div class="detailed-description-con">
        <div class="desc-img" :key="index" v-for="(k,index) in datadetails.detailsDesc">
          <img :src="k" alt="">
        </div>
      </div>
      <div class="detailed-description-bot">
        <div class="payment-and-distribution">
          <p>支付及配送</p>
          <p>选择支付方式：目前我们提供以下2种支付方式</p>
          <p>1.  在线支付</p>
          <p>支持支付宝、微信、及目前市场所有主流银行卡的在线支付。请在确认订单后选择相应支付界面进行支付。</p>
          <p>2.  货到付款</p>
          <p>您的货款将在订单送达后，由送货员直接收取，请在签收后付款，并在送货员在场情况下开箱验货。(货到付款金额不能超过2万元)</p>
          <p>3.  EMS配送公告:</p>
          <p>由于安检升级，接到快递公司通知，已禁止收寄发往新疆地区的包裹，故即日起上述地区暂停发货，具体发货时间另行通知，给您造成的不变，敬请谅解。</p>

        </div>
        <div class="price-strong">
          <p>价格申明</p>
          <p>本店商品标注的促销价，为此商品的实际售价。本店标注的其他价格信息，如划线价、专柜价、建议零售价、价值等，为仅供消费者参考的市场价格信息，来源为有关商品实体店的柜台售价、品牌方建议零售价或者根据有关商品正装产品售价和容量推算的价值等，便于您了解市场行情和价格变动。但是，由于地区、时间和行情波动因素，这些价格的实际情况可能与本店标注的其他价格信息有所不同。</p>

        </div>
        <div class="goods-return">
          <p>退换货规定</p>
          <p>1. 我们不接受包装盒已被开封的商品的退换货（商品外包装盒上的透明封装胶纸已被撕开同样视为开封），请您谅解！</p>
          <p>2. 所有未开封的商品如需退换请于签收日算起14日内办理，退货收到并确认无误后于一周内办理退款。</p>
          <p>3. 如您需整单退换，请您务必将当次订单中所有商品（包括免费赠品、包装礼盒）全部退回。</p>
          <p>5. 如您希望调换其它等价商品，请您先为需要退回的订单办理退货，我们收到退货并确认无误后，将为您发送新的商品。若您希望调换的为非等价商品，请您先为您的订单办理退货及退款，然后至网站另行订购您喜欢的其它商品，我们将另行发送。</p>
        </div>
      </div>
    </div>
    <div class="pro-param-side" v-if="flag==2">
      <ul>
        <li>
          规格：5.5ml,461
        </li>
        <li>
          货号：2323
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      props:["changeTab","goDetail","datadetails"],
      name: "GoodsDetailsSectionProductDetail",
      data(){
        return {
          flag:0
        }
      },
      methods:{
        changeSubTab(i){
          this.flag=i;
          this.curTitle=this.$refs.title;
          var spans=this.curTitle.children;
          for(var i=0;i<spans.length;i++){
            spans[i].style.color="black";
          }
          spans[this.flag].style.color="red";
        }
      }
    }
</script>

<style scoped>
  /*detailed-description开始*/
  .detailed-description-title{
    padding:.23rem 0 .16rem 0;
    display: flex;
    justify-content: center;
    color:#999999;
    font-size: .13rem;
  }
  .detailed-description-title .cur{
    color:red;
  }
  .shuline{
    margin:0 .65rem;
  }
  /*detailed-description-side开始*/
  /*detailed-description-con开始*
   */
  .detailed-description-con .desc-img img{
    width:100%;
    height:3.08rem;
  }
  /*//detailed-description-bot开始*/

  .payment-and-distribution,.price-strong,.goods-return{
    background: white;
    padding:0 .15rem;
  }
  .payment-and-distribution p:first-of-type{
    height:.45rem;
    font-size:.15rem;
    color:black;
    line-height: .45rem;
  }
  .price-strong p:first-of-type{
    height:.45rem;
    font-size:.15rem;
    color:black;
    line-height: .45rem;
  }
  .goods-return p:first-of-type{
    height:.45rem;
    font-size:.15rem;
    color:black;
    line-height: .45rem;
  }
  /*pro-param-side开始*/
  .pro-param-side ul{
    padding-left:.13rem;
    background: white;
  }
  .pro-param-side ul li{
    padding:.1rem 0rem;
    font-size: .13rem;
    line-height: .13rem;
    border-bottom: 1px solid #cccccc;
  }

</style>
