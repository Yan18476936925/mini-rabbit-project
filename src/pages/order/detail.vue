<template>
  <view class="order-detail">
    <!-- 顶部导航栏 -->
    <!-- 顶部导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeArea.top + 'px' }">
      <view class="wrap">
        <navigator open-type="navigateBack" class="back icon-left"></navigator>
        <view :class="['title', platform]">订单详情</view>
      </view>
    </view>
    <!-- 内容 -->
    <scroll-view class="viewport" scroll-y>
      <!-- 订单状态 -->

      <!-- 商品信息 -->

      <!-- 订单信息 -->
    </scroll-view>

    <!-- 底部工具 -->
  </view>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["safeArea", "platform"]),
  },
  onLoad({ id }) {
    console.log("----->id", id);
  },
};
</script>
<style lang="scss">
.order-detail {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.navbar {
  width: 750rpx;
  color: #fff;
  background-image: url(https://static.botue.com/erabbit/static/images/order_bg.png);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  .title {
    height: 40px;
    line-height: 30px;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    opacity: 0;
  }
  .android {
    text-align: left;
    padding-left: 42px;
  }
  .wrap {
    position: relative;
  }
  .back {
    position: absolute;
    left: 10px;
    top: 4px;
    line-height: 1;
    font-size: 23px;
    z-index: 9;
  }
}
.viewport {
  background-color: #f7f7f8;
}
.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  padding-bottom: 30rpx;
  color: #fff;
  background-image: url(https://static.botue.com/erabbit/static/images/order_bg.png);
  background-size: cover;
  .status {
    font-size: 36rpx;
    &::before {
      margin-right: 6rpx;
      font-weight: 500;
    }
  }
  .tips {
    margin-top: 30rpx;
    font-size: 24rpx;
    width: 100%;
    text-align: center;
    .countdown {
      margin-left: 10rpx;
    }
  }
  .button {
    width: 260rpx;
    height: 64rpx;
    text-align: center;
    line-height: 64rpx;
    margin-top: 30rpx;
    font-size: 28rpx;
    color: #27ba9b;
    border-radius: 68rpx;
    background-color: #fff;
  }
}
.shipment {
  line-height: 1.4;
  padding: 0 20rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;
  .locate {
    background-image: url(https://static.botue.com/erabbit/static/images/locate.png);
    .user {
      font-size: 26rpx;
      color: #444;
    }
    .address {
      font-size: 24rpx;
      color: #666;
    }
  }
  .logistics {
    background-image: url(https://static.botue.com/erabbit/static/images/car.png);
    border-bottom: 1rpx solid #eee;
    position: relative;
    &::after {
      position: absolute;
      right: 10rpx;
      top: 50%;
      transform: translateY(-50%);
      content: "\e6c2";
      font-family: "erabbit" !important;
      font-size: 32rpx;
      color: #666;
    }
    .message {
      font-size: 26rpx;
      color: #444;
    }
    .date {
      font-size: 24rpx;
      color: #666;
    }
  }
}
.shipment .locate,
.shipment .logistics {
  min-height: 120rpx;
  padding: 30rpx 30rpx 25rpx 75rpx;
  background-size: 50rpx;
  background-repeat: no-repeat;
  background-position: 6rpx center;
}
.goods {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
  .item {
    padding: 30rpx 0;
    border-bottom: 1rpx solid #eee;
    navigator {
      display: flex;
    }
    .cover {
      width: 170rpx;
      height: 170rpx;
      border-radius: 10rpx;
      margin-right: 20rpx;
    }
    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }
    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 6rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }
    .price {
      display: flex;
      margin-top: 6rpx;
      font-size: 24rpx;
    }
    .symbol {
      font-size: 20rpx;
    }
    .original {
      color: #999;
      text-decoration: line-through;
    }
    .actual {
      margin-left: 10rpx;
      color: #444;
    }
    .text {
      font-size: 22rpx;
    }
    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 24rpx;
      color: #444;
    }
    .action {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      padding: 30rpx 0 0;
    }
  }
  .action {
    .button {
      width: 200rpx;
      height: 60rpx;
      text-align: center;
      justify-content: center;
      line-height: 60rpx;
      margin-left: 20rpx;
      border-radius: 60rpx;
      border: 1rpx solid #ccc;
      font-size: 26rpx;
      color: #444;
    }
    .primary {
      color: #27ba9b;
      border-color: #27ba9b;
    }
  }
  .total {
    line-height: 1;
    font-size: 26rpx;
    padding: 20rpx 0;
    color: #666;
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10rpx 0;
    }
    .symbol {
      &::before {
        content: "¥";
        font-size: 20rpx;
      }
    }
    .paid {
      font-size: 30rpx;
      color: #444;
    }
    .primary {
      color: #cf4444;
    }
  }
}
.detail {
  line-height: 1;
  padding: 30rpx 20rpx 0;
  margin: 20rpx 20rpx 0;
  font-size: 26rpx;
  color: #666;
  border-radius: 10rpx;
  background-color: #fff;
  .title {
    font-size: 30rpx;
    color: #444;
  }
  .row {
    padding: 20rpx 0;
    & > view {
      display: block;
      padding: 10rpx 0;
    }
  }
}
.toobar {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding: 30rpx 20rpx;
  background-color: #fff;
  box-shadow: 0 -4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;
  & > view {
    width: 200rpx;
    height: 72rpx;
    text-align: center;
    line-height: 72rpx;
    margin-left: 15rpx;
    font-size: 26rpx;
    border-radius: 72rpx;
  }
  .default {
    color: #444;
    border: 1rpx solid #ccc;
  }
  .primary {
    color: #fff;
    background-color: #27ba9b;
  }
}
.popup-root {
  padding: 30rpx 30rpx 0;
  border-radius: 10rpx 10rpx 0 0;
  overflow: hidden;
  .title {
    font-size: 30rpx;
    text-align: center;
    margin-bottom: 30rpx;
  }
  .description {
    font-size: 28rpx;
    padding: 0 20rpx;
    .tips {
      color: #444;
      margin-bottom: 12rpx;
    }
    .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1;
      padding: 15rpx 0;
      margin-bottom: 4rpx;
      color: #666;
    }
    .icon-ring {
      font-size: 38rpx;
      color: #999;
    }
    .icon-checked {
      font-size: 38rpx;
      color: #27ba9b;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 30rpx 0 40rpx;
    font-size: 28rpx;
    color: #444;
    .button {
      flex: 1;
      height: 72rpx;
      text-align: center;
      line-height: 72rpx;
      margin: 0 20rpx;
      color: #444;
      border-radius: 72rpx;
      border: 1rpx solid #ccc;
    }
    .primary {
      color: #fff;
      background-color: #27ba9b;
      border: none;
    }
  }
}
</style>