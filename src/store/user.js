import { addLoginWxminSimple } from "@/http/login.js";
export default {
  namespaced: true,
  state: {
    profile:null,
  },
  getters: {
    
  },
  mutations: {
    setProfile(state,payLoad){
      state.profile = payLoad
    }
  },
  actions: {
    // 异步执行登录 获取用户信息
    async fetchProfile(context,data){
      const result = await addLoginWxminSimple(data);
      console.log('74----->addLoginWxmin', result);
      context.commit("setProfile",result.result)
    }
  }
}