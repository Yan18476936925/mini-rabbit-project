<template>
  <view>
    recommend
  </view>
</template>

<script>
import { getHomeRecommend } from "@/http/home.js";
export default {
  async onLoad({type}) {
    // 存放页面标题 和 获取数据的url
    const urlMap = {
      1: { title: "特惠推荐", url: "/home/preference/mutli" },
      2: { title: "爆款推荐", url: "/home/inVogue/mutli" },
      3: { title: "一站买全", url: "/home/oneStop/mutli" },
      4: { title: "领券中心", url: "/home/new/mutli" }, // 后端未提供，暂用新鲜好物url
      5: { title: "新鲜好物", url: "/home/new/mutli" },
    };
    // 获取当前type对应的数据
    const currentInfo = urlMap[type];
    console.log('----->currentInfo',currentInfo);
    // 动态的设置 页面的标题
    uni.setNavigationBarTitle({title:currentInfo.title});
    // 发送请求获取对应的数据
    const result = await getHomeRecommend(currentInfo.url);
    console.log('----->26', result);
  }
};
</script>
<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: "";
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
}
.goods .symbol,
.goods .decimal {
  font-size: 70%;
}
</style>