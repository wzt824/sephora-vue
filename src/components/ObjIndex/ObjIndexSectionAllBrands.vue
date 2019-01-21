<template>
  <div class="section-side2">
    <div class="allbrands" :item="a" :key="i" v-for="(a,i) in dataBrands">
      <div class="section-title">
        <h4 >全部品牌</h4>
        <i class="iconfont icon-more"></i>
      </div>
      <div class="superbrands" ref="superbrands">
        <a href="javascript:;" class="superbrand superbrandTop" :item="p" :key="i" v-for="(p,i) in a.imgBanner" >
          <img :src="p">
        </a>
      </div>
      <div class="allbrandsshow" >
        <a href="javascript:;" :item="b" :key="index" v-for="(b,index) in a.allBrandsImg">
          <img :src="b" >
          <span class="line-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:["dataBrands"],
      name: "ObjIndexSectionAllBrands",
      created(){
        this.bannermove();
      },
      mounted(){
        //改变banner位置

        // $("this.a").each(function(){
        //   console.log($(this))
        //   $(this).animate(function(){
        //     left:0
        //   },300)
        // })

      },
      methods:{
        bannermove(){
          let  a1=$(".superbrands ");
          // let a2=$(".superbrands>a");
          //  console.log(a1)
          // as.each(function(){
          //   console.log($(this))
          //  $(this).animate({
          //    "left":0
          //  },300)
          // })

        }
      }

    }
</script>

<style scoped>
  /*第一张图片向右移动*/
.section-side2{
    background: white;
  }
  .section-title {
    padding: .25rem 0.1rem;
    display: flex;
    justify-content: space-between;
  }
  .section-title h4 {
    font-size: .18rem;
    line-height: .18rem;
    font-weight: bolder;
    color: black;
  }
  .section-title i {
    color: #bfbfbf;
    padding-right: 0.1rem;
    font-weight: bolder;
  }
 .superbrands a {
    position:relative;
    /*left:-50%;*/
  }
  .section .allbrands .superbrands img {
    width: 100%;
    height: 100%;
  }
  .section .allbrands .allbrandsshow {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 .20rem .23rem;
    margin-bottom: .1rem;
  }
  .section .allbrands .allbrandsshow a:nth-of-type(4n) .line-right {
    width: 0px;
  }
  .section .allbrands .allbrandsshow a {
    margin-top: 0.1rem;
    padding: 0.1rem 0.05rem 0rem 0.05rem;
    position: relative;
  }
  .section .allbrands .allbrandsshow a .line-right {
    width: 1px;
    height: .54rem;
    background: #e8e8e8;
    position: absolute;
    right: 0;
    top: -0.03rem;
  }
  .section .allbrands .allbrandsshow a img {
    padding-bottom: .2rem;
    width: .72rem;
    height: .3rem;
    border-bottom: 1px solid #e8e8e8;
  }
</style>
