<template>
  <div class="sections">
    <div class="goodsDetailsPages-top">
      <em @click="goback"><img src="../../assets/images/backjt.jpg" alt=""></em>
      <ul class="goodsDetailsPages-top-tab" ref="uls">
        <li   @click="changeTab(0)" >商品</li>
        <li @click="changeTab(1)">详情</li>
        <li @click="changeTab(2)">评价</li>
      </ul>
      <a href="javascript:;" class="goodsDetailsPages-top-tab-right">
        <i class="iconfont icon-more"></i>
      </a>
    </div>
    <goods-details-section-product :datadetails="datadetails[num]" :goSay="goSay" :goDetail="goDetail" v-if="flag==0" ></goods-details-section-product>
    <goods-details-section-product-say    :datadetails="datadetails[num]" v-if="flag==2"></goods-details-section-product-say>
    <goods-details-section-product-detail  :datadetails="datadetails[num]"   v-if="flag==1"></goods-details-section-product-detail>
  </div>
</template>
<script>
    import GoodsDetailsSectionProduct from "./GoodsDetailsSectionProduct";
    import GoodsDetailsSectionProductSay from "./GoodsDetailsSectionProductSay";
    import GoodsDetailsSectionProductDetail from "./GoodsDetailsSectionProductDetail";
    import GoodsDetailsHeader from "./GoodsDetailsHeader";
    import GoodsDetailsSectionShow from "./GoodsDetailsSectionShow";
    export default {
        name: "GoodsDetailsSection",
      props:["datadetails","num"],
        components: {
          GoodsDetailsSectionShow,
          GoodsDetailsHeader,
          GoodsDetailsSectionProductDetail, GoodsDetailsSectionProductSay, GoodsDetailsSectionProduct},
      data(){
        return{
          flag:0,
          // isShow:false
        }
      },
      methods:{
          //商品详情，评价 规格tab
        changeTab(i){
          this.flag=i;
          this.uls=this.$refs.uls;
          var lis=this.uls.children-1;
          for(let i in lis){
            // lis[i].className=" ";
            // lis[this.flag].className="cur";
          }

        },
        //点击查看全部评论显示所有的评价，跳到评价
        goSay(n){
          this.changeTab(n);
        },
        goDetail(n){
          this.changeTab(n);
        },
        goback(){
          history.go(-1);
        }

      }
    }
</script>
<style scoped>
  .sections{
    overflow-y: auto;
    flex:1;
  }
  /*goodsDetailsPages-top开始*/
  .goodsDetailsPages-top{
    background: white;
    padding:0 .12rem;
    height:.7rem!important;
  }
  .goodsDetailsPages-top em{
    float: left;
  }
  .goodsDetailsPages-top em img{
    width:.25rem;
    height:.19rem;
    padding-top:.1rem;
  }
  .goodsDetailsPages-top ul{
    float:left;
    margin-left:.85rem;
  }
  .goodsDetailsPages-top-tab-right{
    float: right;
    padding-top:.1rem;
    font-wight:700;
  }
  .goodsDetailsPages-top-tab {
    color:black;
    font-size:.16rem;
    line-height: .19rem;
    display: flex;
  }
  .goodsDetailsPages-top-tab li{
    justify-content: flex-start;
    padding:.12rem 0rem .12rem 0;
    margin-right:.25rem;

  }
  .goodsDetailsPages-top-tab .cur{
    border-bottom: 3px solid black;
  }
  .goodsDetailsPages-top-tab-right i{
    color:#666666
  }
</style>
