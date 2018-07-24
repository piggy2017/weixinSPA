// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueCookies from 'vue-cookies'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(require('vue-wechat-title'))
//require('videojs-contrib-hls/dist/videojs-contrib-hls');
 fastclick.attach(document.body)
// const FastClick = require('@/assets/js/fastclick.js');
// FastClick.attach(document.body);
Vue.config.productionTip = false
Vue.use(VideoPlayer)

Vue.use(VueCookies)



//router.beforeEach((to,from,next)=>{
    //let token = window.localStorage.getItem("phone_token");
    // if(to.path == '/author'){ // && store.state.user.id
    //     // 用户使用后退返回到授权页，则默认回到首页
    //     next('/firstPage')
    //     return false
    // }

    //if(!token && to.path != "/author"){
        //console.log(to.fullPath);
        //VueCookies.set("beforeLoginUrl",to.fullPath);
        //next("/author");
        //return false;
    //}
    //next();
//})
//window.localStorage.setItem("beforeLoginUrl", to.fullPath); // 保存用户进入的url
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
