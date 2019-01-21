<template>
  <div class="tageside">
    <div class="tages-title">
      <h3>热门标签</h3>
    </div>
    <div class="tages-con">
      <a href="javascript:;" :item="k" :key="i" v-for="(k,i) in praiseInfo.hotTags">
       {{k}}
      </a>

    </div>
  </div>
</template>

<script>
    export default {
      props:["praiseInfo"],
        name: "PublicPraisesectionHotTags"
    }
</script>

<style scoped>
  .tageside{
    font-family: "微软雅黑", Arial;
    padding:0 .05rem .1rem;
    background: white;
  }
  .tageside .tages-title h3{
    color:#8a8a8a;
    font-size: .12rem;
    padding:.11rem 0 .15rem .06rem;
    font-weight: normal;
  }
  .tageside .tages-con{
    display: flex;
    overflow-x: auto;
  }
  .tageside .tages-con::-webkit-scrollbar{
    display: none;
  }
  .tageside .tages-con a{
    color:black;
    font-size: .1rem;
    padding:.12rem .08rem;
    font-weight: normal;
    background: #eeeeee;
    border-radius: .04rem;
    margin-right:.1rem;
    justify-content: flex-start;
    flex-shrink:0;
  }
</style>
