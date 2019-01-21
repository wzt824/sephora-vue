<template>
  <div class="h-slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :item="p" :key="i" v-for="(p,i) in dataswiperImg" >
          <a href="javascript:;" >
            <img :src="p.pic">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import swipers from 'swiper'
  export default {
    name: "h-slider",
    props:["dataswiperImg"],
    data(){
      return{
      }
    },
  mounted(){
      new Swiper(".swiper-container", {
        autoplay: 1500,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
      });
    }
  }
</script>
<style scoped>
  img{
    width:100%;
  }
  .h-slider{
    height:1.1rem;
  }
  .swiper-container {
    position: relative;
    width:100%;
    top:-.89rem;
    z-index: 0;
  }
.h-slider img {
    width: 100%;
    height: 2rem;
  }
  .swiper-container {
    width: 375px;
    height:2rem;
  }
</style>
