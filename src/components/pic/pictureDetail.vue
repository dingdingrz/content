<template>
  <div class="pages" >
    <detail :article="picInfo" >
      <div slot="pics">
        <vue-preview :slides = "pic"></vue-preview>
      </div>
    </detail>
    <comment :id = "$route.params.id"></comment>
  </div>
</template>
<script>
import detail from "../common/detail.vue"
import axios from "axios"
import comment from "../common/comment.vue"

export default {
  data(){
    return {
      picInfo:[],
      pic:[]
    }
  },

  components:{
    detail,
    comment
  },
  methods:{
    getInfo(){
      axios({
        url:'http://www.escook.cn:3000/api/getimageInfo/'+this.$route.params.id,
        method:'get'
      }).then(res=>{
        // console.log(res)
        this.picInfo = res.data.message[0]
      })
    },
    getPic(){
      axios({
        url:'http://www.escook.cn:3000/api/getthumimages/'+this.$route.params.id,
        method:'get'
      }).then(res=>{
        console.log(res)
        if(res.data.status ==0){
          res.data.message.forEach(v=>{
            v.msrc = v.src;
            v.alt = "pic";
            v.title="索罗图";
            v.w = 600;
            v.h = 400;
          })
          this.pic = res.data.message;
        }
      })
    }
  },
  created(){
    this.getInfo(),
    this.getPic()
  }
  
}
</script>
<style scoped>
.news-content {
  padding: 0 10px;
}

</style>
