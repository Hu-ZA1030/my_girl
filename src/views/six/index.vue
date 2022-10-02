<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 13:45:43
 * @FilePath: \my-girl\src\views\six\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="five">
    <img
      src="../../assets/image/ru.png"
      alt=""
      srcset=""
      style="
        width: 320px;
        position: absolute;
        top: 5px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/shi.png"
      alt=""
      srcset=""
      style="
        width: 320px;
        position: absolute;
        top: 150px;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/kan.png"
      alt=""
      srcset=""
      style="
        width: 320px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        bottom: 160px;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/biu.png"
      alt=""
      srcset=""
      style="width: 180px; position: absolute; top: 280px; left: 0px"
    />
    <img
      src="../../assets/image/xin.png"
      alt=""
      srcset=""
      style="width: 160px; position: absolute; bottom: 70px; right: 0px"
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
      to="/five"
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
      to="/seven"
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