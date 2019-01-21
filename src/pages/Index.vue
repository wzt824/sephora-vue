<template>
  <div id="contains-v"  ref="contains">
    <div class="topsection">
      <obj-index-header ></obj-index-header>
      <obj-index-section :data="indexinfo"></obj-index-section>
    </div>
    <obj-index-footer></obj-index-footer>
  </div>
</template>
<script>
  // import swiperApiServer from '../apis/swiperApis'
  import Iconfont from '../assets/css/iconfont.css';
  import publicCss from '../assets/css/public.css';
  import Demo from '../assets/css/demo.css'
  import $ from "jquery"
    import ObjIndexHeader from "../components/ObjIndex/ObjIndexHeader";
    import ObjIndexSection from "../components/ObjIndex/ObjIndexSection";
    import ObjIndexFooter from "../components/ObjIndex/ObjIndexFooter";
    //index为/,为localhost；8080时 请求的是index，所以在index里面引入的为全局
    export default {
        name: "Index",
       components: { ObjIndexHeader,ObjIndexSection,ObjIndexFooter,Iconfont,Demo,publicCss},
      data(){
          return{
            indexinfo:{}
            // indexinfo:
            //   {
            //     "swiperImg":[
            //       {"pic":"/static/images/h-slider-1.jpg"},
            //       {"pic":"/static/images/h-slider-2.jpg"},
            //       {"pic":"/static/images/h-slider-3.jpg"}
            //     ],
            //     "guideIconfont1":[
            //       {"title":"畅销榜单","images":"/static/images/guide-1.jpg"},
            //       {"title":"本周特惠","images":"/static/images/guide-2.jpg"},
            //       {"title":"每日惊喜","images":"/static/images/guide-3.jpg"},
            //       {"title":"新品速递","images":"/static/images/guide-4.jpg"},
            //       {"title":"礼物套装","images":"/static/images/guide-5.jpg"}
            //     ],
            //     "guideIconfont2":[
            //       {"title":"畅销榜单","images":"/static/images/guide-6.jpg"},
            //       {"title":"本周特惠","images":"/static/images/guide-7.jpg"},
            //       {"title":"每日惊喜","images":"/static/images/guide-8.jpg"},
            //       {"title":"新品速递","images":"/static/images/guide-9.jpg"},
            //       {"title":"礼物套装","images":"/static/images/guide-10.jpg"}
            //     ],
            //     "hotside":[
            //       {"imgBanner":"/static/images/s1-1.jpg",
            //         "proInfo":[
            //           {"id":"0001","proImg":"/static/images/1_n_06513_640x640.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            //           {"id":"0002","proImg":"/static/images/1_n_06775_1200x1200.jpg","proName":"Fresh","proDesc":"娇兰臻彩宝石唇膏套装（唇膏+唇膏壳）","proPrice":"980.00"},
            //           {"id":"0003","proImg":"/static/images/s1-pro3.jpg","proName":"M.A.C","proDesc":"魅可18圣诞限量迷你唇膏套组","proPrice":"1100.00"}
            //         ],
            //       },
            //       {"imgBanner":"/static/images/s1-2.jpg",
            //         "proInfo":[
            //           {"id":"0001","proImg":"/static/images/s2-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            //           {"id":"0002","proImg":"/static/images/s2-pro2.jpg","proName":"Fresh","proDesc":"馥蕾诗明星面膜礼盒(18节日定制)","proPrice":"980.00"},
            //           {"id":"0003","proImg":"/static/images/s2-pro3.jpg","proName":"M.A.C","proDesc":"魅可18圣诞限量迷你唇膏套组","proPrice":"1100.00"}
            //         ],
            //       },
            //       {"imgBanner":"/static/images/s1-3.jpg",
            //         "proInfo":[
            //           {"id":"0001","proImg":"/static/images/s3-pro1.jpg","proName":"LAN COMN","proDesc":"兰蔻肌底臻宠精选礼盒","proPrice":"1280.00"},
            //           {"id":"0002","proImg":"/static/images/s3-pro2.jpg","proName":"Fresh","proDesc":"馥蕾诗明星面膜礼盒(18节日定制)","proPrice":"980.00"},
            //           {"id":"0003","proImg":"/static/images/s3-pro3.jpg","proName":"M.A.C","proDesc":"魅可18圣诞限量迷你唇膏套组","proPrice":"1100.00"}
            //         ],
            //       },
            //     ],
            //
            //     "brandsInfo":[
            //       {
            //         "topTitle":"全部品牌",
            //         "imgBanner":["/static/images/m_superbrand1.png","/static/images/m_superbrand2.png"],
            //         "allBrandsImg":["/static/images/brand1.png","/static/images/brand2.png","/static/images/brand3.png","/static/images/brand4.png","/static/images/brand5.png","/static/images/brand6.png",
            //           "/static/images/brand7.png","/static/images/brand8.png","/static/images/brand9.png",
            //           "/static/images/brand10.png","/static/images/brand11.png","/static/images/brand12.png"]
            //       }
            //     ],
            //     "categoryInfo":[
            //       {"title":"护肤",
            //         "categoryBanner":"/static/images/m_superbrand1.png",
            //         categoryLeftPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ],
            //         categoryRightPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //
            //       },
            //       {"title":"彩妆",
            //         "categoryBanner":"/static/images/hf-2.jpg",
            //         categoryLeftPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ],
            //         categoryRightPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //
            //       },
            //       {"title":"香水",
            //         "categoryBanner":"/static/images/hf-3.jpg",
            //         categoryLeftPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ],
            //         categoryRightPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //
            //       },
            //       {"title":"工具",
            //         "categoryBanner":"/static/images/hf-4.jpg",
            //         categoryLeftPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ],
            //         categoryRightPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //
            //       },
            //       {"title":"男士护肤",
            //         "categoryBanner":"/static/images/hf-5.jpg",
            //         categoryLeftPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ],
            //         categoryRightPro:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //
            //       }
            //     ],
            //     "recommendinfo":[
            //       {
            //         topRecommend: {"proImg":"/static/images/s1-pro1.jpg",
            //           "proName":"LAN COMN",
            //           "proDesc":"兰蔻肌底臻宠精选礼盒",
            //           "price":1280.00
            //         },
            //         recommendinfo:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //       },
            //       {
            //         topRecommend: {"proImg":"/static/images/s1-pro1.jpg",
            //           "proName":"LAN COMN",
            //           "proDesc":"兰蔻肌底臻宠精选礼盒",
            //           "price":1280.00
            //         },
            //         recommendinfo:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //       },
            //       {
            //         topRecommend: {"proImg":"/static/images/s1-pro1.jpg",
            //           "proName":"LAN COMN",
            //           "proDesc":"兰蔻肌底臻宠精选礼盒",
            //           "price":1280.00
            //         },
            //         recommendinfo:[
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           },
            //           {"proImg":"/static/images/s1-pro1.jpg",
            //             "proName":"LAN COMN",
            //             "proDesc":"兰蔻肌底臻宠精选礼盒",
            //             "price":1280.00
            //           }
            //         ]
            //       },
            //     ]
            //   }
          }
      },
      methods:{
          // _initGetData(){
          //   swiperApiServer.getSliderImg(data=>{
          //     this.indexinfo = data;
          //     console.log(this.indexinfo)
          //   })
          // },
      },
      created(){
          // this._initGetData();
        this.$http.get('/api/indexinfo').then((response)=>{//异步请求数据
              response=response.body
             if(response.errno===0){
                  this.indexinfo=response.data
                  console.log(this.indexinfo)//我们先来控制台看看数据有没有获取到，这句测试完之后记得删除
                }
              })
      },
    }
</script>
<style scoped>

.hufu-collect a img{
  width:100%;
  height:.2rem;
}
.topsection{
  overflow-y: auto;
  flex:1;
}
</style>
