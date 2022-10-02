<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 14:46:17
 * @FilePath: \my-girl\src\views\ten\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="ten">
    <img
      src="../../assets/image/two-pep6.png"
      alt=""
      srcset=""
      style="
        width: 140px;
        position: absolute;
        top: 5px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/text2.png"
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
      src="../../assets/image/two-pep5.png"
      alt=""
      srcset=""
      style="
        width: 300px;
        position: absolute;
        left: 0px;
        right: 0;
        bottom: 40px;
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
      to="/nine"
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
      to="/eleven"
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
.ten {
}
</style>