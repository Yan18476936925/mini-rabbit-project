// 页面路径：store/index.js
import Vue from "vue";
import Vuex from "vuex";
import persistence from "vuex-uniapp-persistence";
import user from "./user.js";
import address from "./address.js";

Vue.use(Vuex); //vue的插件机制
//Vuex.Store 构造器选项
const store = new Vuex.Store({
  state: {
    safeArea: uni.getSystemInfoSync().safeArea,// 获取系统信息
    bounding: uni.getMenuButtonBoundingClientRect(), //获取胶囊信息
    platform: uni.getSystemInfoSync().platform,  // 手机平台
  },
  mutations: { },
  getters: {},
  modules: {user,address },
  // 使用模块
  plugins:[persistence("小兔鲜儿Key")]
});
export default store;