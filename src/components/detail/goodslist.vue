<template>
  <div class="page goods-list">
    <div class="goods-item" v-for="(v,i) in goodsList " :key ="i" @click = "$router.push('/goodsdetail/' + v.id)" >
      <img  :src="v.img_url" alt=""> 
      <h4 >{{v.title}}</h4> 
      <div class="info">
        <p  class="price">
          <span class="nowPrice">￥{{v.sell_price}}</span> 
          <span><del>￥{{v.market_price}}</del></span>
        </p> 
        <p class="sale">
          <span>热卖中</span> 
          <span>剩{{v.stock_quantity}}件</span>
        </p>
      </div>
    </div>
   <mt-button type="danger" size="large" v-show="isShowMoreBtn" :plain="true" @click="more">加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios"
import {Toast} from "mint-ui"

export default {
  data(){
    return {
      goodsList:[],
      num:1,
      isShowMoreBtn:true
    }
  },
  methods:{
    getGoodsList(){
      axios({
      url:"http://www.escook.cn:3000/api/getgoods?pageindex="+this.num,
      method:"get"
    }).then(res=>{
      if(res.data.status==0){
        this.goodsList.push(... res.data.message)
          if(res.data.message.length==0){
          this.isShowMoreBtn=false;
          Toast("没有更多的数据了")
        }
      }
      

    })
    },
    more(){
      this.num++
      this.getGoodsList()
    }
  },
    created(){
      this.getGoodsList()
    }
}
</script>

<style scoped>
 .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
    padding-top: 0;
    padding-bottom: 53px;
}

.goods-list .goods-item{
    width: 48%;
    border: 1px solid #ccc;
    margin: 1%;
    box-shadow: 0 0 7px #aaa;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}

 .goods-list .goods-item img {
    width: 100%;
    display: block;
}

 .goods-list .goods-item h4 {
    font-size: 14px;
}

.goods-list .goods-item .info {
    background-color: #eee;
}

 .goods-list .goods-item .info p {
    margin: 0;
    margin-top: 10px;
    font-size: 13px;
}

 .goods-list .goods-item .info p:nth-child(2) {
    display: flex;
    justify-content: space-between;
}

 .goods-list .goods-item .info p:nth-child(1) .nowPrice {
    color: red;
    font-size: 15px;
    margin-right: 8px;
}
</style>


