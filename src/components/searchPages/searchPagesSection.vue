<template>
    <!--历史搜索-->
  <div class="section">
  <div class="historysearch">
    <div class="historysearch-tit">
      <h4>历史搜索</h4>
      <span><img src="/static/images/rubb.jpg" alt=""></span>
    </div>
    <div class="historysearch-con">
    </div>

  </div>
    <!--历史浏览-->
  <div class="historysearch">
    <div class="historysearch-tit">
      <h4>历史浏览</h4>
    </div>
    <div class="historysearch-con">

    </div>

  </div>
    <!--热门搜索-->
    <div class="hotSearch">
      <h4>热门搜索</h4>
      <div class="hotTags">
        <a href="#">圣诞好礼推荐</a>
        <a href="#">年终护肤优选</a>
        <a href="#">年终唇妆推荐</a>
        <a href="#">年终护肤优选</a>
        <a href="#">年终护肤优选</a>
        <a href="#">年终唇妆推荐</a>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "searchPagesSection"
    }
</script>

<style scoped>
  .section{
    background: white;
    height:100%;
  }
/*搜索历史*/
.historysearch{
  font-family: "微软雅黑", Arial;
  padding:0 .12rem 0;
}
  .historysearch-tit{
    padding-top: .11rem;
    width:100%;
    display: flex;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size:.21rem;
    line-height: .24rem;
    align-items: center;
  }
  .historysearch-tit img{
    width:.16rem;
    height:.16rem;
  }
  .historysearch-con{
    height:1.1rem;
    border-bottom: 1px solid #ccc;
  }
  .hotSearch {
    padding:0 .12rem 0;
  }
.hotSearch h4{
  padding:.11rem 0;
  font-size:.21rem;
  line-height: .24rem;
}
  .hotTags {
    display:flex;
    flex-wrap: wrap;
  }
.hotTags a{
 color:black;
  background: #eeeeee;
  font-size:.11rem;
  padding:.08rem;
  margin-right:.07rem;
  margin-bottom: .1rem;
}
</style>
