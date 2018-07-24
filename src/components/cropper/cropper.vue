<template>
    <div class="cropper-aa">
        <p>cropper</p>
        <vue-cropper class="my-cropper-box"
            ref="cropper"
            :img="option.img"
            :outputSize="option.outputSize"
            :outputType="option.outputType"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :canScale="option.canScale"
            :fixedBox="option.fixedBox"
        ></vue-cropper>
        <div>
            <label class="btn" for="uploads">upload</label>
            <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/jpg" @change="uploadImg($event, 1)">
            <div>
                <button @click="finish('blob')">blob finish image</button>
                <button @click="finish('base64')">base64 finish image</button>
                <a @click="down('base64')" class="btn">download(base64)</a>
                <a @click="down('blob')" class="btn">download(blob)</a>
            </div>
            <div class="choose">
                <img :src="myChoose" alt="error">
            </div>
        </div>
        <div style="margin-top: 10px;">
            <button @click="updateImgae">submit</button>
        </div>
    </div>
</template>
<script>
    import VueCropper from 'vue-cropper'
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    export default {
        components:{
            VueCropper
        },
        data(){
            return{
                option:{
                    img:'../../../static/sea.jpg',
                    outputSize:1,//裁剪生成图片的质量	0-1
                    outputType:'jpeg || png',//[jpeg || png]
                    autoCrop:true, //是否默认生成截图框
                    fixed: true,  // 开启宽度和高度比例
                    fixedNumber:[1,1],
                    autoCropWidth: 200,
                    autoCropHeight: 200,
                    canScale:true,//图片是否允许滚轮缩放	true
                    fixedBox:true  // 固定截图框大小 不允许改变
                },
                myChoose:'../../../static/phote.png',
                downImg: '#',
                file:{}
            }
        },
        methods:{
            updateImgae(){
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
            },
            down (type) {
                // event.preventDefault()
                var aLink = document.createElement('a')
                aLink.download = 'image'
                // 输出
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        console.log(data);
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        console.log(data);
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                }
            },
            finish (type) {
                // 输出
                //var test = window.open('about:blank')
                //test.document.body.innerHTML = '图片生成中..'
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        console.log(data);
                        this.myChoose= window.URL.createObjectURL(data);
                        //var test = window.open('')
                        //test.location.href = window.URL.createObjectURL(data)
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        console.log(data);
                        this.myChoose=data
                        //test.location.href = data
                    })
                }
            },
            uploadImg (e, num) {
                console.log(e)
                //上传图片
                // this.option.img
                var file = e.target.files[0]
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                    return false
                }
                var reader = new FileReader()
                reader.onload = (e) => {
                    console.log(e);
                    let data
                    if (typeof e.target.result === 'object') {
                        console.log(123);
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]));
                        console.log(data);
                    } else {
                        data = e.target.result;
                        console.log(data)
                    }
                    if (num === 1) {
                        this.option.img = data
                    } else if (num === 2) {
                        this.example2.img = data
                    }
                }
                // 转化为base64
                //reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file)
            }
        }
    }
</script>
<style>
.my-cropper-box{
    height: 300px !important;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
