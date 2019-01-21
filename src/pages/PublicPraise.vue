<template>
  <div class="contains-v">
    <public-praise-header></public-praise-header>
    <public-praise-section :praiseInfo="praiseInfo"></public-praise-section>
    <public-praise-footer></public-praise-footer>
  </div>
</template>
<script>
    import PublicPraiseHeader from "../components/PublicPraise/PublicPraiseHeader";
    import PublicPraiseSection from "../components/PublicPraise/PublicPraiseSection";
    import PublicPraiseFooter from "../components/PublicPraise/PublicPraiseFooter";
    export default {
        name: "PublicPraise",
        components: {PublicPraiseFooter, PublicPraiseSection, PublicPraiseHeader},
      data(){
         return{
           praiseInfo:{
             hotTags:[" #美在型型色色"," #刷新唇在感"," #拯救危肌","护肤C位","#美在型型色色"," #刷新唇在感"," #拯救危肌","护肤C位"],
             praisePro:[
               {"images":"/static/images/parise-1.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-2.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-3.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-4.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-5.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-6.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-1.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-2.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-3.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
               {"images":"/static/images/parise-4.jpg","proDesc":" hin美hin美的仙女的娇兰宝石214","userImg":"/static/images/constro-pic.jpg","username":"橘子真好吃","likeIco":"/static/images/feel-1.jpg","likenum":"345"},
             ]
           }
         }
      }
    }
</script>
<style scoped>
  .contains-v{
    display: flex;
    height:100%;
    flex-direction: column;
    font-family: "微软雅黑",Arial;
  }
</style>
