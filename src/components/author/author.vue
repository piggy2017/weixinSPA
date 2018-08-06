<template>
    <div class="author">
        authorauthorauthorauthor
        <p>获取到的cookie是:{{msg}}</p>
        <h3>hasCode:{{$store.state.hasCode}}</h3>
        <h3>hasLogin:{{hasLogin}}</h3>
        <div>
            <button @click="setLogin()">click me </button>
        </div>
    </div>
</template>
<script>
    import store from  '@/vuex/store'
    import {mapState} from 'vuex'; //通过mapState的对象来赋值

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
        computed:{
            ...mapState(["hasLogin"])
        },
        store,
        methods:{
            setLogin(){
                VueCookies.set("userName","sunlin");
            },
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
