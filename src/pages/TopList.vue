<template>
<div class="toplist">
  <top-list-header></top-list-header>
  <top-list-product :topListInfo="topListInfo"></top-list-product>
</div>
</template>
<script>
    import TopListHeader from "../components/TopList/TopListHeader";
    import TopListProduct from "../components/TopList/TopListProduct";
    export default {
      name: "TopList",
      components: {TopListProduct, TopListHeader},
      data(){
        return{
          topListInfo:[
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            {"proImg":"/static/images/s1-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
          ]
        }
      }
    }
</script>
<style scoped>
.toplist{
  font-family: "微软雅黑",Arial;
  width:100%;
  background: white;
}
</style>
