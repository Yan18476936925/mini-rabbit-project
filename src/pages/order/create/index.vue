<template>
  <view class="order-create">
    <scroll-view scroll-y class="viewport">
      <!-- 收货地址 -->
      <navigator
        class="shipment"
        hover-class="none"
        url="/pages/my/address/index?from=order"
        v-if="selectedAddress"
      >
        <view class="user">
          {{ selectedAddress.receiver }} {{ selectedAddress.contact }}
        </view>
        <view class="address">
          {{ selectedAddress.fullLocation }}{{ selectedAddress.address }}
        </view>
        <text class="icon icon-right"></text>
      </navigator>

      <!-- 没有收货地址 -->
      <navigator
        class="shipment"
        hover-class="none"
        url="/pages/my/address/index?from=order"
        v-else
      >
        <view class="address"> 请选择收货地址 </view>
        <text class="icon icon-right"></text>
      </navigator>

      <!-- 商品信息 -->

      <!-- 配送及支付方式 -->

      <!-- 支付金额 -->
    </scroll-view>

    <!-- 底部工具 -->
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.safe-area-bottom {
  background-color: #fff;
}
.order-create {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #f4f4f4;
}

.viewport {
  padding-top: 20rpx;
}

.shipment {
  padding: 30rpx 30rpx 25rpx 84rpx;
  margin: 0 20rpx;
  font-size: 26rpx;
  border-radius: 10rpx;
  background: url(https://static.botue.com/erabbit/static/images/locate.png)
    20rpx center / 50rpx no-repeat #fff;
  position: relative;
}

.shipment .icon {
  font-size: 36rpx;
  color: #333;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 20rpx;
}

.shipment .user {
  color: #333;
  margin-bottom: 5rpx;
}

.shipment .address {
  color: #666;
}

.link {
  margin: 20rpx;
  text-align: center;
  line-height: 72rpx;
  font-size: 26rpx;
  color: #fff;
  border-radius: 72rpx;
  background-color: #27ba9b;
}

.popup-root {
  .list {
    padding: 20rpx 0 40rpx 10rpx !important;
  }

  .list .item {
    padding: 30rpx 60rpx 30rpx 10rpx;
    position: relative;
  }

  .list .item .icon {
    color: #999;
    font-size: 40rpx;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 10rpx;
  }

  .list .item .icon-checked {
    color: #27ba9b;
  }

  .list .item .text {
    font-size: 28rpx;
    color: #444;
  }
}

.goods {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
}

.goods .item {
  display: flex;
  padding: 30rpx 0;
  border-top: 1rpx solid #eee;
}

.goods .item:first-child {
  border-top: none;
}

.goods .item .cover {
  width: 170rpx;
  height: 170rpx;
  border-radius: 10rpx;
  margin-right: 20rpx;
}

.goods .item .meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.goods .item .name {
  height: 80rpx;
  font-size: 26rpx;
  color: #444;
}

.goods .item .type {
  line-height: 1.8;
  padding: 0 15rpx;
  margin-top: 6rpx;
  font-size: 24rpx;
  align-self: flex-start;
  border-radius: 4rpx;
  color: #888;
  background-color: #f7f7f8;
}

.goods .item .price {
  display: flex;
  align-items: baseline;
  margin-top: 6rpx;
  font-size: 28rpx;
}

.goods .item .symbol {
  font-size: 20rpx;
}

.goods .item .original {
  font-size: 24rpx;
  color: #999;
  text-decoration: line-through;
}

.goods .item .actual {
  margin-right: 10rpx;
  color: #cf4444;
}

.goods .item .quantity {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 26rpx;
  color: #444;
}

.related {
  padding: 0 20rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;
}

.related .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80rpx;
  font-size: 26rpx;
  color: #333;
}

.related input {
  flex: 1;
  text-align: right;
  margin: 20rpx 0;
  padding-right: 20rpx;
  font-size: 26rpx;
  color: #999;
}

.related .item .text {
  width: 125rpx;
}

.related .picker {
  color: #666;
}

.related .picker::after {
  content: "\e6c2";
}

/* 结算清单 */
.settlement {
  padding: 0 20rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;
}

.settlement .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80rpx;
  font-size: 26rpx;
  color: #333;
}

.settlement .symbol {
  font-size: 80%;
}

.settlement .danger {
  color: #cf4444;
}

.gap {
  height: 20rpx;
}

.toolbar {
  height: 120rpx;
  padding: 0 40rpx;
  border-top: 1rpx solid #eaeaea;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar .amount {
  font-size: 40rpx;
  color: #cf4444;
}

.toolbar .amount .symbol,
.toolbar .amount .decimal {
  font-size: 75%;
}

.toolbar .button {
  width: 220rpx;
  text-align: center;
  line-height: 72rpx;
  font-size: 26rpx;
  color: #fff;
  border-radius: 72rpx;
  background-color: #27ba9b;
}
</style>
