<template>
  <div class="contains-v">
    <obj-category-header></obj-category-header>
    <obj-category-section  :datatype="datatype" ></obj-category-section>
    <obj-category-footer></obj-category-footer>
  </div>
</template>
<script>
    import ObjCategoryHeader from "../components/ObjCategory/ObjCategoryHeader";
    import ObjCategorySection from "../components/ObjCategory/ObjCategorySection";
    import ObjCategoryFooter from "../components/ObjCategory/ObjCategoryFooter";
    export default {
         name: "Category",
         components: {ObjCategoryFooter, ObjCategorySection, ObjCategoryHeader},
         data(){
          return {
            datatype:[
              {"typename":"护肤",
                "subtypepic":"/static/images/category-top1.jpg",
                "subtypeInfo":[
                  {"title":"卸妆",
                    "proInfo":[
                          {"proImg":"/static/images/category-side1.jpg","proname":"卸妆啫喱"},
                          {"proImg":"/static/images/1_n_06422_150x150.jpg","proname":"卸妆液"},
                          {"proImg":"/static/images/1_n_06178_150x150.jpg","proname":"卸妆乳"},
                          {"proImg":"/static/images/1_n_06817_150x150.jpg","proname":"卸妆油"},
                          {"proImg":"/static/images/1_n_06817_150x150 (1).jpg","proname":"卸妆巾"},
                          {"proImg":"/static/images/1_n_06262_150x150.jpg","proname":"套装"}
                    ]
                  },
                  {"title":"清洁",
                    "proInfo":[
                      {"proImg":"/static/images/1_n_05502_150x150.jpg","proname":"洁面巾"},
                      {"proImg":"/static/images/1_n_06813_150x150.jpg","proname":"磨砂去角质"},
                      {"proImg":"/static/images/1_n_06813_150x150 (1).jpg","proname":"洁面乳/霜"},
                      {"proImg":"/static/images/1_n_06258_150x150.jpg","proname":"洁面泡沫"},
                      {"proImg":"/static/images/1_n_06813_150x150 (2).jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/1_n_06717_150x150.jpg","proname":"洁肤水"},

                    ]
                  },
                  {"title":"面部护理",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"化妆水"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部精华"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面霜"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部护理油"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁肤水"}
                    ]
                  },
                ]
              },
              {"typename":"彩妆",
                "subtypepic":"/static/images/m_navigation_makeup_20181025 (1).jpg",
                "subtypeInfo":[
                  {"title":"脸部彩妆",
                    "proInfo":[
                      {"proImg":"/static/images/1_n_06767_150x150.jpg","proname":"妆前乳"},
                      {"proImg":"/static/images/1_n_06635_150x150.jpg","proname":"粉底液"},
                      {"proImg":"/static/images/1_n_05476_150x150.jpg","proname":"脸部遮瑕"},
                      {"proImg":"/static/images/1_n_06817_150x150 (2).jpg","proname":"粉饼"},
                      {"proImg":"/static/images/1_n_06270_150x150.jpg","proname":"腮红"},
                      {"proImg":"/static/images/1_n_05934_150x150.jpg","proname":"散粉"},
                      {"proImg":"/static/images/1_n_06728_150x150 (1).jpg","proname":"闪粉"},
                      {"proImg":"/static/images/1_n_06813_150x150 (3).jpg","proname":"散粉"},
                      {"proImg":"/static/images/1_n_06813_150x150 (3).jpg","proname":"定妆喷雾"},
                    ]
                  },
                  {"title":"眼部彩妆",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼线"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"假睫毛"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼影"},
                    ]
                  },
                  {"title":"眉部彩妆",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉笔"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉膏"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"套装"}
                    ]
                  }
                ]
              },
              {"typename":"香水",
                "subtypepic":"/static/images/m_navigation_fragrance_20180524.jpg",
                "subtypeInfo":[
                  {"title":"女士",
                    "proInfo":[
                      {"proImg":"/static/images/1_n_06812_150x150.jpg","proname":"卸妆啫喱"},
                      {"proImg":"/static/images/1_n_06818_150x150.jpg","proname":"卸妆液"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆乳"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆油"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆巾"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"套装"}
                    ]
                  },
                  {"title":"男士",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面巾"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"磨砂去角质"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面乳/霜"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面泡沫"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁肤水"},

                    ]
                  },
                  {"title":"中性",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"化妆水"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部精华"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面霜"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部护理油"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁肤水"}
                    ]
                  },
                ]
              },
              {"typename":"工具",
                "subtypepic":"/static/images/m_navigation_tool_20181025.jpg",
                "subtypeInfo":[
                  {"title":"化妆工具",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"妆前乳"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"粉底液"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"脸部遮瑕"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"粉饼"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"腮红"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"散粉"},
                    ]
                  },
                  {"title":"护肤工具",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼线"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"假睫毛"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼影"},
                    ]
                  },
                  {"title":"护体工具",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉笔"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉膏"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"套装"}
                    ]
                  }
                ]
              },
              {"typename":"男士护肤",
                "subtypepic":"/static/images/m_navigation_menskincare_20180906.jpg",
                "subtypeInfo":[
                  {"title":"唇部护理",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"妆前乳"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"粉底液"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"脸部遮瑕"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"粉饼"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"腮红"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"散粉"},
                    ]
                  },
                  {"title":"清洁",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼线"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"假睫毛"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼影"},
                    ]
                  },
                  {"title":"剃须护理",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉笔"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉膏"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"套装"}
                    ]
                  }
                ]
              },
              {"typename":"护肤",
                "subtypepic":"/static/images/category-top1.jpg",
                "subtypeInfo":[
                  {"title":"卸妆",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆啫喱"},
                      {"proImg":"/static/images/1_n_06422_150x150.jpg","proname":"卸妆液"},
                      {"proImg":"/static/images/1_n_06178_150x150.jpg","proname":"卸妆乳"},
                      {"proImg":"/static/images/1_n_06817_150x150.jpg","proname":"卸妆油"},
                      {"proImg":"/static/images/1_n_06817_150x150 (1).jpg","proname":"卸妆巾"},
                      {"proImg":"/static/images/1_n_06262_150x150.jpg","proname":"套装"}
                    ]
                  },
                  {"title":"清洁",
                    "proInfo":[
                      {"proImg":"/static/images/1_n_05502_150x150.jpg","proname":"洁面巾"},
                      {"proImg":"/static/images/1_n_06813_150x150.jpg","proname":"磨砂去角质"},
                      {"proImg":"/static/images/1_n_06813_150x150 (1).jpg","proname":"洁面乳/霜"},
                      {"proImg":"/static/images/1_n_06258_150x150.jpg","proname":"洁面泡沫"},
                      {"proImg":"/static/images/1_n_06813_150x150 (2).jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/1_n_06717_150x150.jpg","proname":"洁肤水"},

                    ]
                  },
                  {"title":"面部护理",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"化妆水"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部精华"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面霜"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部护理油"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁肤水"}
                    ]
                  },
                ]
              },
              {"typename":"彩妆",
                "subtypepic":"/static/images/m_navigation_makeup_20181025 (1).jpg",
                "subtypeInfo":[
                  {"title":"脸部彩妆",
                    "proInfo":[
                      {"proImg":"/static/images/1_n_06767_150x150.jpg","proname":"妆前乳"},
                      {"proImg":"/static/images/1_n_06635_150x150.jpg","proname":"粉底液"},
                      {"proImg":"/static/images/1_n_05476_150x150.jpg","proname":"脸部遮瑕"},
                      {"proImg":"/static/images/1_n_06817_150x150 (2).jpg","proname":"粉饼"},
                      {"proImg":"/static/images/1_n_06270_150x150.jpg","proname":"腮红"},
                      {"proImg":"/static/images/1_n_05934_150x150.jpg","proname":"散粉"},
                      {"proImg":"/static/images/1_n_06728_150x150 (1).jpg","proname":"闪粉"},
                      {"proImg":"/static/images/1_n_06813_150x150 (3).jpg","proname":"散粉"},
                      {"proImg":"/static/images/1_n_06813_150x150 (3).jpg","proname":"定妆喷雾"},
                    ]
                  },
                  {"title":"眼部彩妆",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼线"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"假睫毛"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眼影"},
                    ]
                  },
                  {"title":"眉部彩妆",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉笔"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"眉膏"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"套装"}
                    ]
                  }
                ]
              },
              {"typename":"香水",
                "subtypepic":"/static/images/m_navigation_fragrance_20180524.jpg",
                "subtypeInfo":[
                  {"title":"女士",
                    "proInfo":[
                      {"proImg":"/static/images/1_n_06812_150x150.jpg","proname":"卸妆啫喱"},
                      {"proImg":"/static/images/1_n_06818_150x150.jpg","proname":"卸妆液"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆乳"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆油"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"卸妆巾"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"套装"}
                    ]
                  },
                  {"title":"男士",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面巾"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"磨砂去角质"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面乳/霜"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面泡沫"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁肤水"},

                    ]
                  },
                  {"title":"中性",
                    "proInfo":[
                      {"proImg":"/static/images/category-side1.jpg","proname":"化妆水"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部精华"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面霜"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"面部护理油"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁面啫喱"},
                      {"proImg":"/static/images/category-side1.jpg","proname":"洁肤水"}
                    ]
                  },
                ]
              }

            ],
          }
      }
    }
</script>
<style scoped>
/*.changelist{*/
  /*color:red;*/
  /*background: white;*/
/*}*/
  .contains-v{
    display: flex;
    height:100%;
    flex-direction: column;
    font-family: "微软雅黑",Arial;
  }
  section{
    flex: 1;
    overflow-y: auto;
  }
</style>
