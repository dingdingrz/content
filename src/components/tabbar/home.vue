<template>
  <div >
    <mt-swipe :auto="4000" >
      <mt-swipe-item><img  ></mt-swipe-item>
    
    </mt-swipe>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      banner:"",
    }
  },
  methods:{
    getData(){
      axios({
        url:'http://www.escook.cn:3000/api/getlunbo',
        method:'get'
      }).then(res=>{
        console.log(res)
        this.banner = res.message
        
      })
    }
  },
  created(){
    this.getData()
  }

  
}
</script>
<style>
 .mint-swipe {
   height: 150px;
 }
</style>
