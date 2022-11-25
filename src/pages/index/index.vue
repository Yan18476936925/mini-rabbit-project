<template>
  <view>
    <view>{{text}}</view>
    <view>{{this.$store.state.text}}</view>
    <button @click="handleTap">修改</button>
  </view>
</template>

<script>
export default {
  computed: {
    text(){
      return this.$store.state.text
    }
  },
  onLoad() {
    console.log("----->18", this.$store.state.text);
  },
  methods: {
    handleTap() {
      console.log("----->21", Date.now());
      this.$store.commit('setText',Date.now())
    },
  },
};
</script>

<style scoped>
</style>
