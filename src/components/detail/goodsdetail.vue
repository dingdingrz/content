<template>
  <div class="pages">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(v,i) in banner" :key = "i"><img :src="v.src" alt=""></mt-swipe-item>
    </mt-swipe>


       <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span>市场价：
                            <del>￥{{goodsInfo.market_price}}</del>
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>销售价：
                            <span class="sale_price">￥{{goodsInfo.sell_price}}</span>
                        </span>
                    </div>
                    <div class="count">
                        <span>购买数量：</span>
                        <numbox :max="goodsInfo.stock_quantity" :min="0" :step="1" v-model="count" ></numbox>
                        
                    </div>
                    <div class="btns">
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger" @click = "addToCart" >加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>
       <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsInfo.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" :plain="true">商品描述</mt-button>
                <br>
                <mt-button type="danger" size="large" :plain="true" @click = "$router.push('/detail/comment/' +goodsInfo.id)">商品评论</mt-button>
            </div>
        </div>
        <transition v-on:before-enter="beforeEnter" v-on:enter="enter">
          <div class="redball" v-show="isShowBtn"></div>

        </transition>
  </div>
</template>
<script>
import axios from "axios"
import numbox from "../common/numbox.vue"
import dateformat from "../../filters/dateformat"
export default {
  data(){
    return {
      goodsInfo:[],
      banner:[],
      count:0,
      isShowBtn:false
    }
  },
  methods:{
    getInfo(){
      axios({
        url:'http://www.escook.cn:3000/api/goods/getinfo/'+this.$route.params.id,
        method:'get'
      }).then(res=>{
        console.log(res)
        this.goodsInfo = res.data.message[0]
        // console.log(this.goodsInfo)
      })
    },
    getBanner(){
      axios({
        url:"http://www.escook.cn:3000/api/getthumimages/"+this.$route.params.id,
        method:'get'
      }).then(res=>{
        // console.log(res)
        this.banner = res.data.message
        // console.log(this.banner)
      })
    },
    beforeEnter(el){
      el.style.top = "445px";
      el.style.left = "175px";

    },
    enter(el){
       el.style.transition = "all .3s linear";      
      el.offsetWidth;
      el.style.top = (640 + window.pageYOffset)  +"px";
      el.style.left = "240px";
      this.isShowBall = false;
    },
    addToCart(){
      this.isShowBtn=true;
      // 这是子组件，通过触发函数 想父组件传值
      // vuex 挂在到main。js中
      this.$store.commit("addToCarts",{
        id:this.$route.params.id,
        count :this.count
      })
    }
  },
  created(){
    this.getInfo(),
    this.getBanner()
  },
  components:{
    numbox
  },
  filters:{
    dateformat
  }
  
}
</script>
<style scopted>
.redball {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 375px;
  left: 180px;
}
.mint-swipe {
  height: 180px;
}
.mint-swipe-item {
  background: #ffffff;
}
.mint-swipe img {
  margin: 0 auto;
  height: 100%;
  display: block;
}
.btns {
  margin-top: 10px
}
</style>
