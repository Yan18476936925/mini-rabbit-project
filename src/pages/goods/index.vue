<template>
  <view class="goods">
    <!-- 返回按钮 -->
    <GoBackBtn></GoBackBtn>
    <!-- 返回按钮 -->
    <scroll-view scroll-y class="viewport">
      <!-- 商品信息 -->

      <!-- 商品评价 - 静态结构 - 没有接口不需要处理 -->

      <!-- 商品详情 -->

      <!-- 常见问题 -->

      <!-- 推荐 -->
    </scroll-view>

    <!-- 用户操作 -->

    <!-- 弹出层 -->

    <!-- SKU -->
  </view>
</template>
<script>
export default {
  data() {
    return {
      // 商品详情
      goods: null,
      // 相关推荐
      goodsRelevants: [],
      // 轮播图下标
      current: 0,
      // 弹出层显示的组件名称
      layer: "helps",
      // SKU组件的属性
      skuMode: 1,
      // 是否显示SKU组件
      isShowSku: false,
      // SKU 商品数据
      goodsSku: null,
    };
  },
  methods: {
    onTap() {
      uni.navigateBack();
    },
  },
};
</script>
<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
/* 自定义导航栏 */
.navbar {
  width: 750rpx;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  .search {
    height: 40px;
    padding: 1px 110px 0 50px;
    .input {
      height: 62rpx;
      border-radius: 60rpx;
      font-size: 26rpx;
      color: #8b8b8b;
      background-color: #f3f4f4;
      position: relative;
      &::before {
        position: absolute;
        left: 24rpx;
        top: 50%;
        color: #b7b7b7;
        font-size: 28rpx;
        transform: translateY(-50%);
      }
    }
  }
  .wrap {
    position: relative;
  }
  .back {
    position: absolute;
    left: 10px;
    top: 2px;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    font-size: 23px;
    color: #191919;
  }
  .tabs {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1rpx solid #eaeaea;
    text {
      display: block;
      padding: 10rpx 10rpx 16rpx;
      font-size: 28rpx;
      position: relative;
    }
    .active {
      color: #27ba9b;
      font-weight: 500;
      &::after {
        content: "";
        position: absolute;
        left: 18rpx;
        right: 20rpx;
        bottom: 14rpx;
        height: 4rpx;
        background-color: #27ba9b;
      }
    }
  }
}
.viewport {
  background-color: #f4f4f4;
  height: 100vh;
}
.panel {
  margin-top: 20rpx;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }
    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}
.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: "\e6c2";
    color: #ccc;
    font-family: "erabbit" !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}
/* 商品信息 */
.goods {
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  .preview {
    height: 750rpx;
    position: relative;
    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
    }
  }
  .indicator {
    .current {
      font-size: 26rpx;
    }
    .split {
      font-size: 24rpx;
      margin: 0 1rpx 0 2rpx;
    }
    .total {
      font-size: 24rpx;
    }
  }
  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;
    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #35c8a9;
    }
    .number {
      font-size: 56rpx;
    }
    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }
    .remarks {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }
  .related {
    padding-left: 20rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}
/* 商品评论 */
.comments {
  padding-left: 20rpx;
  .comment {
    padding: 24rpx 40rpx 24rpx 10rpx;
    border-top: 1rpx solid #eaeaea;
  }
  .caption {
    height: 60rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar {
      width: 60rpx;
      height: 60rpx;
      margin-right: 20rpx;
      border-radius: 50%;
    }
  }
  .user {
    font-size: 26rpx;
    color: #333;
    display: flex;
    align-items: center;
  }
  .rating {
    width: 144rpx;
    height: 24rpx;
    background-image: url(https://static.botue.com/erabbit/static/images/rating_off.png);
    background-size: contain;
    .rank {
      height: 100%;
      background-image: url(https://static.botue.com/erabbit/static/images/rating_on.png);
      background-size: 144rpx 24rpx;
    }
  }
  .content {
    .text {
      line-height: 1.4;
      margin-top: 24rpx;
      font-size: 24rpx;
      color: #333;
    }
    .extra {
      display: flex;
      justify-content: space-between;
      margin: 20rpx 1rpx 0 0;
      font-size: 22rpx;
      color: #666;
    }
  }
  .pictures {
    display: flex;
    flex-wrap: wrap;
    margin: 20rpx 0 0 1rpx;
  }
  .picture {
    width: 150rpx;
    height: 150rpx;
    margin-right: 27rpx;
    &:last-child {
      margin-right: 0;
    }
  }
}
/* 类似商品 */
.similar {
  margin-top: 20rpx;
  .bar {
    display: flex;
    align-items: center;
    height: 90rpx;
    font-size: 28rpx;
    color: #333;
    background-color: #fff;
    text {
      flex: 1;
      text-align: center;
      position: relative;
    }
    .active {
      &::after {
        content: "";
        display: block;
        width: 60rpx;
        height: 4rpx;
        background-color: #27ba9b;
        transform: translateX(-50%);
        position: absolute;
        left: 50%;
        bottom: -5rpx;
      }
    }
  }
  .content {
    padding-top: 20rpx;
    background-color: #f4f4f4;
    white-space: nowrap;
    navigator {
      display: inline-block;
      width: 200rpx;
      height: 270rpx;
      padding: 15rpx 15rpx 0;
      margin-right: 15rpx;
      background-color: #fff;
      border-radius: 6rpx;
      &:first-child {
        margin-left: 15rpx;
      }
    }
    image {
      height: 172rpx;
    }
    .name {
      max-height: 64rpx;
      line-height: 1.2;
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #333;
      -webkit-line-clamp: 1;
    }
    .price {
      font-size: 18rpx;
      color: #cf4444;
    }
    .number {
      font-size: 24rpx;
      margin-left: 2rpx;
    }
  }
}
/* 商品详情 */
.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}
/* 常见问题 */
.help {
  display: flex;
  align-items: center;
  padding: 20rpx 0 20rpx 20rpx;
  margin-top: 20rpx;
  font-size: 28rpx;
  color: #333;
  background-color: #fff;
  position: relative;
  .icon-help {
    font-size: 34rpx;
    margin-right: 6rpx;
    color: #ffa868;
  }
}
/* 商品推荐 */
.recommend {
  padding-left: 20rpx;
  .content {
    padding: 0 20rpx 20rpx;
    margin-left: -20rpx;
    background-color: #f4f4f4;
    overflow: hidden;
    navigator {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 20rpx 0 0;
      border-radius: 10rpx;
      background-color: #fff;
      float: left;
    }
    .image {
      height: 260rpx;
    }
    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }
    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #cf4444;
    }
    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }
  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}
/* 底部工具栏 */
.toolbar {
  height: 120rpx;
  padding: 0 20rpx;
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    display: flex;
    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .addcart {
      background-color: #ffa868;
    }
    .payment {
      background-color: #27ba9b;
      margin-left: 20rpx;
    }
  }
  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    button {
      text-align: center;
      line-height: 1.4;
      padding: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;
    }
    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
