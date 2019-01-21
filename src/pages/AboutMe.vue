<template>
    <div class="contains-v">
      <about-me-header></about-me-header>
      <about-me-section></about-me-section>
      <about-me-footer></about-me-footer>
    </div>
</template>
<script>
    import AboutMeHeader from "../components/AboutMe/AboutMeHeader";
    import AboutMeSection from "../components/AboutMe/AboutMeSection";
    import AboutMeFooter from "../components/AboutMe/AboutMeFooter";
    export default {
        name: "AboutMe",
      components: {AboutMeFooter, AboutMeSection, AboutMeHeader}
    }
</script>
<style scoped>
  .contains-v{
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    font-family: "微软雅黑",Arial;
  }
</style>
