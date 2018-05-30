<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList">
                <router-link :to="'/projectDetail/'+item.id">
                    <img :src="item.cover" alt="">
                    <p class="item-name">{{item.name}}</p>
                    <p class="item-area">{{item.areaName}}</p>
                </router-link>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props:['bannerList'],
        data(){
            return{

            }
        },
        methods:{

        },
        mounted(){
            setTimeout(()=>{
                var swiper = new Swiper('.swiper-container', {
                    autoplay: false,
                    slidesPerView :2,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    spaceBetween : '5%'
                });
            },300)
        }
    }
</script>
<style>
.swiper-container,.swiper-wrapper{
    height: 100%;
    width: 100%;
    position: relative;
}
    .swiper-slide{
        /*width: 7.1rem;*/
        height: 100%;
    }
    .swiper-slide:not(:last-child){
        /*margin-right:0.6rem ;*/
    }
.swiper-slide img{
    width: 100%;
    height: 10rem;
}
    .item-name{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: 0.65rem;
        line-height: 1.2rem;
    }
    .item-area{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: 0.55rem;
        line-height: 1rem;
    }
</style>
