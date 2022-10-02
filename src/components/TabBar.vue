<template>
  <div class="TabBar">
    <van-tabbar v-model="action">
      <van-tabbar-item icon="home-o" @click="clickHandel()">
        <button type="button">证件照</button>
      </van-tabbar-item>
      <van-tabbar-item @click="clickHandel('list')">
        <van-button icon="plus" type="primary" />
      </van-tabbar-item>
      <van-tabbar-item icon="search" @click="clickHandel('edit')">
        <button type="button">设置</button>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    select: String,
  },
  data() {
    return {
      action: Number(this.select),
    }
  },
  methods: {
    clickHandel(type) {
      // if (type == 'edit') {
      //   this.$router.push('/edit')
      // } else if (type == 'list') {
      //   this.$router.push('/list')
      // } else {
      //   this.$router.push('/home')
      // }
    },
  },
}
</script>

<style lang="less" scoped>
.TabBar {
  /deep/.van-tabbar {
    border-top: 1px solid #ccc;
    height: 49px;
    .van-tabbar-item {
      .van-tabbar-item__text {
        button {
          border: 0;
        }
        .van-button {
          border-radius: 50%;
          background-color: #3464e0;
        }
      }
    }
  }
}
</style>