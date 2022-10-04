<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-04 16:35:31
 * @FilePath: \my_girl\src\views\eleven\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="eleven">
    <img
      src="../../assets/image/text3.png"
      alt=""
      srcset=""
      style="
        width: 280px;
        position: absolute;
        top: 45px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/ping.png"
      alt=""
      srcset=""
      style="
        width: 360px;
        position: absolute;
        top: 260px;
        left: 0px;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />

    <img
      src="../../assets/image/cake2.png"
      alt=""
      srcset=""
      style="
        width: 360px;
        position: absolute;
        left: 0px;
        right: 0;
        bottom: 100px;
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
      to="/ten"
      >LAST</van-button
    >
    <!-- <van-button
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
      to="/twelve"
      >彩蛋</van-button
    > -->
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
.eleven {
}
</style>