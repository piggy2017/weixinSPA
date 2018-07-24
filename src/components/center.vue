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
        <div class="swt-box">
            <button class="my-btn" @click="alt">弹框</button>11
        </div>
        <div>
            <router-link to="/upload">
                formdata 上传图片预览
            </router-link>
        </div>
        <div class="next-trick">
            <div ref="msgDiv">{{msg}}</div>
            <div>Message got outside $nextTick: {{msg1}}</div>
            <div>Message got inside $nextTick: {{msg2}}</div>
            <div>Message got outside $nextTick: {{msg3}}</div>
            <button @click="changeMsg">
                Change the Message
            </button>
        </div>
        <div class="player">
            <video-player  class="video-player vjs-custom-skin"
                           ref="videoPlayer"
                           :playsinline="false"
                           :options="playerOptions"
                           @play="onPlayerPlay($event)"
                           @pause="onPlayerPause($event)"
            >
            </video-player>
        </div>
        <div class="my-vi" style="margin-top: 20px;margin-bottom: 60px;">
            <video width="100%"  controls="controls">
                <source src="http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L" type="video/ogg">
                <source src="http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div>
            <router-link to="/pdf">pdf文件</router-link>
        </div>
        <div>
            <router-link to="/cropper">cropper剪裁图片</router-link>
        </div>
        <div>
            <a href="https://www.baidu.com/">to demo page</a>
        </div>
        <div style="margin-top: 1rem;margin-bottom: 3rem;">
            <router-link to="/parent">to params test</router-link>
        </div>
    </div>
</template>
<script>
    import swal from 'sweetalert'
    import { videoPlayer } from 'vue-video-player';

    export default {
//        components: {
//            videoPlayer
//        },
        data(){
            return{
                username:"爱看书爱跑步的阴暗少年",
                myMoney:888888,
                isActive:true,
                isActive2:false,
                msg: 'Hello Vue.',
                msg1: '',
                msg2: '',
                msg3: '',
                playerOptions: {
                    playbackRates: [1.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: true, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"//你的m3u8地址（必填）
                        //src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "../assets/bg-img.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                      timeDivider: false, // 是否显示剩余时间的分割线
                      durationDisplay: true,  //是否显示总时间
                      remainingTimeDisplay: false,  //是否显示剩余时间
                      fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        mounted() {
            console.log('this is current player instance object', this.player)
        },
        computed: {
                player() {
                return this.$refs.videoPlayer.player
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
            },
            onPlayerPlay(player) {
                console.log("play")
                console.log(player)

            },
            onPlayerPause(player){
                console.log("pause")
               console.log(player)
            },
            changeMsg(e) {
                console.log(e);
                this.msg = "Hello world."
                this.msg1 = this.$refs.msgDiv.innerHTML;
                this.$nextTick(() => {
                    this.msg2 = this.$refs.msgDiv.innerHTML;
                })
                this.msg3 = this.$refs.msgDiv.innerHTML;
            },
            alt(){
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                        } else {
                            swal("Your imaginary file is safe!");
                        }
                    });
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

    .swt-box
        width 100%
        height 2rem
        border-top 1px solid #eee
        .my-btn
            width 2rem
            height 30px
            background-color aqua
            border-radius 4px
            color #fff
            line-height 30px
            text-align center
            font-size 16px
    .next-trick
        width 100%
        height 5rem
        border 1px solid #eee
    .player .vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control{
        /*margin-left: 0.6rem;*/
    }
    .video-js .vjs-progress-control{
        display none
    }
    .vjs-volume-panel-horizontal{
        /*margin-left 0.6rem !important*/
    }
    .video-js .vjs-current-time, .vjs-no-flex .vjs-current-time{
        /*margin-left 0.6rem !important*/
    }
    .vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate{
        /*margin-left 0.6rem*/
    }



    .vjs-has-started .vjs-control-bar{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
</style>
