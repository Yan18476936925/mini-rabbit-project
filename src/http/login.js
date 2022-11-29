import http from "@/utils/http";

// 获取登录信息
export const addLoginWxmin = (data)=>{
  return http({
    url:'/login/wxMin',
    method:'post',
    data
  })
}
// 添加登录信息
export const addLoginWxminSimple = (data)=>{
  return http({
    url:'/login/wxMin/simple',
    method:'post',
    data
  })
}
// 获取个人中心
export const getMemberProfile = ()=>{
  return http({
    url:'/member/profile',
  })
}
