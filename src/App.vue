<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/css/app.css'
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
  #app {
    overflow-x: hidden;
    background: #e2cfb8;
  }
</style>
