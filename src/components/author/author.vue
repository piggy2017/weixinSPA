<template>
    <div class="author">
        authorauthorauthorauthor
        <p>获取到的cookie是:{{msg}}</p>
    </div>
</template>
<script>
    import VueCookies from 'Vue-cookies'
    export default {
        data(){
            return{
                msg:""
            }
        },
        created(){
            // 检测有没有登录
            if(!VueCookies.get("user")){
                let ua = window.navigator.userAgent.toLowerCase()
                if(ua.match(/MicroMessenger/i) == 'micromessenger'){ // 判断当前是否是微信内置浏览器
                    // 跳转到微信授权页面
                    window.location.href = this.webUrl + '/Wap/User/getOpenid' //后端请求微信授权登录接口的地址
                }
            }else{
                this.login()
            }
            this.init();
        },
        methods:{
            login(){

            },
            init(){
                this.msg=VueCookies.get("beforeLoginUrl");
            }
        }
    }
</script>
<style>

</style>
