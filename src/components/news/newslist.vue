<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(v,i) in List" :key="i">
					<router-link :to="'/newslistDetail/' +v.id ">
						<img class="mui-media-object mui-pull-left" :src="v.img_url">
						<div class="mui-media-body mui-ellipsis">
							{{v.title}}
							<p class='mui-ellipsis'>{{v.zhaiyao}}</p>
						</div>
					</router-link>
				</li>
			

			</ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return {
      List:[],
    }
  },
  methods:{
    getData(){
      axios({
        url:'http://www.escook.cn:3000/api/getnewslist',
        methods:'get'
      }).then(res=>{
        if(res.data.status==0){
        // console.log(res)
        this.List = res.data.message
        // console.log(this.List)
        }
      
      })
    }

  },
  created(){
    this.getData()
  }
  
}
</script>
<style>

</style>
