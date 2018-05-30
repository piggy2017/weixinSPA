<template>
    <div class="center">
        <div class="center-head">
            <div class="center-head-info">
                <div class="center-head-img">
                    <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTImq2VuPnn1El0LUV5DCT0wFgyAwQBkRmGXIIf6WdiarttkIT4INNdZfeXcOGv1P5Lmkr8lIoQmVMQ/132" alt="">
                </div>
                <div class="center-head-name">{{username}}</div>
            </div>
            <div class="center-head-bot">
                我的收入：￥{{myMoney}}
            </div>
        </div>
        <div class="center-tab">
            <div class="center-tab-item" :class="{itemActive:isActive}" @click="chooseTab">我的收藏</div>
            <div class="center-tab-item" :class="{itemActive:isActive2}" @click="chooseActivity">我的活动</div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                username:"爱看书爱跑步的阴暗少年",
                myMoney:888888,
                isActive:true,
                isActive2:false
            }
        },
        methods:{
            chooseTab(){
                this.isActive=true;
                this.isActive2=false;
            },
            chooseActivity(){
                this.isActive=false;
                this.isActive2=true;
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../assets/stylus/variable.styl"
    .center-head
        height 7rem
        position relative
        width $width-100
        background-image url("../assets/bg-img.jpg")
        background-repeat no-repeat
        background-size cover
        .center-head-info
            position absolute
            top 2rem
            display flex
            flex-flow row nowrap
            align-items center
            width 90%
            left 5%
            .center-head-img
                width 2.5rem
                height 2.5rem
                border-radius 50%
                overflow hidden
                border 1px solid $color-f2
                img
                    width $width-100
                    height $height-100
            .center-head-name
                color $color-fff
                margin-left 0.5rem
                font-size 0.7rem


        .center-head-bot
            position absolute
            bottom 0
            left 0
            right 0
            background-color rgba(1, 0, 0, 0.3)
            height 2.1rem
            line-height 2.1rem
            color $color-fff
            font-size $font-size-62
            padding-left 5%

    .center-tab
        width $width-100
        height 2.3rem
        border-bottom 1px solid #dcdcdc
        display flex
        flex-flow row nowrap
        .center-tab-item
            position relative
            justify-content center
            flex 1
            display flex
            align-items center
            font-size 0.7rem
            color $color-333
        .itemActive
            color #105098
            &:after
                content ''
                position absolute
                bottom 0
                right 30%
                left 30%
                height 3px
                background-color #105098

</style>
