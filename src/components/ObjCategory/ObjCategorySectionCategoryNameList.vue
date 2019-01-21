<template>
  <div class="section-right">
    <a href="javascript:;">
    <img :src="datatype[num].subtypepic" alt="">
    </a>
    <div class="section-right-side1" :item="k" :key="index" v-for="(k,index) in datatype[num].subtypeInfo">

      <div class="category-side1" :item="b" :key="index" v-for="(b,index) in datatype[num].subtypeInfo">
        <div class="category-side1-title">
          <h4>{{b.title}}</h4>
          <i></i>
        </div>
        <div class="category-side1-conn">
          <ul>
            <!--<li :item="a" :key="ind" v-for="(a,ind) in k.proInfo">-->
            <li :item="a" :key="ind" v-for="(a,ind) in b.proInfo">
              <router-link to="\GoodsDetails" tag="a">
                <img :src="a.proImg" alt="">
              </router-link>

              <p>{{a.proname}}</p>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
      props:["datatype","num"],
      name: "ObjCategorySectionCategoryNameList"
    }
</script>

<style scoped>
 .section-right {
    flex: 1;
    overflow-y: auto;
    /*margin-left: 0.75rem;*/
  }
  .section-right .section-right-side1 a {
    padding: .11rem .11rem 0;
    height: 0.9rem;
    background: white;
    /*width:100%;*/
  }
   .section-right  a img {
    width: 100%;
    height: 100%;
  }
  .section-right .section-right-side1 .category-side1 {
    margin-bottom: 0.03rem;
    padding: 0;
    background: white;
  }
   .section-right .section-right-side1 .category-side1-title {
    display: flex;
    justify-content: space-between;
    padding: .15rem .08rem;
  }
   .section-right .section-right-side1 .category-side1-title h4 {
    font-size: .14rem;
    line-height: .14rem;
    font-weight: 100;
  }
  .section-right .section-right-side1 .category-side1-conn ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .section-right .section-right-side1 .category-side1-conn ul li {
    text-align: center;
    margin-bottom: .14rem;
  }
   .section-right .section-right-side1 .category-side1-conn ul li a {
    width: .75rem;
    height: .75rem;
  }
  .section-right .section-right-side1 .category-side1-conn ul li a img {
    width: 100%;
    height: 100%;
  }
</style>
