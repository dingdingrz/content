<template>
  <div class="pages">
    <div class="goods-list">
            <div class="mui-card" v-for="(v, i) in cartsList" :key="i">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="v.isChecked"></mt-switch>
                        <img :src="v.thumb_path" class="thumb_img">
                        <div class="info">
                            <h4>{{v.title}}</h4>
                            <div class="box">
                                <span class="price">￥{{v.sell_price}}</span>
                                 <numbox :min="0" :max="Infinity" :step="1" v-model="v.count"></numbox>
                                <a href="#">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  </div>
</template>
<script>
import axios from "axios"
import numbox from "../common/numbox.vue"
export default {
  data(){
    return {
      cartsList:[]
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/goods/getshopcarlist/" + this.$store.getters.getIds
    }).then(res=>{
      if(res.data.status==0){
        res.data.message.forEach(v=>{
          v.count = this.$store.getters.getCountById(v.id);
          v.isChecked = false
        })
        this.cartsList = res.data.message
      }
    })
  },
  components:{
    numbox
  },
   watch:{
        cartsList:{
            handler(){
              // console.log(123)
                this.$store.commit("updateCarts",this.cartsList)
            },
            deep:true
        }
    },
    computed:{
      totalCount(){
        var sum = 0;
        this.cartsList.forEach(v=>{
          if(v.isChecked){
          sum+=v.count

          }

        })
        return sum
      }
    }

  
}
</script>
<style scoped>
.goods-list .mui-card-content-inner .thumb_img {
  width: 60px;
  height: 60px;
}

.goods-list .mui-card-content-inner .info {
  flex: 1;
}

.goods-list .mui-card-content-inner .info h4 {
  font-size: 14px;
}

.goods-list .mui-card-content-inner .info .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goods-list .mui-card-content-inner .info .box .price {
  font-size: 16px;
  color: red;
}

.goods-list .mui-card-content-inner {
  display: flex;
}

.mui-card-content-inner .amount {
    flex: 1;
}


.mui-card-content-inner .red {
    color: red;
    font-size: 16px;
    font-weight: bold;
}

.mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
