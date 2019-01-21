<template>
  <div class="section-side3">
    <div class="categoryside" :key="i" :item="b" v-for="(b,i) in dataCategory">
      <div class="section-title">
        <h4>{{b.title}}</h4>
        <i class="iconfont icon-more"></i>
      </div>
      <div class="hufu-collect">
        <a href="javascript:;">
          <img :src="b.categoryBanner" alt="">
        </a>
      </div>
      <div class="section-side3-body">
        <div class="body-left connect">
          <div class="product-side1" :item="p" :key="i" v-for="(p,i) in b.categoryLeftPro">
            <a href="javascript:;">
              <img :src="p.proImg" alt="">
              <p class="pro-name">{{p.proName}}</p>
              <span class="hengline"></span>
              <p class="pro-desc">{{p.proDesc}}</p>
              <p class="priceline">￥<span class="price">{{p.price}}</span></p>
            </a>
          </div>
        </div>
        <div class="body-right">
          <div class="connect" :item="c" :key="ind" v-for="(c,ind) in b.categoryRightPro">
            <div class="product-side1" >
              <a href="javascript:;">
                <img :src="c.proImg" alt="">
                <p class="pro-name">{{c.proName}}</p>
                <span class="hengline"></span>
                <p class="pro-desc">{{c.proDesc}}</p>
                <p class="priceline">￥<span class="price">{{c.price}}</span></p>
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
      props:["dataCategory"],
        name: "ObjIndexSectionCategory",
      data(){
          return {
            // categoryInfo:[
            //   {"title":"护肤",
            //     "categoryBanner":require("@/assets/images/hf-1.jpg"),
            //      categoryLeftPro:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //          "price":1280.00
            //       }
            //     ],
            //     categoryRightPro:[
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
            //
            //   },
            //   {"title":"彩妆",
            //     "categoryBanner":require("@/assets/images/hf-2.jpg"),
            //     categoryLeftPro:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ],
            //     categoryRightPro:[
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
            //
            //   },
            //   {"title":"香水",
            //     "categoryBanner":require("@/assets/images/hf-3.jpg"),
            //     categoryLeftPro:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ],
            //     categoryRightPro:[
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
            //
            //   },
            //   {"title":"工具",
            //     "categoryBanner":require("@/assets/images/hf-4.jpg"),
            //     categoryLeftPro:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ],
            //     categoryRightPro:[
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
            //
            //   },
            //   {"title":"男士护肤",
            //     "categoryBanner":require("@/assets/images/hf-2.jpg"),
            //     categoryLeftPro:[
            //       {"proImg":require("@/assets/images/s1-pro1.jpg"),
            //         "proName":"LAN COMN",
            //         "proDesc":"兰蔻肌底臻宠精选礼盒",
            //         "price":1280.00
            //       }
            //     ],
            //     categoryRightPro:[
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
            //
            //   }
            // ]
          }

      }
    }
</script>
<style scoped>
  /*//categoryside*/
  .section-side3{
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
  .section-side3 {
    margin-bottom: .1rem;
  }
  .section-side3 .categoryside {
    padding-bottom: .22rem;
    border-bottom: 1px solid #eeeeee;
  }
 .hufu-collect {
    margin-bottom: .11rem;
  }
 .hufu-collect a {
    width: 100%;
    height: 1.43rem;
  }
 .hufu-collect a img {
    width: 100%;
    height: 100%;
  }
  /*section-side3-body*/
 .section-side3-body {
    padding: 0 .04rem;
    display: flex;
    justify-content: space-between;
  }
  .section-side3-body  img {
    width: 1.05rem;
    height: 1.05rem;
  }
 .section-side3-body .body-left {
    width: 1.34rem;
    height: 3.27rem;
    align-items: center;
  }
 .section-side3-body .body-right {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
  .section-side3-body .body-right .connect:nth-of-type(3) {
    border-bottom: none;
  }
.section-side3-body .body-right .connect:nth-of-type(4) {
    border-bottom: none;
  }
.section-side3-body .body-right .connect {
    justify-content: flex-start;
    border-left: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 0;
    flex: 1;
  }
  .connect {
    display: flex;
    justify-content: space-between;
    margin-bottom: .23rem;
  }
  .product-side1 {
    width: 1.05rem;
    padding: 0 .07rem 0.11rem;
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
</style>
