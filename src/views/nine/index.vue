<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 14:37:33
 * @FilePath: \my-girl\src\views\nine\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="nine">
    <img
      src="../../assets/image/two-pep4.png"
      alt=""
      srcset=""
      style="
        width: 260px;
        position: absolute;
        top: 25px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/text.png"
      alt=""
      srcset=""
      style="
        width: 300px;
        position: absolute;
        top: 160px;
        left: 0px;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />

    <img
      src="../../assets/image/two-pep3.png"
      alt=""
      srcset=""
      style="
        width: 330px;
        position: absolute;
        top: 400px;
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
      to="/ten"
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