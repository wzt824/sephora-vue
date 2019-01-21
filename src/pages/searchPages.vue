<template>
  <div class="contains">
    <search-pages-header></search-pages-header>
    <search-pages-section></search-pages-section>
  </div>

</template>

<script>
    import SearchPagesHeader from "../components/searchPages/searchPagesHeader";
    import SearchPagesSection from "../components/searchPages/searchPagesSection";
    export default {
        name: "searchpages",
      components: {SearchPagesSection, SearchPagesHeader}
    }
</script>
<style scoped>
  .contains{
    width:100%;
  }
  </style>
