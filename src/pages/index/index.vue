<template>
  <view> 
    <Navbar></Navbar>
    <!-- 广告区域 -->
    <Carousel :banners="banners" height="280rpx"></Carousel>
  </view>
</template>

<script>
// 引入 自定义导航栏 组件
import Navbar from "./components/Navbar.vue";
import http from "@/utils/http";
export default {
  components:{
    Navbar
  },
  data() {
    return {
      // 首页-广告区域
      banners: [],
    };
  },
  async onLoad() {
    const result = await http({ url: "/home/banner" });
    console.log(result);
    this.banners = result.result;
  },
};
</script>

<style scoped>
  
</style>
