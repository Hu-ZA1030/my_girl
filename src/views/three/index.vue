<!--
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-28 23:19:25
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 13:38:07
 * @FilePath: \my-girl\src\views\three\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
-->
<template>
  <div class="three">
    <img
      src="../../assets/image/huanguan.png"
      alt=""
      srcset=""
      style="width: 80px; position: absolute; top: 15px; left: 15px"
    />
    <img
      src="../../assets/image/qq.png"
      alt=""
      srcset=""
      style="width: 130px; position: absolute; top: 25px; right: 25px"
    />
    <img
      src="../../assets/image/time.png"
      alt=""
      srcset=""
      style="width: 330px; position: absolute; top: 85px; right: 35px"
    />
    <img
      src="../../assets/image/rili.png"
      alt=""
      srcset=""
      style="width: 130px; position: absolute; top: 180px; right: 35px"
    />
    <img
      src="../../assets/image/zai.png"
      alt=""
      srcset=""
      style="width: 120px; position: absolute; top: 180px; left: 15px"
    />
    <img
      src="../../assets/image/too.png"
      alt=""
      srcset=""
      style="width: 90px; position: absolute; top: 220px; left: 30px"
    />
    <img
      src="../../assets/image/pei.png"
      alt=""
      srcset=""
      style="width: 190px; position: absolute; top: 280px; left: 0px"
    />
    <img
      src="../../assets/image/first.png"
      alt=""
      srcset=""
      style="width: 340px; position: absolute; bottom: 240px; left: 5px"
    />
    <img
      src="../../assets/image/two-pep.png"
      alt=""
      srcset=""
      style="width: 200px; position: absolute; bottom: 90px; right: 0px"
    />

    <img
      src="../../assets/image/xingxi.png"
      alt=""
      srcset=""
      style="width: 80px; position: absolute; bottom: 140px; left: 35px"
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
      to="/second"
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
      to="/four"
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