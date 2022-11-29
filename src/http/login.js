import http from "@/utils/http";

// 获取登录信息
export const addLoginWxmin = (data)=>{
  return http({
    url:'/login/wxMin',
    method:'post',
    data
  })
}
// 获取登录信息
export const addLoginWxminSimple = (data)=>{
  return http({
    url:'/login/wxMin/simple',
    method:'post',
    data
  })
}
