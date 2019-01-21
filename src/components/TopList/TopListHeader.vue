<template>
<div class="header" id="toplistHeader">
  <div class="header-left">
    <em><img src="../../assets/images/backjt.jpg" alt="" @click="goback"></em>
    <em><img src="../../assets/images/close.jpg" alt=""></em>
  </div>
  <div class="header-right">
    <a href="javascript:;" class="goodsDetailsPages-top-tab-right">
      <i class="iconfont icon-more"></i>
    </a>
  </div>

</div>
</template>

<script>
    export default {
        name: "TopListHeader",
      methods:{
        goback(){
          history.go(-1);
        }
      }
    }
</script>

<style scoped>
#toplistHeader{
  font-family: "微软雅黑", Arial;
  background: white;
  padding:.11rem .09rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .16rem;
  font-weight: bold;
  box-shadow: 0 0.02rem .04rem #ccc;

}
.header img{
  width:.14rem;
  height:.14rem;
  margin-right:.11rem;
}
  .header-left{
    display: flex;
    align-items: center;
  }
  .header i{
    color:#666666;
  }
</style>
