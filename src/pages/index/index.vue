<template>
  <view class="content">
    <!-- 导航组件 -->
    <Navbar></Navbar>
    <scroll-view
      scroll-y
      class="main"
      @scrolltolower="onScrolltolower"
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="refresherTriggered"
    >
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
          <navigator
            hover-class="none"
            :url="`/pages/recommend/index?type=${item.type}`"
            class="cards"
          >
            <image
              mode="aspectFit"
              v-for="img in item.pictures"
              :key="img"
              :src="img"
            ></image>
          </navigator>
        </view>
      </view>
      <!-- 新鲜好物 -->
      <view class="panel fresh">
        <view class="title">
          新鲜好物
          <navigator
            hover-class="none"
            class="more"
            url="/pages/recommend/index?type=5"
            >更多</navigator
          >
        </view>
        <view class="cards">
          <navigator
            hover-class="none"
            :url="`/pages/goods/index?id=${item.id}`"
            v-for="item in homeNew"
            :key="item.id"
          >
            <image mode="aspectFit" :src="item.picture"></image>
            <view class="name">{{ item.name }}</view>
            <view class="price">
              <text class="small">¥</text>{{ item.price }}
            </view>
          </navigator>
        </view>
      </view>
      <!-- 热门品牌 -->
      <view class="panel brands">
        <view class="title">
          热门品牌
          <navigator hover-class="none" class="more" url="/pages/list/index"
            >更多</navigator
          >
        </view>
        <view class="cards">
          <navigator hover-class="none" url="/pages/goods/index">
            <image
              mode="aspectFit"
              src="http://static.botue.com/erabbit/static/uploads/brand_logo_1.jpg"
            ></image>
            <view class="name">小米</view>
            <view class="price">99元起</view>
          </navigator>
          <navigator hover-class="none" url="/pages/goods/index">
            <image
              mode="aspectFit"
              src="http://static.botue.com/erabbit/static/uploads/brand_logo_2.jpg"
            ></image>
            <view class="name">TCL</view>
            <view class="price">199起</view>
          </navigator>
          <navigator hover-class="none" url="/pages/goods/index">
            <image
              mode="aspectFit"
              src="http://static.botue.com/erabbit/static/uploads/brand_logo_3.jpg"
            ></image>
            <view class="name">饭小宝</view>
            <view class="price">9.9起</view>
          </navigator>
          <navigator hover-class="none" url="/pages/goods/index">
            <image
              mode="aspectFit"
              src="http://static.botue.com/erabbit/static/uploads/brand_logo_4.jpg"
            ></image>
            <view class="name">鳄鱼</view>
            <view class="price">299起</view>
          </navigator>
        </view>
      </view>
      <!-- 猜你喜欢 -->
      <Guess :homeGoodsGuessLike="goodsGuesslike"></Guess>
    </scroll-view>
  </view>
</template>

<script>
// 引入 自定义导航栏 组件
import Navbar from "./components/Navbar.vue";
// 引入 封装好发送请求的代码
import {
  getHomeBanner,
  getHomeCategoryHeadMutli,
  getHomeHotMutli,
  getHomeNew,
  getHomeGoodsGuesslike,
} from "@/http/home";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      // 广告区域
      banners: [],
      // 前台类目
      HomeCategoryHeadMutli: [],
      // 人气推荐
      hotMutli: [],
      // 新鲜好物
      homeNew: [],
      // 猜你喜欢列表
      goodsGuesslike: [],
      // 有没有猜你喜欢 下一页数据
      hasMore: true,
      // 控制下拉刷新的状态
      refresherTriggered: false,
    };
  },
  onLoad() {
    // 调用渲染列表
    this.loadData();
  },
  methods: {
    loadData() {
      // 猜你喜欢参数
      this.guessParams = {
        page: 1,
        pageSize: 50,
      };
      // 猜你喜欢总页数
      this.guessTotalPages = 1;
      // 下面这段代码也是两个函数同时执行，各自请求成功，各自完成赋值 不存在 函数1 等待函数2执行 情况！！！
      return Promise.all([
        this.getHomeBanner(), 
        this.getHomeCategoryHeadMutli(),
        this.getHomeHotMutli(),
        this.getHomeNew(),
        this.getHomeGoodsGuesslike(this.guessParams),
      ]);
      // 1 同时调用 两个 函数 getHomeBanner  和  getHomeCategoryHeadMutli
      // 2 函数内部发送请求 ， 把请求的结果 设置到data
      // 3 两个函数的代码都执行完毕了，会触发  Promise.all().then
    },
    // 获取广告轮播图
    async getHomeBanner() {
      // 只要一个函数 拿async去做修饰，那么函数的返回值 就会自动的变成promise
      const result = await getHomeBanner();
      this.banners = result.result;
      console.log('----->2');
    },
    // 获取前台类目
    async getHomeCategoryHeadMutli() {
      const result = await getHomeCategoryHeadMutli();
      this.HomeCategoryHeadMutli = result.result;
      console.log('----->3');
    },
    // 获取人气推荐
    async getHomeHotMutli() {
      const result = await getHomeHotMutli();
      this.hotMutli = result.result;
      console.log('----->4');
    },
    // 获取新鲜好物
    async getHomeNew() {
      const result = await getHomeNew();
      this.homeNew = result.result;
      console.log('----->5');
    },
    // 获取猜你喜欢
    async getHomeGoodsGuesslike(params) {
      const result = await getHomeGoodsGuesslike(params);
      console.log("----->获取猜你喜欢", result);
      // 赋值给猜你喜欢列表
      this.goodsGuesslike = result.result.items;
      // 赋值给猜你喜欢总页数
      this.guessTotalPages = result.result.pages;
      console.log('----->6');
    },

    async onScrolltolower() {
      // 判断当前的页数是否大于等于总条数
      if (this.guessParams.page >= this.guessTotalPages) {
        // 提示没有一下页
        uni.showToast({
          title: "没有更多数据了",
          icon: "none",
        });
        // 关闭加载没有更多数据
        this.hasMore = false;
      } else {
        // 当前页数++
        this.guessParams.page++;
        // 获取列表更新数据
        const result = await getHomeGoodsGuesslike(this.guessParams);
        console.log("----->获取列表更新数据", result);
        // 将列表数据拼接当前列表数据
        this.goodsGuesslike = [...this.goodsGuesslike, ...result.result.items];
      }
    },
    // 下拉刷新
    async onRefresherrefresh() {
      // 设置下拉刷新状态显示
      this.refresherTriggered = true;
      // 广告区域
      this.banners= [];
      // 前台类目
      this.HomeCategoryHeadMutli= [];
      // 人气推荐
      this.hotMutli= [];
      // 新鲜好物
      this.homeNew= [];
      // 猜你喜欢列表
      this.goodsGuesslike= [];
      // 有没有猜你喜欢 下一页数据
      this.hasMore= true  
      // this.guessParams.page = 1;
      // this.guessTotalPages = 1;
      await this.loadData();
      // 数据回来关闭
      this.refresherTriggered = false;
    },
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