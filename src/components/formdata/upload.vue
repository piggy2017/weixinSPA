<template>
    <div class="upload">
        <div class="choose-photo-add">

        </div>
        <div class="img-box">
            <img :src="imgSrc" alt="错误">
            <input type="file" @change="choose" class="multiple"/>
        </div>
        <div class="post-box">
            <button class="post-btn" @click="uploadPic">提交</button>
        </div>
        <div style="margin-top: 3rem;">
            <star :score="starNumber"></star>
        </div>
        <div style="margin-top: 3rem;">
            <star-click>

            </star-click>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import star from '@/components/star/star'
    import starClick from '@/components/star/starClick'
    export default {
        components:{
            star:star,
            starClick:starClick
        },
        data(){
            return{
                imgSrc:"../../../static/phote.png",
                file:{},
                starNumber:4.0
            }
        },
        methods:{
            choose:function(e){
                console.log(e)
                console.log(e.target.files[0]);
                this.file=e.target.files[0];
                let imgUrl= window.URL.createObjectURL(e.target.files[0]);
                console.log(imgUrl);
                this.imgSrc=imgUrl;
            },
            uploadPic(){
                console.log(this.file);
                let imgData=new FormData();
                imgData.append("img",this.file);
                imgData.append("name","sunlin");
                axios({
                    url:data.baseUrl+"upload",
                    method:'post',
                    data:imgData,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then((res)=>{console.log(res)})
            }
        }
    }
</script>
<style>
.img-box{
    width: 100%;
    height: 3.2rem;
    border: 1px solid #efefef;
    position: relative;
}
.img-box img{
    width: 3.2rem;
    height: 3.2rem;
}
    .multiple{
        width: 3.2rem;
        height: 3.2rem;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }

</style>
