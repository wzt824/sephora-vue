<template>
  <div class="thoughtlike">
    <a class="thoughtlike-title">
      <div class="linecenter"></div>
      <div class="line-topwords">
        <img src="../../assets/images/like.jpg" alt="">
        <span>猜你喜欢</span>
      </div>
    </a>
    <div class="thoughtlike-pro">
      <div class="prodctshow">
        <a href="javascript:;">
          <img src="../../assets/images/s2-pro1.jpg" alt="">
          <p class="proname">SKII</p>
          <p class="prodecs"> SKII微基因护肤幻彩眼霜(大眼眼霜)</p>
          <p>￥<span class="price">590.0</span></p>
        </a>
      </div>
      <div class="prodctshow">
        <a href="javascript:;">
          <img src="../../assets/images/s2-pro1.jpg" alt="">
          <p class="proname">SKII</p>
          <p class="prodecs"> SKII微基因护肤幻彩眼霜(大眼眼霜)</p>
          <p>￥<span class="price">590.0</span></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopCartsSectionGuessLike"
    }
</script>

<style scoped>
  /*thoughtlike  猜你喜欢开始*/
  .thoughtlike-title{
    display: flex;
    align-items: center;
    position: relative;
    height:.53rem;
    justify-content: center;
  }
  .thoughtlike-title .linecenter{
    width:3.17rem;
    background: #999999;
    height:1px;
  }
  .line-topwords{
    position: absolute;
    left:34%;
    display: flex;
    color:black;
    font-size: .19rem;
    background: #f6f6f6;
    padding:0 .13rem;

  }
  .line-topwords img{
    width:.32rem;
    height:.28rem;
    margin-right:.09rem;
  }
  .thoughtlike-pro{
    display: flex;
  }
  .prodctshow{
    padding-top:.25rem;
    flex: 1;
    width:50%;
    justify-content: flex-start;
    border-left:1px solid #f4f4f4;
    border-top:1px solid #f4f4f4;
    padding-left:0.1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: white;

  }
  .prodctshow:nth-of-type(2n-1){
    border-left: none;
  }
  .prodctshow a{
    text-align: left;
  }
  .prodctshow a img{
    margin:0 auto;
    width:.9rem;
    height:.9rem;

  }
  .prodctshow a p{
    color:#2e2e2e;
    font-size: .14rem;
  }
  .prodctshow a .prodecs{
    color:#999999;
  }
</style>
