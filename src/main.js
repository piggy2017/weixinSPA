// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
