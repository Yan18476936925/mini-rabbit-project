import { addLoginWxminSimple,getMemberProfile } from "@/http/login.js";
export default {
  namespaced: true,
  state: {
    //  用户信息 登录成功后返回
    profile:null,
    // 会员信息 单独请求接口 返回
    memberProfile: null,
  },
  getters: {
    
  },
  mutations: {
    setProfile(state,payLoad){
      state.profile = payLoad
    },
    setMemberProfile(state,payLoad){
      state.memberProfile = payLoad
    }
  },
  actions: {
    // 异步执行登录 获取用户信息
    async fetchProfile(context,data){
      const result = await addLoginWxminSimple(data);
      // console.log('25----->addLoginWxmin', result);
      context.commit("setProfile",result.result)
    },
    // 异步获取会员信息
    async fetchMemberProfile(context){
      const result = await getMemberProfile();
      context.commit("setMemberProfile",result.result)
      // 返回了和vuex中的一样内存地址的数据
      return {...result.result}// 浅拷贝
    },
  }
}