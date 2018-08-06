// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueCookies from 'vue-cookies'
import VideoPlayer from 'vue-video-player'
import store from  './vuex/store'
//import {mapState} from 'Vuex'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(require('vue-wechat-title'))

 fastclick.attach(document.body)
// const FastClick = require('@/assets/js/fastclick.js');
// FastClick.attach(document.body);
Vue.config.productionTip = false
Vue.use(VideoPlayer)

Vue.use(VueCookies)

router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    console.log(store);
    console.log(store.state.hasLogin)
    console.log(123123)

    // let token = window.localStorage.getItem("phone_token");
    // if(to.path == '/author'){ // && store.state.user.id
    //     // 用户使用后退返回到授权页，则默认回到首页
    //     next('/firstPage')
    //     return false
    // }

    // let token = VueCookies.get("user_token");
    // if (!token && to.path != "/author") {
    //     VueCookies.set("beforeLoginUrl", to.fullPath); // 保存用户进入的url
    //     next("/author");
    //     return false;
    // } else if (token) {
    //     //获取用户信息接口
    //
    // }

    // if(store.state.hasLogin===0 && to.path !== "/author"){
    //     console.log(11111111);
    //     VueCookies.set("beforeLoginUrl",to.fullPath);
    //     next("/author");
    //     return false;
    // } else if(store.state.hasLogin===1){
    //     console.log(222222222);
    //     //next();
    //     return false;
    // }



    // if(to.path != "/author" && store.state.hasLogin===1){
    //     console.log(to.fullPath);
    //     VueCookies.set("beforeLoginUrl",to.fullPath);
    //     next("/author");
    //     return false;
    // }
    //store,
    next();
})
//window.localStorage.setItem("beforeLoginUrl", to.fullPath); // 保存用户进入的url
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
