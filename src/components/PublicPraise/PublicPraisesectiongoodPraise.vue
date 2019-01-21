<template>
  <div class="section-body">
    <div class="share-pro" :item="p" :key="i" v-for="(p,i) in praiseInfo.praisePro">
      <a  >
        <img :src="p.images" alt="" >
      </a>
      <div class="share-pro-info">
        <p>
                    <span>
                       {{p.proDesc}}
                    </span>
          <a href="javascript:;">
            <img :src="p.userImg" alt="">
            <span> {{p.username}}</span>
          </a>
        </p>
        <div class="chooselike">
          <!--<i></i>-->
          <img :src="p.likeIco" alt="">
          <span>{{p.likenum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:["praiseInfo"],
        name: "PublicPraisesectiongoodPraise",
      methods:{
        // goDetails(id){
        //   this.$router.push({path:`/GoodsDetails/${id}`})
        // }
      }
    }
</script>

<style scoped>
  /*section-body开始*/
  .section-body{
    display: flex;
    justify-content: flex-start;
    padding:0.1rem .1rem;
    flex-wrap: wrap;
  }
  .share-pro:nth-of-type(2n-1){
    margin-right:.1rem;
    margin-bottom:.1rem;
  }
  .share-pro:nth-of-type(2n){
    margin-top:.2rem;
    margin-right:0rem;
  }
  .share-pro{
    border-radius: .05rem;
    background: white;
    box-shadow: 0 0 .05rem .01rem #c1c1c1;
    /*justify-content: flex-start;*/
    width: 48%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .share-pro a img{
    width:100%;
    height:1.5rem;
  }
  .share-pro-info{
    padding:.09rem .11rem .05rem .11rem;
    display: flex;
    justify-content: space-between;
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .share-pro-info p{
    color:black;
    font-size:.12rem;
    line-height: .2rem;
    align-items: center;
    letter-spacing: .01rem;
  }
  .share-pro-info p a{
    color:#757575;
    font-size:.12rem;
    line-height: .2rem;
    padding:.05rem 0;
    display: flex;
  }
  .share-pro-info p img{
    width:.17rem;
    height:.17rem;
    padding-right:.05rem;
  }
  .share-pro-info .chooselike span{
    color:#c1bbb8;
  }
  .share-pro-info .chooselike img{
    width:.21rem;
    height:.2rem;

  }
</style>
