<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in images">
                    <img :src="str" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name:'banner',
        props:['images'],
        mounted() {
            setTimeout(()=>{
                var swiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    paginationClickable: true,
                    loop: true,
                    speed: 400,
                    autoplay: true,
                    onTouchEnd: function() {
                        swiper.startAutoplay()
                    }
                },300)
                });
        }
    }
</script>
<style>
.banner{
    height: 9rem;
}
    .swiper-container{
        height: 9rem;
    }
    .swiper-slide{
        height: 100%;
    }
.swiper-slide img{
    height: 100%;
    width: 100%;
}
</style>
