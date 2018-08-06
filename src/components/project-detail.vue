<template>
    <div class="project-detail">
        <banner :images="proInfo.img"></banner>
        <div class="project-info">
            <div class="project-info-name">{{proInfo.name}}</div>
            <div class="project-info-address">
                <img src="https://tracenet.cn/wechat/images/lpxq/lpxq_05.png" alt="">
                <span>{{proInfo.areaName}}</span>
            </div>
            <div class="project-info-good">
                <span v-for="item in proInfo.lable">{{item}}</span>
            </div>
            <div class="project-info-about">
                <div class="project-info-about-tit">
                    <router-link tag="div" to="">
                        <div class="project-info-about-left">
                            <img src="../assets/iocn_home_01.png" alt="">
                            <span>项目详情</span>
                        </div>
                        <div class="project-info-about-right">
                            <img src="../assets/back-1.png" alt="">
                        </div>
                    </router-link>
                </div>
                <p class="project-info-about-text">{{proInfo.content}}</p>
            </div>
            <div class="project-info-group">
                <div :class="[select1===1? 'active':'']" @click="choose(1)">整套购买</div>
                <div :class="[select1===2? 'active':'']" @click="choose(2)">优惠组合</div>
                <div :class="[select1===3? 'active':'']" @click="choose(3)">单份权益</div>
            </div>
            <hotel-list v-show="select1===1" :hotelList="taoList"></hotel-list>
            <hotel-list v-show="select1===2" :hotelList="groupList"></hotel-list>
            <hotel-list v-show="select1===2" :hotelList="fenList"></hotel-list>
        </div>
        <div class="project-bot">
            <div class="project-bot-left">
                <img src="https://tracenet.cn/wechat/images/hxxq/hxxq_07.png" alt="">
                <p class="project-bot-left-text">转发</p>
            </div>
            <!--<div class="project-bot-right" @click="callPhone">-->
                <!--致电专属顾问-->
            <!--</div>-->
            <a class="project-bot-right" href="tel:18682721627">致电专属顾问</a>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import banner from '@/components/swipe/banner'
    import hotelList from '@/components/hotelList/hotel-list'
    export default {
        name:'project-detail',
        components:{
            banner:banner,
            hotelList:hotelList
        },
        data(){
            return{
                id:"",
                proInfo:{},
                taoList:[],
                groupList:[],
                fenList:[],
                select1:1,
            }
        },
        methods:{
            callPhone(){
                window.location.href = 'tel://18682721627'
            },
            init(){
                axios.get(data.baseUrl+'project/detail?projectId='+this.id).then(res=>{
                    console.log(res)
                    this.proInfo=res.data.api_data
                    console.log(this.proInfo.img);
                    for(let i in res.data.api_data.businessHResources){
                        if(res.data.api_data.businessHResources[i].type===0){
                            this.taoList.push(res.data.api_data.businessHResources[i])
                        }else if(res.data.api_data.businessHResources[i].type===1){
                            this.groupList.push(res.data.api_data.businessHResources[i])
                        }else if(res.data.api_data.businessHResources[i].type===2){
                            this.fenList.push(res.data.api_data.businessHResources[i])
                        }
                    }
                })
            },
            choose(type){
                this.select1=type;
            }
        },
        created:function(){
            console.log(this.$route);
            this.id=this.$route.params.id;
            this.init();
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../assets/stylus/variable.styl"
    .project-info
        width 95%
        margin 0.5rem 0 0.5rem 2.5%
        padding-bottom 3rem
        .project-info-name
            font-size 1rem
            color $color-4d
            font-weight 400
        .project-info-address
            display flex
            flex-flow row nowrap
            align-items flex-start
            margin-top  0.5rem
            img
                width 0.75rem
                height 0.85rem
            span
                font-size 0.72rem
                color $color-4d
                margin-left 0.5rem
        .project-info-good
            margin-top 0.4rem
            padding-bottom 0.75rem
            border-bottom solid 1px #e6e6e6
            span
                color $color-fff
                margin-bottom 0.25rem
                border-radius 0.5rem
                margin-right 0.4rem
                font-size 0.6rem
                padding-bottom 0.1rem
                padding-top 0.1rem
                padding-left 0.45rem
                padding-right 0.45rem
                width auto
                border-bottom 0
                &:nth-child(n+1)
                    background-color #004e2d
                &:nth-child(n+2)
                    background-color #0056fd
                &:nth-child(n+3)
                    background-color #0098ce
        .project-info-about
            .project-info-about-tit
                padding 0.5rem 0
                .project-info-about-left
                    display inline-block
                    width 45%
                    vertical-align top
                    color $color-4d
                    img
                        width 1.1rem
                        height 1.1rem
                        vertical-align top
                    span
                        font-size 0.77rem
                        color $color-4d
                .project-info-about-right
                    display inline-block
                    float right
                    img
                        width 0.5rem
                        height 1rem
                        margin-right 0.5rem
            .project-info-about-text
                font-size 0.63rem
                color $color-666
                font-weight 300
                margin-bottom 0.4rem
                line-height 1rem
        .project-info-group
            display flex
            border 1px solid $color-f2
            flex-flow row nowrap
            div
                flex 1
                text-align center
                font-size 0.62rem
                padding 0.3rem 0
                color $color-999
            .active
                color #105098 !important
    .project-bot
        position fixed
        width $width-100
        bottom 0
        left 0
        right 0
        height 2.6rem
        border-top 1px solid #e6e6e6
        background-color $bg-color-fff
        display flex
        flex-flow row nowrap
        .project-bot-left
            text-align center
            width 25%
            display flex
            flex-direction column
            color $color-999
            font-size 0.67rem
            img
                width 1.2rem
                height 1.1rem
                margin 0 auto
                display inline-block
                margin-top 0.3rem
            .project-bot-left-text
                margin-top 0.2rem
        .project-bot-right
            width 75%
            height $height-100
            background-color #c32c24
            color $color-fff
            text-align center
            line-height 2.6rem
</style>
