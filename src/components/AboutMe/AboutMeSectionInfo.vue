<template>
<div>
  <div class="userpic">
    <a href="javascript:;">
      <img src="../../assets/images/bigpic.jpg" alt="">
      <p>因为你，草木繁盛</p>
    </a>
  </div>
  <div class="allinfos">
    <div class="userdo">
      <a href="javascript:;">
        <p>200</p>
        <span>会员积分</span>
      </a>
      <a href="javascript:;">
        <p class="setinfo">需补全</p>
        <span>个人信息</span>
      </a>
      <a href="javascript:;">
        <p>0张</p>
        <span>优惠券</span>
      </a>
      <a href="javascript:;">
        <p>入门小白</p>
        <span>美力口碑</span>
      </a>

    </div>
    <div class="quaninfo">
      <p>
        补全个人信息可以获取一张满398减50元优惠券（仅单笔消费），优惠券将于7个工作日内到账
      </p>
      <div class="seevipinfo">
        <a href="javascript:;">
          <p >
            <img src="images/vip.jpg" alt="">
            <span>粉卡会员</span>
          </p>
          <p>
            查看详情 <i> ></i>
          </p>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "AboutMeSectionInfo"
    }
</script>

<style scoped>
  /*section开始*/

 .userpic{
    display: flex;
    justify-content: center;
    padding-bottom: .14rem;
    background: white;
  }
 .userpic a{
    color:black;
    font-size: .14rem;
    position: relative;
  }
.userpic a img{
    width:.92rem;
    height:.92rem;
    /*position: absolute;*/
    /*top:-0.09rem;*/
    /*z-index: 99999;*/
  }
 .userpic a  p{
    padding:0.11rem 0;
    text-align: center;
  }
  .allinfos{
    padding:0 .1rem;
    margin-bottom: .1rem;
  }
 .userdo{
    display: flex;
    justify-content: space-around;
    padding:.24rem .14rem;
    align-items: center;
    box-shadow: 0 0 .06rem .02rem #eaeaea;
    background: white;
    border-radius: .04rem;
  }
 .userdo a{
    text-align: center;
    color:#999999;
    font-size: .13rem;

  }
.userdo a .setinfo{
    color:red;
  }
.userdo a p{
    padding-bottom: .11rem;
    color: black;

  }
  .quaninfo{
    background: #f32990;
    padding:.07rem .19rem .1rem .19rem;
    border-bottom-left-radius: .04rem;
    border-bottom-right-radius: .04rem;
    margin-top:-.05rem;

  }
  .quaninfo p{
    font-size: .115rem;
    color:white;
    letter-spacing: .02rem;
    line-height: .17rem;
    padding-bottom: .05rem;
    border-bottom: 1px solid white;
  }
  .seevipinfo{
    padding: .11rem 0 0 0;
  }
  .seevipinfo a{
    display: flex;
    justify-content: space-between;
  }
  .seevipinfo p{
    border:none;
    font-size: .115rem;
    color:white;
    letter-spacing: .02rem;
    line-height: .17rem;
  }
  .seevipinfo p:first-of-type{
    display: flex;
  }
  .seevipinfo p:first-of-type img{
    width:.27rem;
    height:.17rem;
    margin-right: .11rem ;
  }

</style>
