<template>
<div>
  <div class="appdownload" ref="appdownload">
    <img src="../../assets/images/app_download.jpg" alt="" >
    <span href="javascript" class="close"  @click="closeApp"></span>
    <span href="javascript:;" class="goapp" @click="goload"></span>
  </div>

</div>
</template>

<script>
    export default {
        name: "GoodsDetailsHeader",
      methods:{
        closeApp(){
          this.$refs.appdownload.remove();
        },
        goload(){

        }
      }
    }
</script>

<style scoped>
  /*appdownload开始*/
  .appdownload {
    padding-top:.01rem;
    position: relative;
    margin-bottom:.1rem;
  }
  .appdownload img{
    width:100%;
    height:.5rem
  }
  .appdownload .close{
    width:.35rem;
    height:.5rem;
    position:absolute;
    top:0;
  }
  .appdownload .goapp{
    width:1.2rem;
    height:.5rem;
    position:absolute;
    top:0;
    right:0;
  }

</style>
