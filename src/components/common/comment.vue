<template>
  <div class="pages">
      <textarea name="" id="" cols="10" rows="3" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
      	<ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(v ,i) in commentList" :key="i">
                <a href="javascript:;">
                    <div class="mui-media-body">
                        <p class="comment-tilte">
                            <span>第{{i+1}}楼</span>
                            <span> 发表时间{{v.add_time| dateformate("YYYY-MM-DD HH:mm:ss")}}</span>
                            <span class="mui-pull-right"> {{v.user_name}}</span>
                        </p>
                    <img class="mui-media-object mui-pull-right" src="../../assets/images/menu6.png">
                        <p class='mui-ellipsis'>{{v.content}}</p>
                    </div>
                </a>
            </li> 
            <mt-button size="large" v-show="showBtn" type="danger" plain @click = "more">加载更多</mt-button>      
        </ul>
  </div>
</template>
<script>
import axios from "axios"
import dateformate from "../../filters/dateformat"
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            commentList:[],
            currentIndex:1,
            showBtn:true,
            content:""
        }
    },
    props:["id"],
    methods:{
        getData(){
            axios({
                url:'http://www.escook.cn:3000/api/getcomments/'+this.id+'?pageindex='+this.currentIndex
            }).then(res=>{
                if(res.data.status==0){
                    // console.log(res)
                    this.commentList = this.commentList.concat(res.data.message)
                    if(res.data.message.length==0){
                        this.showBtn = false
                        Toast("没有更多数据了")
                    }
                }
            })
        },
        more(){
            this.currentIndex++;
            this.getData()
        },
        addComment(){
            if(this.content.trim()){
                axios({
                url:'http://www.escook.cn:3000/api/postcomment/'+this.id,
                method:'post',
                data:"content="+this.content
                }).then(res=>{
                    if(res.data.status==0){
                        this.commentList.unshift({
                            add_time:new Date(),
                            content:this.content,
                            user_name:"匿名用户"
                        })
                        this.content=""
                    }
                })
            }
            
        }
    },
    created(){
        this.getData()
    },
    filters:{
        dateformate
    }
  
}
</script>
<style>
.comment-tilte {
    font-size: 14px
}
</style>


