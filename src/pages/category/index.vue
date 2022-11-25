<template>
  <view>
    category
  </view>
</template>

<script>
import http from "@/utils/http.js";
export default {
  async onLoad() {
    const result = await http({url:"/home/oneStop/mutli"});
    console.log('----->12', result);
  }
};
</script>

<style scoped>
  
</style>
