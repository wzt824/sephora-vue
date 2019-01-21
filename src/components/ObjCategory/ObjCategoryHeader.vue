<template>
  <div class="header" id="categoryHeader">
    <div class="line1">
      <a href="javascript:;">
        <i class="iconfont icon-saomiaoerweima ewmicon" ></i>
      </a>
      <div class="line2">
        <input type="text" placeholder="搜索商品">
        <i class="iconfont icon-sousuo" ></i>
      </div>
      <a href="javascript:;">
        登录
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ObjCategoryHeader"
    }
</script>

<style scoped>
  #categoryHeader {
    background: white;
    box-shadow: 0 .04rem 0.05rem #e0e0e0;
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
  .header .line1 span {
    font-size: .20rem;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .07rem;
  }
  .header .line2 {
    padding: 0 0.12rem .1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    margin-top: 0.07rem;
    position: relative;
  }
  .header .line2 .icon-sousuo {
    position: absolute;
    left: .2rem;
    top: .05rem;
    font-size: 0.15rem;
    color: #141414;
    font-weight: bolder;
    vertical-align: middle;
  }
  .header .line2 input {
    width: 100%;
    height: 0.28rem;
    background: #e2e5e7;
    border: none;
    outline: none;
    border-radius: 0.28rem;
    text-indent: 0.3rem;
    color: #97999b;
    fone-size: 0.11rem;
    font-weight: bold;
  }
  .header a {
    color: #9c9c9c;
    white-space: nowrap;
  }
  .header a i {
    color: #9c9c9c !important;
  }
</style>
