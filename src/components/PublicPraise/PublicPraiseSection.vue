<template>
  <section>
    <public-praisesection-hot-tags :praiseInfo="praiseInfo"></public-praisesection-hot-tags>
    <public-praisesectiongood-praise :praiseInfo="praiseInfo"></public-praisesectiongood-praise>
  </section>
</template>

<script>
    import PublicPraisesectionHotTags from "./PublicPraisesectionHotTags";
    import PublicPraisesectiongoodPraise from "./PublicPraisesectiongoodPraise";
    export default {
      props:["praiseInfo"],
        name: "PublicPraiseSection",
       components: {PublicPraisesectiongoodPraise, PublicPraisesectionHotTags}
    }
</script>
<style scoped>
section{
  font-family: "微软雅黑", Arial;
  flex:1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
