import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Home from '../components/tabbar/home.vue';
import Cart from '../components/tabbar/cart.vue';
import Member from '../components/tabbar/member.vue';
import Search from '../components/tabbar/search.vue';
import Goodslist from '../components/detail/goodslist.vue';
import GoodsDetail from '../components/detail/goodsdetail.vue';
import NewsList from '../components/news/newslist.vue';
import NewsListDetail from '../components/news/newslistDetail.vue';
import PictureDetail from '../components/pic/pictureDetail.vue';
import PictureList from '../components/pic/pictureList.vue';
import Comments from '../components/detail/comment.vue'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path :'/cart',
      component:Cart,
    },
    {
      path :'/member',
      component:Member,
    },
    {
      path :'/search',
      component:Search,
    },
    {
      path :'/goodslist',
      component:Goodslist,
    },
    {
      path :'/goodsdetail/:id',
      component:GoodsDetail,
    },
    {
      path :'/newslist',
      component:NewsList,
    },
    {
      path :'/newslistdetail/:id',
      component:NewsListDetail,
    },
    {
      path:'/picturelist/:id',
      component : PictureList
    },
    {
      path:'/picturedetail/:id',
      component:PictureDetail
    },{
      path:'/detail/comment/:id',
      component:Comments
    }
  ]
})
