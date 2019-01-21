<template>
  <div class="section-left" >
    <p :item="g" :key="i" v-for="(g,i) in datatype" @click="changes(i)" :class="{'cur':l==i}">{{g.typename}}</p>
  </div>
</template>
<script>
    export default {
      props:["datatype","changes","achangestyle",'l'],
      name: "ObjCategorySectionCategoryName",
      methods:{
        // 点击a改变其样式
        // achangestyle(i){
        //   this.sectionleft=this.$refs.sectionleft;
        //   var as=this.sectionleft.children;
        //   console.log(as);
        // }
      }
    }
</script>
<style scoped>
  .cur{
    background: white;
    color:red!important;
  }
  .section-left {
    width: 0.75rem;
    background: #efefef;
    /*position: fixed;*/
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    /*z-index: -99;*/
  }
  .section-left p {
    display: block;
    padding: .16rem 0;
    color: black;
    font-size: .13rem;
    text-align: center;
  }
</style>
