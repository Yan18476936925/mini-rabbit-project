<template>
  <view>
    <view>{{text}}</view>
    <view>{{this.$store.state.text}}</view>
    <button @click="handleTap">修改</button>
  </view>
</template>

<script>
export default {
  computed: {
    text(){
      return this.$store.state.text
    }
  },
  onLoad() {
    console.log("----->18", this.$store.state.text);
  },
  methods: {
    handleTap() {
      console.log("----->21", Date.now());
      this.$store.commit('setText',Date.now())
      // 微信小程序中 本地存储
      // 支持任意的数据类型  不需要想网页本地存储一样都需要转成字符串
      // 存数据
      uni.setStorageSync("abcd", 1234);
      uni.setStorageSync("abcd1", "aaaa");
      uni.setStorageSync("abcd2", true);
      uni.setStorageSync("abcd3", [123, 4, 4]);
      uni.setStorageSync("abcd4", { a: 1, b: 2 });
      // 取数据-不可以持久化-需要安装插件
      console.log(uni.getStorageSync("abcd"));
      console.log(uni.getStorageSync("abcd1"));
      console.log(uni.getStorageSync("abcd2"));
      console.log(uni.getStorageSync("abcd3"));
      console.log(uni.getStorageSync("abcd4"));
    },
  },
};
</script>

<style scoped>
</style>
