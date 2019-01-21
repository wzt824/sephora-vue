<template>
  <div class="header change" id="header" ref="header">
    <div class="line1">
      <a href="javascript:;">
        <i class="iconfont icon-saomiaoerweima ewmicon" ></i>
      </a>
      <span>sephora</span>
      <a href="javascript:;">
        <i class="iconfont icon-qwmessage"></i>
      </a>
    </div>
    <div class="line2">
      <router-link to="/searchpages">
        <input type="text" placeholder="搜索商品">
        <i class="iconfont icon-sousuo" ></i>
      </router-link>

    </div>
  </div>
</template>
<script>
    export default {
      props:["init"],
        name: "ObjIndexHeader",
      created(){
      },
      mounted () {
        //给window滚动改变header
        window.addEventListener('scroll', this.headerScroll)
      },
       methods: {
        headerScroll () { //改变元素#searchBar的top值
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop>0){
            $('#header').addClass("changewhite");
            $('#header').removeClass("changenone");
            // console.log(scrollTop)
          }else{
            $('#header').removeClass("changewhite");
            $('#header').addClass("changenone");
          }
        },
      },
      destroyed () {
        //离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.headerScroll)
      },
    }
</script>

<style scoped>
 #header {
    width: 100%;
   height:.89rem;
   color:black!important;
   font-family: "微软雅黑", Arial;
  }
 .changenone{
   background: none!important;
   position:relative;
   top:0;
   color:white;
   z-index:99;
   /*opacity:0.1;*/
 }
 .changewhite{
   position:fixed;
   background: white;
   color:black!important;
   top:0;
   z-index:99;
   /*opacity:0.;*/
 }
  .header .line1 {
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.17rem 0px 0.17rem;
    align-items: center;
  }
  .header .line1 i {
    color: #969696;
    width: .22rem;
    height: .18rem;
  }
  .header .line1 span {
    font-size: .20rem;
    color: #969696;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .07rem;
  }
 .header .line2 a{
   width:100%;
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
   width:100%;
   height: 0.28rem;
   background: #e2e5e7;
   border: none;
   outline: none;
   border-radius: 0.28rem;
   text-indent: 0.3rem;
   color: #97999b;
   fone-size: 0.11rem;
   font-weight: bold;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
 }
</style>
