<template>
  <div class="header change" id="header" ref="header">
    <div class="line2">
      <input type="text" placeholder="搜索商品">
      <i class="iconfont icon-sousuo" ></i>
    </div>
    <span class="dissearch" @click="goback">取消</span>
  </div>
</template>
<script>
    export default {
        name: "searchPagesHeader",
      methods:{
        goback(){
             console.log(1)
              history.go(-1);
          }
      }
    }
</script>

<style scoped>
  #header {
    width: 100%;
    height:.5rem;
    display: flex;
    align-items: center;
    font-family: "微软雅黑", Arial;
    box-shadow: 0 0.03rem 0.04rem .03rem #ccc;
    background: white;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }
  .header .line2 {
    padding: 0 0.12rem .1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    margin-top: 0.07rem;
    position: relative;
    /*left:.2rem;*/
    margin-left: .27rem;
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
    width:2.76rem;
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
  .dissearch{
    white-space: nowrap;
    margin-right:.06rem;
    font-size:.13rem;
    display: inline-block;

  }

</style>

