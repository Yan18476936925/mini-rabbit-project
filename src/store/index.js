// 页面路径：store/index.js
import Vue from "vue";
import Vuex from "vuex";
import persistence from "vuex-uniapp-persistence";

Vue.use(Vuex); //vue的插件机制
//Vuex.Store 构造器选项
const store = new Vuex.Store({
  state: {
    safeArea: uni.getSystemInfoSync().safeArea,// 获取系统信息
    bounding: uni.getMenuButtonBoundingClientRect(), //获取胶囊信息
  },
  mutations: { },
  getters: {},
  modules: {},
  // 使用模块
  plugins:[persistence("小兔鲜儿Key")]
});
export default store;