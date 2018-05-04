<template>
  <div class="page">
    <h4 v-text="newslistDetail.title"> </h4>
  <p class="newsinfo">
    <span>发表时间：{{newslistDetail.add_time}}</span>
    <span class="mui-pull-right">点击{{newslistDetail.click}}次</span>
  </p>
  <hr>
  <div class="info-content" v-html = "newslistDetail.content"></div>
  <hr>
  <div class="news-comment">
    <comment :id="this.$route.params.id"></comment>
  </div>
  </div>
  
</template>
<script>
import comment from "../common/comment"

import axios from "axios";
export default {
  data(){
    return {
      newslistDetail:{},
    }
  
  },
  methods:{
    getData(){
      axios({
        url:'http://www.escook.cn:3000/api/getnew/'+this.$route.params.id,
        methods:'get'
      }).then(res=>{
        if(res.data.status ==0){
          // console.log(res)
          this.newslistDetail = res.data.message[0];
          // console.log(this.newslistDetail)
        }
      })
    }

  },
  created(){
    this.getData()
    // console.log(this.$route.params.id)

  },
  components:{
    comment
  }
  
}
</script>
<style scope>
.page {
  padding: 0 10px;
}
.info-content {
  margin-top: 10px;

}
.info-content img {
  width: 100%;
}

</style>
