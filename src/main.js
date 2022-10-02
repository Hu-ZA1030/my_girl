/*
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-26 23:32:56
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 02:15:21
 * @FilePath: \my-girl\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import VConsole from 'vconsole'
import Vant from 'vant';
import 'vant/lib/index.css';
import '../src/assets/css/common.less'

Vue.config.productionTip = false

// 1.全局引用
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'

// Vue.use(VideoPlayer)

// 引入Vant
Vue.use(Vant);

// 是否开启VC调试
// if (config.isOpenVC) {
//     var vConsole = new VConsole()
// }

export let vueInstance = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')