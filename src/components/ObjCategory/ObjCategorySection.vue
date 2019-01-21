<template>
  <section>
    <div class="section">
      <obj-category-section-category-name :datatype="datatype" :changes="changes"  ref="sectionleft" :l="l" ></obj-category-section-category-name>
      <obj-category-section-category-name-list :datatype="datatype" :num="num" ></obj-category-section-category-name-list>
    </div>
  </section>
</template>
<script>
    import ObjCategorySectionCategoryName from "./ObjCategorySectionCategoryName";
    import ObjCategorySectionCategoryNameList from "./ObjCategorySectionCategoryNameList";
    export default {
      props:["datatype"],
      name: "ObjCategorySection",
      components: {ObjCategorySectionCategoryNameList, ObjCategorySectionCategoryName},
      data(){
        return{
          num:0,
          l:0
        }
      },
      methods:{
          changes(i){
          this.num=i;
          this.l=i;
         },
      }
    }
</script>

<style scoped>
  section {
    display: flex;
  }
  .section {
    display: flex;
    justify-content: space-between;

  }
</style>
