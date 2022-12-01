<template>
  <view>
    <picker mode="date" start="2022-01-01" end="2022-12-30">选择日期</picker>
    <picker mode="region">选择地区</picker>
    <button @click="onClick">添加</button>
    <view>
      <input type="text" v-model="form.inputValue">
    </view>
  </view>
</template>

<script>
export default {
  /*
    vue针对data中的对象 如果对象中后期才新增一个属性，vue无法监控到！！！
    当新增的数据发生修改了之后，vue中的监视不生效 无法绑定 
    1 vue2 天然存在这个问题 vue2双向绑定的底层 Object.defineProperty -- 无法对新增的属性做监控
      提出了解决方案  vue2 提出api专门来解决这个问题
        Vue.$set(对象,"属性名","属性值")
        this.$set(对象,"属性名","属性值")
    2 vue3 不存在这个温觉 vue3双向绑定的底层新api proxy -- 对象 全方位的把控 
  */
  data() {
    return {
      form:{
        // 一开始就存在的数据
        inputValue:'aaaaaaaaaaaaaaaa'
      }
    };
  },
  methods: {
    onClick(){
      // inputValue 后期动态给form 新增的属性
      this.form.inputValue = 'Hello Jordan'
      // 对于 点语法无法生效-新增的属性 可以修改为 $set 来更新
      this.$set(this.form,'inputValue',"Hello Jordan")
    }
  },
};
</script>

<style scoped>
</style>
