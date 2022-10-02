<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 13:40:54
 * @FilePath: \my-girl\src\views\five\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="five">
    <img
      src="../../assets/image/zhi.png"
      alt=""
      srcset=""
      style="
        width: 260px;
        position: absolute;
        top: 5px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/jiu.png"
      alt=""
      srcset=""
      style="
        width: 360px;
        position: absolute;
        top: 180px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/ye.png"
      alt=""
      srcset=""
      style="width: 240px; position: absolute; bottom: 100px; left: 10px"
    />
    <img
      src="../../assets/image/mao.png"
      alt=""
      srcset=""
      style="width: 140px; position: absolute; bottom: 100px; right: 10px"
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
      to="/four"
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
      to="/six"
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