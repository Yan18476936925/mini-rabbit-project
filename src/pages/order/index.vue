<template>
  <view class="viewport">
    <!-- 标题 -->
    <view class="tabs">
      <text
        v-for="(item, index) in orderTabs"
        :key="item.title"
        :data-index="index"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
      <!-- 游标 -->
      <view
        class="cursor"
        :style="{ left: `calc(${activeIndex} * 20%)` }"
      ></view>
    </view>
    <!-- 内容 -->
    <swiper class="orders" :current="activeIndex" @change="swiperChange">
      <swiper-item v-for="(orders, index) in orderList" :key="index">
        <scroll-view scroll-y @scrolltolower="onScrolltolower">
          <view class="card" v-for="item in orders.items" :key="item.id">
            <!-- 订单相关 -->
            <view class="status">
              <text class="date">{{ item.createTime }}</text>
              <!-- 
                🔔 常量取值
              -->
              <text>{{ OrderStateOptions[item.orderState] }}</text>
              <text class="icon-delete"></text>
            </view>
            <!-- 商品信息 -->
            <navigator
              v-for="sku in item.skus"
              :key="sku.id"
              class="goods"
              :url="`/pages/order/detail?id=${item.id}`"
              hover-class="none"
            >
              <view class="cover">
                <image :src="sku.image"></image>
              </view>
              <view class="meta">
                <view class="name ellipsis">{{ sku.name }}</view>
                <view class="type">{{ sku.attrsText }}</view>
              </view>
            </navigator>
            <!-- 支付信息 -->
            <view class="payment">
              <text class="quantity">共{{ item.totalNum }}件商品</text>
              <text>实付</text>
              <text class="amount">
                <text class="symbol">¥</text>{{ item.payMoney }}</text
              >
            </view>
            <!-- 订单操作 -->
            <view class="action">
              <view class="button primary">再次购买</view>
              <view class="button">取消订单</view>
            </view>
          </view>
          <!-- 样式美化 -->
          <view class="blank" v-if="orders.items.length === 0">暂无数据~</view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { getMemberOrder } from '@/http/order.js';
import { OrderState } from './OrderConstance.js';
export default {
  data() {
    return {
      // 订单状态描述
      // OrderStateOptions,
      // tab栏状态
      orderTabs: [
        {
          orderState: 0,
          title: '全部',
        },
        {
          orderState: 1,
          title: '待付款',
        },
        {
          orderState: 2,
          title: '待发货',
        },
        {
          orderState: 3,
          title: '待收货',
        },
        {
          orderState: 4,
          title: '待评价',
        },
      ],
      // 当前选中的订单状态
      activeIndex: 0,
      // 订单列表
      orderList: new Array(5),
    };
  },
  computed: {
    // 当前显示的订单数据
    currentOrder() {},
  },
  onLoad(options) {
    this.loadGetMemberOrder();
  },
  methods: {
    // 加载订单数据  给orderList 第一次 赋值的时候使用
    // 根据当前选中的下标 来切换 要操作的对象
    async loadGetMemberOrder() {
      const data = {
        page: 1,
        pageSize: 6,
        // orderState: OrderState.QuanBu, // 全部
        orderState: this.orderTabs[this.activeIndex].orderState,
      };
      const result = await getMemberOrder(data);
      console.log('120----->getMemberOrder', result);
      // 把数据 设置到  orderList 中
      // this.orderList[0] = result.result
      this.$set(this.orderList, this.activeIndex, result.result);
    },
    // 轮播组件切换事件
    swiperChange(e) {
      // 发现当前orderList 对应的下标的元素还没有数据才发送请求
      // 1 设置 activeIndex 下标
      this.activeIndex = e.detail.current;
      // 没有数据 才发请求
      if (!this.orderList[this.activeIndex]) {
        // 2 发送请求 获取数据
        this.loadGetMemberOrder();
      }
    },
    // 分页的事件
    async onScrolltolower() {
      /*
      1 先判断一下有没有下一页数据
      2 没有 弹出提示
      3 有
        1 页码 + 1
        2 重新发送请求
        3 数据回来， 把新旧数据 合并
      */
      // 获取 当前页码和总页数
      const { page, pages } = this.orderList[this.activeIndex]; // 判断有没有下一页
      if (page >= pages) {
        return uni.showToast({ title: '没有更多数据', icon: 'none' });
      } else {
        // 还有下一页数据
        const data = {
          page: page + 1,
          pageSize: 6,
          orderState: this.orderTabs[this.activeIndex].orderState,
        };
        // 发送请求
        const result = await getMemberOrder(data);
        // 数据回来了 需要做合并！！
        // 对 旧数据page做修改
        this.orderList[this.activeIndex].page = result.result.page;
        // 对 旧数据 items 合并 新旧数组的合并
        this.orderList[this.activeIndex].items = [
          ...this.orderList[this.activeIndex].items,
          ...result.result.items,
        ];
      }
    },
  },
};
</script>
<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;
  text {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #262626;
  }
  .cursor {
    position: absolute;
    left: 0;
    bottom: 20rpx;
    display: block;
    content: '';
    width: 20%;
    height: 4rpx;
    padding: 0 50rpx;
    background-clip: content-box;
    background-color: #27ba9b;
    transition: all 0.4s;
  }
}
.orders {
  background-color: #f7f7f8;
  .card {
    min-height: 100rpx;
    padding: 20rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #fff;
    &:last-child {
      padding-bottom: 40rpx;
    }
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: #999;
    margin-bottom: 15rpx;
    .date {
      color: #666;
      flex: 1;
    }
    .primary {
      color: #ff9240;
    }
    .icon-delete {
      line-height: 1;
      margin-left: 10rpx;
      padding-left: 10rpx;
      border-left: 1rpx solid #e3e3e3;
    }
  }
  .goods {
    display: flex;
    margin-bottom: 20rpx;
    .cover {
      width: 170rpx;
      height: 170rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;
    }
    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6rpx 4rpx 6rpx 8rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 10rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }
    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }
    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 10rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }
    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      color: #333;
    }
  }
  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20rpx 0;
    text-align: right;
    color: #999;
    font-size: 28rpx;
    border-bottom: 1rpx solid #eee;
    .quantity {
      font-size: 24rpx;
      margin-right: 16rpx;
    }
    .amount {
      color: #444;
      margin-left: 6rpx;
    }
    .symbol {
      font-size: 20rpx;
    }
  }
  .action {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding-top: 20rpx;
    .button {
      width: 200rpx;
      height: 60rpx;
      text-align: center;
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
  .blank {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 30rpx;
    margin-top: -40rpx;
    color: #666;
  }
}
</style>
