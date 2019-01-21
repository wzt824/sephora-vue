<template>
  <!--section开始-->
  <section>
    <about-me-section-info></about-me-section-info>
    <about-me-section-order-and-server></about-me-section-order-and-server>
    <about-me-like></about-me-like>
  </section>
</template>
<script>
    import AboutMeSectionInfo from "./AboutMeSectionInfo";
    import AboutMeSectionOrderAndServer from "./AboutMeSectionOrderAndServer";
    import AboutMeLike from "./AboutMeLike";
    export default {
        name: "AboutMeSection",
      components: {AboutMeLike, AboutMeSectionOrderAndServer, AboutMeSectionInfo}
    }
</script>
<style scoped>
  section {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
