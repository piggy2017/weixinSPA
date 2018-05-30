<template>
    <div class="dongtai">
        <!--<div class="dy-list" v-for="item in dongList" :key="item.id">-->
            <!--<router-link tag="div" to="/center">-->
                <!--<img :src="item.cover" alt="">-->
                <!--<p class="dy-list-name">{{item.name}}</p>-->
                <!--<p class="dy-list-area">{{item.areaName}}</p>-->
            <!--</router-link>-->
        <!--</div>-->
        <pro-list :projectList="projectList"></pro-list>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import proList from '@/components/proList/proList'
    export default {
        name:'dongtai',
        components:{
            proList:proList
        },
        data(){
            return{
                projectList:[]
            }
        },
        methods:{
            init(){
                axios.get(data.baseUrl+"activity/more").then(res=>{
                    console.log(res);
                    this.projectList=res.data.api_data
                })
            }
        },
        created(){
            this.init()
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../assets/stylus/variable.styl"
    .dongtai
        padding-bottom  2.6rem
        .dy-list
            width 95%
            margin 0 auto
            img
            width $width-100
            height 7.5rem
            .dy-list-name
                margin-top 0.2rem
                padding-left 0.5rem
                font-size 0.67rem
            .dy-list-area
                margin-top 0.3rem
                padding-left 0.5rem
                margin-bottom 0.5rem
                font-size 0.6rem

</style>
