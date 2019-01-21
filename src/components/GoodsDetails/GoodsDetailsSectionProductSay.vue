<template>
  <div class="pro-comment"   >
    <div class="pro-comment-top-title">
      <p>
        <span>商品评论<i>(38)</i></span>
        <span>
                <span class="stars">
                     <span>4.8分</span>
                     <i class="star-img"><img src="/static/images/star.jpg" alt=""></i>
                     <i class="more"><img src="/static/images/more.jpg" alt=""></i>
                </span>

            </span>
      </p>
    </div>
    <div class="pro-comment-top-center">
      <ul>
        <li :key="i" v-for="(p,i) in datadetails.procomments">
          <p class="line1">
              <img class="userpic" :src="p.userpic" alt="">
              <span>{{p.username}}</span>
              <i><img :src="p.vipImg" alt=""></i>
          </p>
          <div class="line2">
              <p>{{p.commentConn}}</p>
          </div>
          <p class="line3">{{p.commentdate}}</p>
        </li>
      </ul>
      <div class="comment-list" @click="sayIsShow" ref="commentList" >
        <span v-if="isShow">收起全部评论</span>
        <span v-else>查看全部评论</span>
      </div>
      <ul v-show="isShow">
        <li :key="i" v-for="(p,i) in datadetails.procomments">
          <p class="line1">
            <img class="userpic" :src="p.userpic" alt="">
            <span>{{p.username}}</span>
            <i><img :src="p.vipImg" alt=""></i>
          </p>
          <div class="line2">
            <p>{{p.commentConn}}</p>
          </div>
          <p class="line3">{{p.commentdate}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
      props:["changeTab","datadetails"],
      name: "GoodsDetailsSectionProductSay",
      data(){
        return {
          isShow:false
        }
      },
      methods:{
        sayIsShow(){
          this.isShow=!this.isShow;
          $(".comment-list").remove();
        }
      }
    }
</script>

<style scoped>
  /*pro-comment开始*/
  /*.pro-comment{*/
  /*background: white;*/
  /*}*/
  .pro-comment-top-title{
    background: white;
    padding:.14rem;
    font-size:.14rem;
    padding-bottom:.06rem;
  }
  .pro-comment-top-title p{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pro-comment-top-title p .stars .star-img img{
    width:.7rem;
    height:.13rem;
  }
  .pro-comment-top-title i{
    color:#676767;
    font-size:.12rem;
    margin-left:.12rem;
  }
  .pro-comment-top-title .more img{
    width:.06rem;
    height:.1rem;
  }
  /*pro-comment-top-center开始*/
  .pro-comment-top-center ul {
    padding:0rem .15rem 0rem .12rem;
    background: white;
  }
  .pro-comment-top-center ul li {
    padding-top:.12rem;
    border-bottom: 1px solid #e0e0e0;

  }
  .pro-comment-top-center ul li .line1{
    font-size:.12rem;
    line-height: .12rem;
    display: flex;
    align-items: center;
  }
  .pro-comment-top-center ul li .line1 .userpic{
    width:.25rem;
    height:.25rem;
    margin-right:.15rem;
    border-radius: 50%;
  }
  .pro-comment-top-center ul li i{
    width:.17rem;
    height:.12rem;
    margin-left:.06rem;
  }
  .pro-comment-top-center ul li .line2{
    margin:.11rem 0 .15rem 0;
  }
  .pro-comment-top-center ul li .line3{
    padding-bottom: .15rem;
    color:#9c9c9c;
  }
  .comment-list{
    background: white;
  }
  .pro-comment-top-center .comment-list span{
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size:.14rem;
    line-height:.14rem;
    padding:.18rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
  }

</style>
