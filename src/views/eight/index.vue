<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 13:58:06
 * @FilePath: \my-girl\src\views\eight\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="eight">
    <img
      src="../../assets/image/tan.png"
      alt=""
      srcset=""
      style="
        width: 220px;
        position: absolute;
        top: 25px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/nian.png"
      alt=""
      srcset=""
      style="
        width: 300px;
        position: absolute;
        top: 140px;
        left: -40px;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/quan.png"
      alt=""
      srcset=""
      style="
        width: 420px;
        position: absolute;
        top: 190px;
        left: 23px;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/mu.png"
      alt=""
      srcset=""
      style="
        width: 340px;
        position: absolute;
        top: 230px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/zhuang.png"
      alt=""
      srcset=""
      style="
        width: 340px;
        position: absolute;
        top: 280px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/tu1.png"
      alt=""
      srcset=""
      style="
        width: 330px;
        position: absolute;
        top: 330px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />

    <van-button
      class="goNext"
      style="
        position: absolute;
        bottom: 50px;
        left: 25px;
        background: transparent;
        font-size: 22px;
        color: #e8e8e8cc;
      "
      plain
      hairline
      type="primary"
      to="/seven"
      >LAST</van-button
    >
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
      to="/nine"
      >NEXT</van-button
    >
  </div>
</template>
<script>
export default {
  name: '',
  components: {
    //使用组件
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
.three {
}
</style>