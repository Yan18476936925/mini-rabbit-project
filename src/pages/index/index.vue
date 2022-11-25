<template>
  <view> 
    <Navbar></Navbar>
    <!-- 广告区域 -->
    <Carousel :banners="banners" height="280rpx"></Carousel>
    <!-- 前台类目 -->
    <CateScroll :HomeCategoryHeadMutli="HomeCategoryHeadMutli"></CateScroll>
    <!-- 人气推荐 -->
    <view class="panel recommend">
      <view class="item" v-for="item in hotMutli" :key="item.id">
        <view class="title">
          {{ item.title }}<text>{{ item.alt }}</text>
        </view>
        <navigator hover-class="none" :url="`/pages/recommend/index?type=${item.type}`" class="cards" >
          <image mode="aspectFit" v-for="img in item.pictures" :key="img" :src="img" ></image>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script>
// 引入 自定义导航栏 组件
import Navbar from "./components/Navbar.vue";
// 引入 封装好发送请求的代码
import { getHomeBanner, getHomeCategoryHeadMutli,getHomeHotMutli } from "@/http/home";
export default {
  components:{
    Navbar,
  },
  data() {
    return {
      // 广告区域
      banners: [],
      // 前台类目
      HomeCategoryHeadMutli:[],
      // 前台类目
      hotMutli:[],
    };
  },
  async onLoad() {
    // 获取广告轮播图
    const result = await getHomeBanner();
    this.banners = result.result;
    // 获取前台类目
    const result2 = await getHomeCategoryHeadMutli();
    console.log('----->32', result2);
    this.HomeCategoryHeadMutli = result2.result
    // 获取人气推荐
    const result3 = await getHomeHotMutli();
    console.log('----->51', result3);
    this.hotMutli = result3.result
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: hidden;
  background-color: #f7f7f8;
}
/* 公共面板 */
.panel {
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;
    text {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }
  .more {
    position: absolute;
    right: 24rpx;
    font-size: 26rpx;
    color: #7f7f7f;
  }
  .cards {
    display: flex;
  }
  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
/* 推荐专区 */
.recommend {
  display: flex;
  flex-wrap: wrap;
  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
  }
  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    justify-content: space-between;
    image {
      width: 48%;
    }
  }
}

/* 新鲜好物 */
.fresh {
  min-height: 320rpx;
  .price {
    line-height: 1;
    text-align: left;
    font-size: 26rpx;
    color: #cf4444;
  }
  .small {
    font-size: 80%;
  }
}
.fresh .cards navigator,
.brands .cards navigator {
  width: 25%;
  padding: 15rpx 20rpx 20rpx;
  line-height: 1;
  text-align: center;
}
.fresh image,
.brands image {
  width: 126rpx;
  height: 126rpx;
}
.fresh .name,
.brands .name {
  margin: 20rpx 0 16rpx;
  font-size: 24rpx;
  color: #262626;
}
.brands {
  .price {
    font-size: 24rpx;
    color: #999;
  }
}
</style>