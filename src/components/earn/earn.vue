<template>
    <div class="earn">
        <div class="earn-rules">
            <p class="earn-rules-title">赚钱规则</p>
            <p class="rule-item">1.分享下面内容到微信</p>
            <p class="rule-item">2.其他人打开阅读，成为您的好友</p>
            <p class="rule-item">3.好友购房成交，您获得收益（最少200元）</p>
        </div>
        <div class="earn-list">
            <div class="earn-item" v-for="item in earnList" :key="item.id">
                <router-link :to="'/projectDetail/'+item.id" tag="div">
                    <img :src="item.cover" alt="">
                    <p class="earn-list-name">{{item.name}}</p>
                    <p class="earn-list-area">{{item.areaName}}</p>
                </router-link>
            </div>
            <!--<pro-list :projectList="earnList"></pro-list>-->
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import {getPromise} from '@/assets/js/promise.js'
    export default {
        data(){
            return{
                earnList:[]
            }
        },
        created(){
            let _self=this;
            getPromise(data.baseUrl+'projects').then(res=>{
                console.log(res);
                _self.earnList=res.data.api_data
            },error=>{
                console.log(error)
            })
        }
    }
</script>
<style>
    .earn{
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
    }
.earn-rules{
    padding-top:1rem;
    padding-bottom:1rem;
    margin-bottom:0.6rem;
    border-bottom:1px solid #e6e6e6;
    background-color:#fff;
    text-align:left;
}
    .earn-rules-title{
        width: 95%;
        margin: auto;
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
    }
    .rule-item{
        width: 90%;
        margin: auto;
        font-size: 0.55rem;
        line-height: 1.2rem;
    }
    .earn-list{
        width: 95%;
        margin-left:2.5%;
    }
    .earn-item{
        width: 100%;
        margin-top: 0.75rem;
        background-color: #fff;
    }
    .earn-item img{
        width: 100%;
        height: 7.5rem;
    }
    .earn-list-name{
        margin-top: 0.2rem;
        padding-left: 0.5rem;
        font-size: 0.67rem;
    }
    .earn-list-area{
        margin-top: 0.3rem;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.6rem;
        padding-bottom: 0.5rem;
    }
</style>
