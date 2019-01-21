<template>
  <div class="header" id="aboutHeader">
    <div class="line1">
      <a href="javascript:;">
        <i class="iconfont icon-saomiaoerweima ewmicon" ></i>
      </a>
      <div id="infouser">
        <a href="javascript:;">
          <img src="../../assets/images/small.jpg" alt="">
          <p>因为你，草木繁盛</p>
        </a>
      </div>
      <a href="javascript:;">
        <i class="iconfont icon-qwmessage"></i>
      </a>
    </div>
  </div>
</template>
<script>
    export default {
        name: "AboutMeHeader"
    }
</script>
<style scoped>
  #aboutHeader {
    background: white;
    padding-bottom: .04rem;
    opacity: 0.6;
  }
  .header .line1 {
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.17rem 0px 0.17rem;
    align-items: center;
  }
  .header .line1 i {
    color: white;
    width: .22rem;
    height: .18rem;
  }
  .line1 span {
    font-size: .20rem;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .07rem;
  }
  .header a {
    color: black;
    white-space: nowrap;
  }
  .header a i {
    color: black !important;
    font-size: .24rem;
  }
  #infouser{
    font-size:.14rem;
  }
  #infouser a{
    display: flex;
    align-items: center;
  }
  #infouser a img{
    justify-content: flex-start;
    padding-right:0.15rem;
    width:.25rem;
    height: .25rem;
  }
  #infouser a p{
    justify-content: flex-start;

  }
</style>
