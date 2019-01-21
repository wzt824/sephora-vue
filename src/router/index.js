import Vue from 'vue'
import Router from 'vue-router'
import Index from  "../pages/Index"
import Category from "../pages/Category"
import PublicPraise from "../pages/PublicPraise"
import ShopCarts from "../pages/ShopCarts"
import AboutMe from "../pages/AboutMe"
import GoodsDetails from "../pages/GoodsDetails"
import TopList from "../pages/TopList";
import searchPages from "../pages/searchPages";
Vue.use(Router)
export default new Router({
  mode:'history',//去掉url中的#
  //配置的是页面级组件
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path:'/ShopCarts',
      name:"ShopCarts",
      component:ShopCarts
    },
    {
      path:'/PublicPraise',
      name:"PublicPraise",
      component:PublicPraise
    },
    {
      path:'/AboutMe',
      name:"AboutMe",
      component:AboutMe
    },
    {
      path:'/GoodsDetails/:id',
      name:"GoodsDetails",
      component:GoodsDetails
    },
    {
      path:'/toplist',
      name:"toplist",
      component:TopList
    },
    {
      path:'/toplist',
      name:"toplist",
      component:TopList
    },
    {
      path:'/searchpages',
      name:"searchpages",
      component:searchPages
    }
  ]
})
