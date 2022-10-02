<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-26 23:32:56
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 00:39:57
 * @FilePath: \my-girl\src\views\home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="first">
    <audio
      style="opacity: 0"
      id="cheerMusic"
      ref="music"
      preload="auto"
      loop="loop"
      :src="music"
    ></audio>
    <img
      class="musicIcon"
      src="../../assets/image/yue.png"
      alt=""
      srcset=""
      style="width: 32px; position: absolute; top: 30px; right: 25px"
    />
    <img
      src="../../assets/image/first-line.png"
      alt=""
      srcset=""
      style="width: 135px; position: absolute; top: 80px; left: 80px"
    />
    <img
      src="../../assets/image/second-line.png"
      alt=""
      srcset=""
      style="width: 120px; position: absolute; top: 180px; left: 190px"
    />
    <img
      src="../../assets/image/third-line.png"
      alt=""
      srcset=""
      style="width: 215px; position: absolute; top: 300px; left: 115px"
    />
    <img
      src="../../assets/image/fourth-line.png"
      alt=""
      srcset=""
      style="width: 155px; position: absolute; top: 400px; left: 135px"
    />
    <img
      src="../../assets/image/fifth-line.png"
      alt=""
      srcset=""
      style="width: 155px; position: absolute; top: 520px; left: 200px"
    />

    <img
      src="../../assets/image/tang.png"
      alt=""
      srcset=""
      style="width: 50px; position: absolute; top: 50px; right: 80px"
    />
    <img
      src="../../assets/image/blue.png"
      alt=""
      srcset=""
      style="width: 70px; position: absolute; top: 240px; left: 300px"
    />
    <img
      src="../../assets/image/xing.png"
      alt=""
      srcset=""
      style="width: 20px; position: absolute; top: 40px; right: 160px"
    />
    <img
      src="../../assets/image/tangguo.jpg"
      alt=""
      srcset=""
      style="width: 80px; position: absolute; top: 150px; left: 50px"
    />
    <img
      src="../../assets/image/xing3.png"
      alt=""
      srcset=""
      style="width: 30px; position: absolute; bottom: 180px; left: 80px"
    />
    <img
      src="../../assets/image/red.png"
      alt=""
      srcset=""
      style="width: 90px; position: absolute; bottom: 170px; left: 10px"
    />
    <img
      src="../../assets/image/cake.png"
      alt=""
      srcset=""
      style="width: 140px; position: absolute; bottom: 50px; left: 50px"
    />
    <van-button
      class="goNext"
      style="
        position: absolute;
        bottom: 50px;
        right: 25px;
        background: transparent;
        font-size: 22px;
        color: #e8e8e8cc;
      "
      plain
      hairline
      type="primary"
      to="/second"
      >NEXT</van-button
    >
  </div>
</template>

<script>
import audio from '../../components/audio/index.vue'

export default {
  name: 'Home',
  components: {
    audio
  },
  data() {
    return {
      music: require('../../assets/video/huang.mp3'),
      autoplay: true // 自动播放
    }
  },
  mounted() {
    this.audioAutoPlay('cheerMusic')
  },
  methods: {
    /*
     * @param: 参数
     * @return: 返回值
     * @desc: 监听是否在播放，若没有则触发播放
     */
    /* 自动播放音乐 */
    audioAutoPlay(id) {
      let music = document.getElementById(id)
      music.play()
      let play = function () {
        music.play()
        document.removeEventListener('touchstart', play, false)
      }
      music.play()
      document.addEventListener(
        'WeixinJSBridgeReady',
        function () {
          play()
        },
        false
      )
      document.addEventListener(
        'YixinJSBridgeReady',
        function () {
          play()
        },
        false
      )
      document.addEventListener('touchstart', play, false)
    },
    onBridgeReady() {
      console.log(" WeixinJSBridge.call('hideOptionMenu')")
      WeixinJSBridge.call('hideOptionMenu')
    },
    WeixinJSBridgeReady() {
      if (typeof WeixinJSBridge === 'undefined') {
        console.log('WeixinJSBridge ==== undefined')
        if (document.addEventListener) {
          document.addEventListener(
            'WeixinJSBridgeReady',
            this.onBridgeReady,
            false
          )
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady)
          document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady)
        }
      } else {
        this.onBridgeReady()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.first {
  height: 100%;
  width: 100%;
  background: #e2cfb8;
}
.musicIcon {
  animation: xz 3s linear infinite;
}
@keyframes xz {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
