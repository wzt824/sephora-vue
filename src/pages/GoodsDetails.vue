<template>
  <div class="contains-v">
    <goods-details-header></goods-details-header>
    <goods-details-section :num="num" :datadetails="datadetails" ></goods-details-section>
    <goods-details-footer></goods-details-footer>
  </div>
</template>
<script>
    import GoodsDetailsHeader from "../components/GoodsDetails/GoodsDetailsHeader";
    import GoodsDetailsSection from "../components/GoodsDetails/GoodsDetailsSection";
    import GoodsDetailsFooter from "../components/GoodsDetails/GoodsDetailsFooter";
    export default {
        name: "GoodsDetails",
        components: {GoodsDetailsFooter, GoodsDetailsSection, GoodsDetailsHeader},
      data(){
        return {
          num:'',
          datadetails:[
            {
              proinfo: {
                  proname:"圣罗兰黑管唇釉",
                  othername:'YSL VAL VINYL CREAM',
                  prodesc:"持色科技让双唇莹亮光泽，如染唇液般持久妆效",
                  proprice:"320",
                  tag:"新品",
                  brandsImg:"/static/images/ysl_144X60.png",
                  brandsName:'圣罗兰美妆',
                  proSwiperImg:["/static/images/1_n_06513_640x640.jpg"],
                },
              procomments: [
                {
                  userpic:"/static/images/bigpic.jpg",
                  username:"因为你，草木繁盛",
                  vipImg:"/static/images/vip-1.jpg",
                  commentConn:"显色度很好，颜色很漂亮，只是稍微有点黏腻，不知道是不是涂方法不对啊",
                  commentdate:"2018-04-12",
                },
                {
                  userpic:"/static/images/132.jpg",
                  username:"弥弥",
                  vipImg:"/static/images/vip-1.jpg",
                  commentConn:"显色度很好，颜色很漂亮，只是稍微有点黏腻，不知道是不是涂方法不对啊",
                  commentdate:"2018-04-12",
                },
              ],

              detailsDesc:["/static/images/OP982040_01.jpg","/static/images/OP982040_02.jpg","/static/images/OP982040_03.jpg","/static/images/OP982040_04.jpg","/static/images/OP982040_05.jpg","/static/images/OP982040_06.jpg",
                "/static/images/OP982040_07.jpg","/static/images/OP982040_08.jpg","/static/images/OP982040_09.jpg","/static/images/OP982040_10.jpg"],
              proparam:{
                "guige":'5.5ml,461',
                "huohao":'2323'
              }

            },
            {
              proinfo: {
                pic:"/static/images/1_n_06775_1200x1200.jpg",
                proname:"娇兰臻彩宝石唇膏套装（唇膏+唇膏壳）",
                othername:'GUERLAIN ROUGE G DE GUERLAIN VALUE SET',
                prodesc:"珠宝般饱满瑰丽的高雅色泽，搭配双面镜优雅弹开的外盒设计， 尽显奢华风范。",
                proprice:"588",
                tag:"新品",
                brandsImg:"/static/images/guerlain_144X60.png",
                brandsName:'娇兰',
                proSwiperImg:["/static/images/1_n_06775_1200x1200.jpg"],
              },
              procomments: [
                {
                  userpic:"/static/images/bigpic.jpg",
                  username:"ann",
                  vipImg:"/static/images/vip-1.jpg",
                  commentConn:"壳子很精致，唇膏到保质期到23年，成分也好天然，就是送的是复原蜜2019年5月就到期的，早知道就自己选喜欢的颜色买",
                  commentdate:"2018-12-22",
                },
                {
                  userpic:"/static/images/bigpic.jpg",
                  username:"霞",
                  vipImg:"/static/images/vip-1.jpg",
                  commentConn:"颜色很好看，滋润显色并持久，就是壳太重了。",
                  commentdate:"2018-12-21",
                },
              ],
              proparam:{
                "guige":'5.5ml,461',
                "huohao":'2323'
              }

            },
            {
              proinfo: {
                pic:"/static/images/1_n_06818_640x640.jpg",
                proname:"魅可18圣诞限量迷你唇膏套组",
                othername:'MAC SHINY PRETTY THINGS LIP KIT',
                prodesc:"18圣诞限量系列",
                proprice:"1100",
                tag:"新品",
                brandsImg:"/static/images/mac_144X60.png",
                brandsName:'魅可'
              },
              procomments: [
                {
                  userpic:"/static/images/system07.jpg",
                  username:"ann",
                  vipImg:"/static/images/vip-1.jpg",
                  commentConn:"壳子很精致，唇膏到保质期到23年，成分也好天然，就是送的是复原蜜2019年5月就到期的，早知道就自己选喜欢的颜色买",
                  commentdate:"2018-12-22",
                },
                {
                  userpic:"/static/images/bigpic.jpg",
                  username:"霞",
                  vipImg:"/static/images/vip-2.jpg",
                  commentConn:"这个真心不错，本来还纠结买哪种颜色的好看，这下子把我的纠结症给弄没了，昨天到货试了一下，每一款都是我想要的，哑光的，丝滑的都有，每个我都试了一下！是我想要的，完美",
                  commentdate:"2018-12-20"
                },
              ],
              proparam:{
                "guige":'套装',
                "huohao":'464706'
              }

            },
          ],
        }
      },
      methods:{},
      mounted(){
        let detailsid=this.$route.params.id;
        this.num =detailsid;
      }

    }
</script>

<style scoped>
  .contains-v{
    display: flex;
    height:100%;
    width:100%;
    flex-direction: column;
    font-family: "微软雅黑",Arial;
  }
</style>
