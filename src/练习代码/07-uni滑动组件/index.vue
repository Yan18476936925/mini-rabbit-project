<template>
  <div>
    <uni-swipe-action>
      <!-- 基础用法 -->
      <uni-swipe-action-item
        :right-options="options"
        :left-options="options"
        @click="onClick"
        @change="swipeChange"
      >
        <view>SwipeAction 基础使用场景</view>
      </uni-swipe-action-item>
      <!-- 使用插槽 （请自行给定插槽内容宽度）-->
      <uni-swipe-action-item>
        <template v-slot:left>
          <view><text>置顶</text></view>
        </template>
        <view>
          <text>使用插槽</text>
        </view>
        <template v-slot:right>
          <view><text>删除</text></view>
        </template>
      </uni-swipe-action-item>
      <!-- 混合用法 -->
      <uni-swipe-action-item :right-options="options">
        <template v-slot:left>
          <view><text>置顶</text></view>
        </template>
        <view><text>混合使用</text></view>
      </uni-swipe-action-item>
    </uni-swipe-action>

    <!-- 禁止滑动 -->
    <uni-swipe-action>
      <uni-swipe-action-item :disabled="true" :right-options="options">
        <view>SwipeAction 基础使用场景</view>
      </uni-swipe-action-item>
    </uni-swipe-action>

    <!-- 按组使用 -->
    <uni-swipe-action>
      <uni-swipe-action-item
        :right-options="options"
        @click="bindClick"
        @change="swipeChange($event, index)"
      >
        <view>item1</view>
      </uni-swipe-action-item>
      <uni-swipe-action-item
        :right-options="options"
        @click="bindClick"
        @change="swipeChange($event, index)"
      >
        <view>item2</view>
      </uni-swipe-action-item>
      <uni-swipe-action-item
        :right-options="options"
        @click="bindClick"
        @change="swipeChange($event, index)"
      >
        <view>item3</view>
      </uni-swipe-action-item>
    </uni-swipe-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          text: "取消",
          style: {
            backgroundColor: "#007aff",
          },
        },
        {
          text: "确认",
          style: {
            backgroundColor: "#dd524d",
          },
        },
      ],
    };
  },
  methods: {
    onClick(e) {
      console.log(
        "点击了" +
          (e.position === "left" ? "左侧" : "右侧") +
          e.content.text +
          "按钮"
      );
    },
    swipeChange(e, index) {
      console.log("当前状态：" + e + "，下标：" + index);
    },
  },
};
</script>

<style scoped>
</style>
