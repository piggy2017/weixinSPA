<template>
    <div class="starClick">
        <div class="form-group clearfix">
            <p class="control-label">星星数量:{{starNum}}分</p>
            <div class="grade-box">
                <img v-for="(star,index) in stars" v-bind:src="star.src" v-on:click="rating(index)" alt="星星图片" />
            </div>
        </div>
    </div>
</template>
<script>
    let starOffImg = "../../../static/20180708174333883.png";
    let starOnImg = "../../../static/2018070817420611.png";
    export default {
        data(){
            return{
                stars: [{
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                },
                    {
                        src: starOffImg,
                        active: false
                    }, {
                        src: starOffImg,
                        active: false
                    }
                ],
                starNum: 0,
            }
        },
        methods:{
            rating: function(index) {
                var total = this.stars.length; //星星总数
                var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量
                if(this.starNum == 0) {
                    this.starNum = idx;
                    for(var i = 0; i < idx; i++) {
                        this.stars[i].src = starOnImg;
                        this.stars[i].active = true;
                    }
                } else {
                    //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                    if(idx == this.starNum) {
                        for(var i = index; i < total; i++) {
                            this.stars[i].src = starOffImg;
                            this.stars[i].active = false;
                        }
                    }
                    //如果小于当前最高星级，则直接保留当前星级
                    if(idx < this.starNum) {
                        for(var i = idx; i < this.starNum; i++) {
                            this.stars[i].src = starOffImg;
                            this.stars[i].active = false;
                        }
                    }
                    //如果大于当前星级，则直接选到该星级
                    if(idx > this.starNum) {
                        for(var i = 0; i < idx; i++) {
                            this.stars[i].src = starOnImg;
                            this.stars[i].active = true;
                        }
                    }

                    var count = 0; //计数器-统计当前有几颗星
                    for(var i = 0; i < total; i++) {
                        if(this.stars[i].active) {
                            count++;
                        }
                    }
                    this.starNum = count;
                }
            },
        }
    }
</script>
<style>

</style>
