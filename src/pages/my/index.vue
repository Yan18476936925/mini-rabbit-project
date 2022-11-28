<template>
  <scroll-view enhanced scroll-y id="scrollView">
    <view class="viewport" :style="{ paddingTop: safeArea.top + 'px' }">
      <!-- 顶部背景 -->
      <view class="navbar" :style="{ paddingTop: 0 + 'px' }">
        <view class="title">我的</view>
      </view>
      <!-- 个人资料 -->
      <!-- 订单 -->
      <!-- 部件 -->
      <!-- 商品列表 -->
    </view>
  </scroll-view>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['safeArea'])
  }
};
</script>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f8;
}
#scrollView {
  height: 100%;
  overflow: hidden;
}
.viewport {
}
.navbar {
  width: 750rpx;
  height: 380rpx;
  background-image: url(http://static.botue.com/erabbit/static/images/center_bg.png);
  background-size: contain;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  .title {
    height: 64rpx;
    line-height: 64rpx;
    text-align: center;
    color: #fff;
    font-size: 32rpx;
    opacity: 0;
    font-weight: bold;
  }
}
.profile {
  position: relative;
  z-index: 99;
  .overview {
    display: flex;
    width: 500rpx;
    height: 120rpx;
    padding: 0 36rpx;
    color: #fff;
    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
    }
    .meta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      line-height: 30rpx;
      padding: 16rpx 0;
      margin-left: 20rpx;
    }
  }
  .meta {
    .nickname {
      max-width: 180rpx;
      margin-bottom: 16rpx;
      font-size: 30rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .extra {
      display: flex;
      font-size: 20rpx;
    }
    .tips {
      font-size: 22rpx;
    }
  }
  .settings {
    position: absolute;
    top: 50%;
    right: 80rpx;
    line-height: 1;
    font-size: 30rpx;
    color: #fff;
    transform: translateY(-50%);
  }
}
.profile .meta .update,
.profile .meta .relogin {
  padding: 3rpx 10rpx 1rpx;
  color: rgba(255, 255, 255, 0.8);
  border: 1rpx solid rgba(255, 255, 255, 0.8);
  margin-right: 10rpx;
  border-radius: 30rpx;
}
.orders {
  position: sticky;
  top: 140rpx;
  z-index: 99;
  padding: 30rpx;
  margin: 50rpx 20rpx 0;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  .title {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 28rpx;
    color: #1e1e1e;
    navigator {
      font-size: 24rpx;
      color: #939393;
      float: right;
    }
  }
  .section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40rpx 20rpx 10rpx;
    navigator {
      text-align: center;
      font-size: 24rpx;
      color: #333;
      &::before {
        display: block;
        font-size: 60rpx;
        color: #ff9545;
      }
    }
  }
}
/* 小部件 */
.widgets {
  padding: 20rpx 20rpx 0;
  background-color: #f7f7f8;
  position: relative;
  z-index: 1;
  .tabs {
    display: flex;
    justify-content: space-around;
    height: 80rpx;
    line-height: 80rpx;
    text {
      font-size: 28rpx;
      color: #333;
      position: relative;
    }
    .active {
      &::after {
        position: absolute;
        left: 50%;
        bottom: 12rpx;
        width: 60rpx;
        height: 4rpx;
        background-color: #27ba9b;
        content: "";
        transform: translate(-50%);
      }
    }
  }
}
</style>
