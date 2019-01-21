<template>
  <div class="guide" >
    <div class="side1">
      <router-link to="/toplist" tag="a"   :item="g" :key="i" v-for="(g,i) in data.guideIconfont1">
      <span ><img :src="g.images"></span>
      <p>{{g.title}}</p>
    </router-link>
  </div>
    <div class="side2">
      <a href="javascript:;" :item="g" :key="i" v-for="(g,i) in data.guideIconfont2">
        <span style=":color:g.color;"><img :src="g.images"></span>
        <p>{{g.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      props:["data"],
      name: "ObjIndexSectionGuide",
      data(){
          return{
            // guideIconfont1:[
            //   {title:"畅销榜单",images:require("@/assets/images/guide-1.jpg")},
            //   {title:"本周特惠",images:require("@/assets/images/guide-2.jpg")},
            //   {title:"每日惊喜",images:require("@/assets/images/guide-3.jpg")},
            //   {title:"新品速递",images:require("@/assets/images/guide-4.jpg")},
            //   {title:"礼物套装",images:require("@/assets/images/guide-5.jpg")},
            // ],
            // guideIconfont2:[
            //   {title:"畅销榜单",images:require("@/assets/images/guide-6.jpg")},
            //   {title:"本周特惠",images:require("@/assets/images/guide-7.jpg")},
            //   {title:"每日惊喜",images:require("@/assets/images/guide-8.jpg")},
            //   {title:"新品速递",images:require("@/assets/images/guide-9.jpg")},
            //   {title:"礼物套装",images:require("@/assets/images/guide-10.jpg")},
            // ]
          }
        }
    }
</script>

<style scoped>
  .guide {
    margin-top: 0.1rem;
    padding: 0 .13rem;
  }
  .guide .side1 {
    display: flex;
    justify-content: space-between;
  }
  .guide .side1 a:nth-of-type(1) span {
    background: #ff510d;
  }
  .guide .side1 a:nth-of-type(2) span {
    background: #ff8c00;
  }
  .guide .side1 a:nth-of-type(3) span {
    background: #fc0076;
  }
  .guide .side1 a:nth-of-type(4) span {
    background: #fe5e5b;
  }
  .guide .side1 a:nth-of-type(5) span {
    background: #c56bff;
  }
  .guide .side2 {
    display: flex;
    justify-content: space-between;
  }
  .guide .side2 a:nth-of-type(1) span {
    background: #ff00da;
  }
  .guide .side2 a:nth-of-type(2) span {
    background: #ff4c8c;
  }
  .guide .side2 a:nth-of-type(3) span {
    background: #ee0000;
  }
  .guide .side2 a:nth-of-type(4) span {
    background: #ffc42f;
  }
  .guide .side2 a:nth-of-type(5) span {
    background: #ff3d64;
  }
  .guide a {
    display: inline-block;
    margin-bottom: .15rem;
  }
  .guide a span {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .guide a span img {
    width: .23rem;
    height: .25rem;
    margin: 0 auto;
  }
  .guide a p {
    color: #3c3c3c;
    font-size: 0.1rem;
    font-weight: bolder;
    margin-top: 0.08rem;
    line-height: .1rem;
    text-align: center;
  }
</style>
