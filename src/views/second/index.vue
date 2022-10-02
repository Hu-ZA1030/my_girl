<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 13:06:22
 * @FilePath: \my-girl\src\views\second\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="second">
    <img
      src="../../assets/image/three.png"
      alt=""
      srcset=""
      style="width: 60px; position: absolute; top: 60px; left: 25px"
    />
    <img
      src="../../assets/image/girl.png"
      alt=""
      srcset=""
      style="width: 130px; position: absolute; top: 20px; right: 20px"
    />
    <img
      src="../../assets/image/ok.png"
      alt=""
      srcset=""
      style="width: 300px; position: absolute; top: 160px; left: 25px"
    />
    <img
      src="../../assets/image/box.png"
      alt=""
      srcset=""
      style="width: 110px; position: absolute; top: 300px; left: 25px"
    />
    <img
      src="../../assets/image/this.png"
      alt=""
      srcset=""
      style="width: 100px; position: absolute; top: 205px; right: 25px"
    />
    <img
      src="../../assets/image/boy.png"
      alt=""
      srcset=""
      style="width: 130px; position: absolute; bottom: 80px; left: 25px"
    />
    <img
      src="../../assets/image/special.png"
      alt=""
      srcset=""
      style="width: 300px; position: absolute; bottom: 220px; left: 0px"
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
      to="/first"
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
      to="/three"
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
.second {
}
</style>