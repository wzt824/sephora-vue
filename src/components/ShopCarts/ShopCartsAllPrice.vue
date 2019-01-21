<template>
  <div class="allprices">
    <div class="allprices-left">
            <span class="checkspan">
                <input type="checkbox" v-model="shopcartsInfo.checked" @change="productAllChecked">
                <label ></label><span>全选</span>
           </span>
      <div class="payprices-info" v-if=" shopcartsInfo.proInfo">
        <!--判断是否有数据-->
        <p class="totalji">合计：<span>￥{{tm}}</span></p>
        <!--<p class="totalji">合计：<span>￥{{shopcartsInfo | totalpaypriceFilters}}</span></p>-->
        <p >
          商品总额：<span>￥0.00</span>
          共节省：<span>￥0.00</span>
        </p>
      </div>
    </div>
    <a href="javascript:;" class="gopay">
      结算<i></i>
    </a>
  </div>
</template>

<script>
    export default {
      props:["shopcartsInfo",'tm'],
        name: "ShopCartsAllPrice",
      //过滤器，用来计算的 (shopcartsInfo | totalpaypriceFilters)
      filters:{
        totalpaypriceFilters(shopcartsInfo){
          let total=0;
          // console.log( shopcartsInfo)
          shopcartsInfo.proInfo.forEach((product,pid)=>{
            //选中商品
            if(product.checked){
              total+=product.proprice*product.qal;
            }
          })
          return total;
        }
      },
      methods:{
        productAllChecked(){
          this.$emit("productChecked");
        }
      }


    }
</script>

<style scoped>
  /*allprices*/
  .checkspan {
    display: inline-block;
    position: relative;
  }
  .checkspan input{
    opacity: 0;
    position: absolute;
  }
  .checkspan label{
    display:inline-block;
    width:.19rem;
    height:.19rem;
    border:1px solid #1b1b1b;
    margin-right:.07rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkspan input:checked +label{
    background: url("../../assets/images/checked.jpg");
  }
  .allprices{
    display: flex;
    justify-content: space-between;
    color:#858585;
    background: white;
    box-shadow: 0 0 .03rem .02rem #f7f7f7;
    align-items: center;
    /*background: green;*/
  }
  .allprices .checkspan{
    font-size: .15rem;
    color:black;
    display: flex;
  }
  .allprices .checkspan span{
    flex-wrap: nowrap;
  }
  .allprices-left{
    padding:.13rem 0.08rem .13rem .16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  .allprices .payprices-info{
    text-align: right;
    font-size: .13rem;
  }
  .payprices-info p:nth-of-type(2) span{
    display: inline-block;
  }
  .totalji{
    font-size:.15rem;
  }
  .allprices .payprices-info span{
    color:black;
  }
  .gopay{
    color:white;
    background: red;
    font-size: .15rem;
    padding:.2rem .08rem;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
</style>
