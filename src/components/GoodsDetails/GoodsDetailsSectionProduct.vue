<template>
  <div>
    <div class="containers">
      <div class="containers-top containers-top-slide">
        <!--//轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :item="p" :key="i" v-for="(p,i) in datadetails.proinfo.proSwiperImg" >
              <a href="javascript:;" >
                <img :src="p">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="containers-center-proinfo">
        <p>{{datadetails.proinfo.proname}}</p>
        <p>{{datadetails.proinfo.othername}}</p>
        <p>{{datadetails.proinfo.prodesc}}</p>
        <p class="line-price">
          <span>￥<span>{{datadetails.proinfo.proprice}}</span></span>
          <span class="tag">{{datadetails.proinfo.tag}}</span>
        </p>
      </div>
      <div class="containers-bot">
        <p>
           <span>
               <i><img src="/static/images/tag-1.jpg" alt=""></i>
               促销详情
           </span>
          <span class="more"><img src="/static/images/more.jpg  " alt=""></span>
        </p>
        <p>
           <span>
               已选 <span>5.5ml,461</span>
           </span>
          <span class="more"><img src="/static/images/more.jpg" alt=""></span>
        </p>
        <span class="brands">
            <a href="javascript:;">
                 <img :src="datadetails.proinfo.brandsImg" alt="">{{datadetails.proinfo.brandsName}}
            </a>
          <span class="more"><img src="/static/images/more.jpg  " alt=""></span>
        </span>
      </div>
    </div>
    <!--//评价-->
    <div class="pro-comment"   >
      <div class="pro-comment-top-title" @click="goSay(2)">
        <p>
          <span>商品评论<i>(38)</i></span>
          <span>
                <span class="stars">
                     <span>4.8分</span>
                     <i class="star-img"><img src="/static/images/star.jpg" alt=""></i>
                     <i class="more"><img src="/static/images/more.jpg" alt=""></i>
                </span>

            </span>
        </p>
      </div>
      <div class="pro-comment-top-center">
        <ul>
          <li :key="i" v-for="(p,i) in datadetails.procomments">
            <p class="line1">
              <img class="userpic" :src="p.userpic" alt="">
              <span>{{p.username}}</span>
              <i><img :src="p.vipImg" alt=""></i>
            </p>
            <div class="line2">
              <p>{{p.commentConn}}</p>
            </div>
            <p class="line3">{{p.commentdate}}</p>
          </li>
        </ul>
        <div class="comment-list"  @click="goSay(2)">
          <span >查看全部评论</span>
        </div>
      </div>

    </div>
    <!--详细描述-->
    <div class="detailed-description" >
      <div class="detailed-description-title" @click="goDetail(1)">
        <span class="pro-description cur" >商品详情</span>
        <span class="shuline">|</span>
        <span class="pro-param">规格参数</span>
      </div>
      <div class="detailed-description-side">
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
      <div class="pro-param-side" v-if="false">
        <ul>
          <li>
            规格：{{datadetails.proparam.guige}}
          </li>
          <li>
            货号：{{datadetails.proparam.huohao}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      props:["changeTab","goSay","goDetail","datadetails"],
      name: "GoodsDetailsSectionProduct",
      updated(){
        new Swiper(".swiper-container", {
          autoplay: 1500,
          loop: false,
          pagination: {
            el: ".swiper-pagination"
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        });
      }
    }
</script>

<style scoped>

  /*containers开始*/
  /*.containers-top{*/
  /*background: white;*/
  /*}*/

  .containers-center-proinfo{
    background: white;
  }
  .containers-center-proinfo{
    background: white;
  }
  .containers .containers-top-slide{
    background: white;
  }
  .swiper-container{
    width:3.2rem;
    height:3.2rem;
  }
  .containers .containers-top-slide img{
    width:100%;
    height:100%;
    margin:0 auto;
  }
  .containers-center-proinfo{
    padding:.13rem .13rem .17rem .13rem;
    font-size: .13rem;
    line-height: .17rem;
  }
  .containers-center-proinfo p{
    padding-bottom:.15rem;

  }
  .containers-center-proinfo .line-price{
    display: flex;
    justify-content: space-between;
  }
  .containers-center-proinfo .line-price .tag{
    color:white;
    font-size:.1rem;
    line-height:.12rem;
    background: #040404;
    padding:0.01rem .05rem;
  }
  .containers-bot p{
    padding:.13rem .16rem .13rem .19rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .14rem;
    line-height: .14rem;
    margin-top:.1rem;
    background: white;
  }
  .containers-bot p span i img{
    width:.09rem;
    height:.14rem;
    margin-right:.12rem;
  }
  .containers-bot p .more img{
    width:.06rem;
    height:.1rem;
  }
  .containers-bot .brands{
    padding:.2rem .13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .containers-bot .brands a{
    display: flex;
    align-items: center;
    color:black;
    font-size: .13rem;
    line-height: .13rem;
  }
  .containers-bot .brands a img{
    width:.84rem;
    height:.39rem;
    border:2px solid white;
    margin-right:.09rem;
  }
  .containers-bot .brands span img{
    width:.06rem;
    height:.1rem;
  }
  /*pro-comment开始*/
  /*.pro-comment{*/
  /*background: white;*/
  /*}*/
  .pro-comment-top-title{
    background: white;
    padding:.14rem;
    font-size:.14rem;
    padding-bottom:.06rem;
  }
  .pro-comment-top-title p{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pro-comment-top-title p .stars .star-img img{
    width:.7rem;
    height:.13rem;
  }
  .pro-comment-top-title i{
    color:#676767;
    font-size:.12rem;
    margin-left:.12rem;
  }
  .pro-comment-top-title .more img{
    width:.06rem;
    height:.1rem;
  }
  /*pro-comment-top-center开始*/
  .pro-comment-top-center ul {
    padding:0rem .15rem 0rem .12rem;
    background: white;
  }
  .pro-comment-top-center ul li {
    padding-top:.12rem;
    border-bottom: 1px solid #e0e0e0;

  }
  .pro-comment-top-center ul li .line1{
    font-size:.12rem;
    line-height: .12rem;
    display: flex;
    align-items: center;
  }
  .pro-comment-top-center ul li .line1 .userpic{
    width:.25rem;
    height:.25rem;
    margin-right:.15rem;
    border-radius: 50%;
  }
  .pro-comment-top-center ul li i{
    width:.17rem;
    height:.12rem;
    margin-left:.06rem;
  }
  .pro-comment-top-center ul li .line2{
    margin:.11rem 0 .15rem 0;
  }
  .pro-comment-top-center ul li .line3{
    padding-bottom: .15rem;
    color:#9c9c9c;
  }
  .comment-list{
    background: white;
  }
  .pro-comment-top-center .comment-list span{
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size:.14rem;
    line-height:.14rem;
    padding:.18rem;
    text-align: center;
  }
  .pro-comment-top-center .askpro{
    display: flex;
    justify-content: space-between;
    font-size: .13rem;
    color:black;
    padding:.16rem .18rem .16rem  .15rem;
    background: white;
    margin-top:.1rem;
  }
  .pro-comment-top-center .more img{
    width:.06rem;
    height:.1rem;
  }
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
