<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 13:39:12
 * @FilePath: \my-girl\src\views\four\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="four">
    <img
      src="../../assets/image/hua.png"
      alt=""
      srcset=""
      style="
        width: 360px;
        position: absolute;
        top: 25px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/two-pep2.png"
      alt=""
      srcset=""
      style="
        width: 360px;
        position: absolute;
        top: 85px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
      "
    />
    <img
      src="../../assets/image/gong.png"
      alt=""
      srcset=""
      style="width: 200px; position: absolute; bottom: 280px; left: 40px"
    />
    <img
      src="../../assets/image/right.png"
      alt=""
      srcset=""
      style="width: 60px; position: absolute; bottom: 260px; right: 20px"
    />
    <img
      src="../../assets/image/xiao.png"
      alt=""
      srcset=""
      style="width: 200px; position: absolute; bottom: 170px; right: 100px"
    />
    <img
      src="../../assets/image/zhang.png"
      alt=""
      srcset=""
      style="width: 200px; position: absolute; bottom: 100px; right: 30px"
    />
    <img
      src="../../assets/image/left.png"
      alt=""
      srcset=""
      style="width: 80px; position: absolute; bottom: 90px; left: 10px"
    />
    <img
      src="../../assets/image/xing.png"
      alt=""
      srcset=""
      style="width: 35px; position: absolute; bottom: 180px; right: 30px"
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
      to="/three"
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
      to="/five"
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