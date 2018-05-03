import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Home from '../components/tabbar/home.vue';
import Cart from '../components/tabbar/cart.vue';
import Member from '../components/tabbar/member.vue';
import Search from '../components/tabbar/search.vue';
import DetailList from '../components/detail/detailList.vue';
import Details from '../components/detail/details.vue';
import NewsList from '../components/news/newslist.vue';
import NewsListDetail from '../components/news/newslistDetail.vue';
import PictureDetail from '../components/pic/pictureDetail.vue';
import PictureList from '../components/pic/pictureList.vue';

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
      path :'/detaillist',
      component:DetailList,
    },
    {
      path :'/details',
      component:Details,
    },
    {
      path :'/newslist',
      component:NewsList,
    },
    {
      path :'/newslistdetail',
      component:NewsListDetail,
    }
  ]
})
