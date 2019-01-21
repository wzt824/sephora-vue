<template>
  <section>
    <div class="main-section">
      <shop-carts-section-product-list :add="add" :desc="desc" :pid="pid" @productChecked="productCheckedAll" v-if="shopcartsInfo.proInfo" :productlist="shopcartsInfo.proInfo"></shop-carts-section-product-list>
      <shop-carts-section-product-discount></shop-carts-section-product-discount>
      <shop-carts-section-guess-like></shop-carts-section-guess-like>
    </div>
  </section>
</template>
<script>
    import ShopCartsSectionProductList from "./ShopCartsSectionProductList";
    import ShopCartsSectionProductDiscount from "./ShopCartsSectionProductDiscount";
    import ShopCartsSectionGuessLike from "./ShopCartsSectionGuessLike";
    export default {
      props:["shopcartsInfo","add","desc","pid"],//第一个接口
      name: "ShopCartsSection",
      //
      components: { ShopCartsSectionProductList,ShopCartsSectionGuessLike, ShopCartsSectionProductDiscount},
      methods:{
        productCheckedAll(i){
          this.$emit("productItemChecked",i)
        }
      }
    }

</script>
//
<style scoped>
  section {
    font-family: "微软雅黑", Arial;
    flex:1;
    overflow-y: auto;
    overflow-x: hidden;
  }

</style>
