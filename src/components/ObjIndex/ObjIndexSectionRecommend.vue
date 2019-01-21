<template>
  <div class="section-side4">
    <div class="section-title">
      <h4>为你而选</h4>
    </div>
    <div class="section-side4-body">
      <div class="intro-pro" :item="p" :key="i" v-for="(p,i) in dataRecommend">
        <div class="side4-body-f connect">
          <div class="product-side1">
            <a href="javascript:;">
              <img :src="p.topRecommend.proImg" alt="">
            </a>
            <div class="body-right-info">
              <p class="pro-name">{{p.topRecommend.proName}}</p>
              <span class="hengline"></span>
              <p class="pro-desc">{{p.topRecommend.proDesc}}</p>
              <p class="priceline">￥<span class="price">1280.00</span></p>
            </div>
          </div>
        </div>
        <div class="intro-others">
          <div class="connect other" :item="k" :key="i" v-for="(k,i) in p.recommendinfo">
            <div class="product-side1">
              <a href="javascript:;">
                <img :src="k.proImg" alt="">
                <p class="pro-name">{{k.proName}}</p>
                <span class="hengline"></span>
                <p class="pro-desc">{{k.proDesc}}</p>
                <p class="priceline">￥<span class="price">{{k.price}}</span></p>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      props:["dataRecommend"],
        name: "ObjIndexSectionRecommend",
      data(){
          return {
            // recommendSide:[
            //   {
            //     topRecommend: {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //     recommendinfo:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ]
            //   },
            //   {
            //     topRecommend: {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //       "proName":"LAN COMN",
            //       "proDesc":"兰蔻肌底臻宠精选礼盒",
            //       "price":1280.00
            //     },
            //     recommendinfo:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ]
            //   },
            //   {
            //     topRecommend: {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //       "proName":"LAN COMN",
            //       "proDesc":"兰蔻肌底臻宠精选礼盒",
            //       "price":1280.00
            //     },
            //     recommendinfo:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       },
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ]
            //   },
            //
            // ]

          }

      }
    }
</script>

<style scoped>
  .connect {
    display: flex;
    justify-content: space-between;
    margin-bottom: .23rem;
  }
  .product-side1 {
    width: 1.05rem;
    padding: 0 .1rem 0.11rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .product-side1 a {
    color: black;
  }
  .product-side1 a img {
    width: 1.05rem;
    height: 1.05rem;
    margin:0 auto;
  }
  .product-side1 .pro-name {
    font-size: 0.08rem;
    line-height: 0.08rem;
    margin: 0 0 0.11rem 0;
    text-align: center;
  }
  .product-side1 .hengline {
    display: block;
    width: 0.1rem;
    height: 0.01rem;
    background: black;
    margin: 0 auto;
  }
  .product-side1 .pro-desc {
    width: 100%;
    margin-top: 0.06rem;
    font-size: 0.13rem;
    line-height: 0.19rem;
    text-align: center;
  }
  .product-side1 .priceline {
    text-align: center;
  }
  .product-side1 .priceline .price {
    font-size: 0.09rem;
    line-height: 0.09rem;
  }
  .section-side4{
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
  .section-side4 .section-side4-body .intro-pro .side4-body-f {
    height: 2.52rem;
    border-top: 1px solid #eeeeee;
  }
.section-side4 .section-side4-body .intro-pro .side4-body-f .product-side1 {
    display: flex;
    align-items: center;
  }
 .section-side4 .section-side4-body .intro-pro .side4-body-f .product-side1 a {
    justify-content: flex-start;
    flex: 1;
  }
.section-side4 .section-side4-body .intro-pro .side4-body-f .product-side1 a img {
    width: 1.6rem;
    height: 1.6rem;
  }
 .section-side4 .section-side4-body .intro-pro .side4-body-f .product-side1 .body-right-info {
    justify-content: flex-start;
    flex: 1;
    padding: 0 .36rem;
  }
 .section-side4 .section-side4-body .intro-pro .intro-others {
    display: flex;
    flex-wrap: wrap;
  }
 .section-side4 .section-side4-body .intro-pro .intro-others .other:nth-of-type(2n-1) {
    border-left: none;
  }
.section-side4 .section-side4-body .intro-pro .intro-others .other {
    width: 50%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    justify-content: flex-start;
    border-top: 1px solid #eeeeee;
    border-left: 1px solid #eeeeee;
    margin-bottom: 0;
  }
.section-side4 .section-side4-body .intro-pro .intro-others .other .product-side1 {
    width: 100%;
  }
 .section-side4 .section-side4-body .intro-pro .intro-others .other .product-side1 a {
    width: 100%;
  }
 .section-side4 .section-side4-body .intro-pro .intro-others .other .product-side1 a img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
  }
</style>
