<template>
    <div class="contains-v">
     <shop-carts-header></shop-carts-header>
      <shop-carts-section :add="addQal" :desc="descrQal" @productItemChecked="productCheck" :shopcartsInfo="shopcartsInfo"></shop-carts-section>
      <!--<shop-carts-all-price  @productChecked="productAllChecked" v-if="shopcartsInfo" :shopcartsInfo="shopcartsInfo"></shop-carts-all-price>-->
      <shop-carts-all-price :tm="totalpayprice" v-if="shopcartsInfo" :shopcartsInfo="shopcartsInfo"></shop-carts-all-price>
      <!--//如果数据不往下传的话，一般只写一个，-->
      <shop-carts-footer ></shop-carts-footer>
    </div>
</template>
<script>
    import ShopCartsHeader from "../components/ShopCarts/ShopCartsHeader";
    import ShopCartsSection from "../components/ShopCarts/ShopCartsSection";
    import ShopCartsAllPrice from "../components/ShopCarts/ShopCartsAllPrice";
    import ShopCartsFooter from "../components/ShopCarts/ShopCartsFooter";
    export default {
      name: "carts",
      components: {ShopCartsFooter, ShopCartsAllPrice, ShopCartsSection, ShopCartsHeader},
      data() {
        return {

          //根据当前用户来获取的
          shopcartsInfo: {
            totalpayprice: 0,//购物车的总价格
            checked: true,
            proInfo: [
              {
                "checked": true,
                "proImg": "/static/images/buypro-1.jpg",
                "proDesc": "SHISEIDO资生堂柔滑透光粉底液优惠套装",
                "sizeInfo": "规格：3G",
                "proprice": 420.00,
                "qal" : 3.0,
              },
              {
                "checked": true,
                "proImg": "/static/images/buypro-1.jpg",
                "proDesc": "SHISEIDO资生堂柔滑透光粉底液优惠套装",
                "sizeInfo": "规格：3G",
                "proprice": 420.00,
                "qal" : 1.0,
              },
              {
                "checked": true,
                "proImg": "/static/images/buypro-1.jpg",
                "proDesc": "SHISEIDO资生堂柔滑透光粉底液优惠套装",
                "sizeInfo": "规格：3G",
                "proprice": 420.00,
                "qal" : 1.0,
              },
            ],
          }
        }
      },
      // 将所有的业务逻辑都放到页面级组件
      methods:{
        /**
         * 初始化数据
         * */
        _initData(){
          this._counteCarts();
        },
        /**
         * 根据购物车info来统计总价格shopcartsInfo
         * @private
         * */
        _counteCarts(shopcartsInfo){
          let total=0;
          // console.log( shopcartsInfo)
          this.shopcartsInfo.proInfo.forEach((product,pid)=>{
            //选中商品
            if(product.checked){
              total+=product.proprice*product.qal;
            }
          })
          this.totalpayprice=total;
        },
        /**
         * ，所有商品选中，全选选中
         * */
        productCheck(){//根据下面点击的结果控制上面全选的结果
          this.shopcartsInfo.checked = this.shopcartsInfo.proInfo.every(item=>item.checked);
        },
          /**
           * 全选选中，所有所有商品选中
           * */
        productAllChecked(){
          let checked=this.shopcartsInfo.checked;
          this.shopcartsInfo.proInfo.forEach((product,i)=>{
            product.checked=checked;
          })
        },
        /**
         * 根据商品编号来修改商品的数量
         * */
        addQal(pid){
          this.shopcartsInfo.proInfo[pid].qal++;
        },
        descrQal(pid){
          if(this.shopcartsInfo.proInfo[pid].qal<=1){
            this.shopcartsInfo.proInfo[pid].qal=1;

          }else{
            this.shopcartsInfo.proInfo[pid].qal--;
          }
        },
      },
      created(){
        this. _initData();
      },
      mounted(){
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
  a{
    text-decoration: none;
  }
</style>
