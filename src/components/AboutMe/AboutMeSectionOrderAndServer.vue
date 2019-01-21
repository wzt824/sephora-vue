<template>
  <div class="myorders">
    <div class="orderside">
      <div class="order-title">
        <h4>我的订单</h4>
        <span>所有订单 <i> ></i></span>
      </div>
      <div class="order-info">
        <a href="javascript:;">
          <i>
            <img src="../../assets/images/order-1.jpg" alt="">
          </i>
          <span>待支付</span>
        </a>
        <a href="javascript:;">
          <i>
            <img src="../../assets/images/order-2.jpg" alt="">
          </i>
          <span>处理中</span>
        </a>
        <a href="javascript:;">
          <i>
            <img src="../../assets/images/order-3.jpg" alt="">
          </i>
          <span>配送中</span>
        </a>
        <a href="javascript:;">
          <i>
            <img src="../../assets/images/order-4.jpg" alt="">
          </i>
          <span>已完成</span>
        </a>
      </div>
    </div>
    <div class="order-info server">
      <a href="javascript:;">
        <i>
          <img src="../../assets/images/server-1.jpg" alt="">
        </i>
        <span>待支付</span>
      </a>
      <a href="javascript:;">
        <i>
          <img src="../../assets/images/server-2.jpg" alt="">
        </i>
        <span>处理中</span>
      </a>
      <a href="javascript:;">
        <i>
          <img src="../../assets/images/server-3.jpg" alt="">
        </i>
        <span>配送中</span>
      </a>

    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutMeSectionOrderAndServer"
    }
</script>

<style scoped>
  .myorders{
    margin:0 .1rem;

    color:#9d9d9d;
    /*background: white;*/
  }
  .ordrside{
    background: white;
    border-radius: .04rem;

  }
  .myorders .order-title h4{
    color:#4a4a4a;
    font-weight: normal;
  }
  .myorders .order-title{
    padding:.13rem 0.2rem;
    font-size: .14rem;
    line-height: .14rem;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #eaeaea;
    background: white;

  }
  .order-info{
    display: flex;
    justify-content: space-between;
    margin-bottom: .15rem;
    padding:0 .2rem;
    background: white;
  }
  .myorders .order-title i{
    font-weight: bolder;
  }
  .server{
    border-radius: 0.04rem;
  }
  .order-info a{
    padding:.19rem 0 .11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#aaaaaa;
    font-size: .09rem;
  }
  .order-info a img{
    width:.25rem;
    height:.21rem;
  }
  .order-info a span{
    margin-top:.13rem;
  }
  .server{
    margin-bottom:0;
  }
  .server a img{
    width:.6rem;
    height:.6rem;
  }
  .server a span{
    padding-top:.1rem;
    margin:0;
  }
</style>
