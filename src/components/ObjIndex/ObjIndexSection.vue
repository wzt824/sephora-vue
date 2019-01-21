<template>
  <div class="center" >
    <obj-index-section-top-swiper :dataswiperImg="data.swiperImg"></obj-index-section-top-swiper>
    <obj-index-section-guide :data="data"></obj-index-section-guide>
    <div class="section">
      <obj-index-section-center-pro :datahotside="data.hotside"></obj-index-section-center-pro>
      <obj-index-section-all-brands :dataBrands="data.brandsInfo" ></obj-index-section-all-brands>
      <obj-index-section-category :dataCategory="data.categoryInfo"></obj-index-section-category>
      <obj-index-section-recommend :dataRecommend="data.recommendinfo"></obj-index-section-recommend>
    </div>
  </div>
</template>
<script>
    import ObjIndexSectionTopSwiper from "./ObjIndexSectionTopSwiper";
    import ObjIndexSectionGuide from "./ObjIndexSectionGuide";
    import ObjIndexSectionCenterPro from "./ObjIndexSectionCenterPro";
    import ObjIndexSectionAllBrands from "./ObjIndexSectionAllBrands";
    import ObjIndexSectionCategory from "./ObjIndexSectionCategory";
    import ObjIndexSectionRecommend from "./ObjIndexSectionRecommend";
    export default {
      props:["data"],
      name: "ObjIndexSection",
       components: {ObjIndexSectionRecommend, ObjIndexSectionCategory, ObjIndexSectionAllBrands, ObjIndexSectionCenterPro, ObjIndexSectionGuide, ObjIndexSectionTopSwiper},
      mounted(){
      }
    }
</script>
<style scoped>
.center{
  font-family: "微软雅黑", Arial;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
