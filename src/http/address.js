import http from "@/utils/http";

// 获取收货地址列表
export const getMemberAddress = ()=>{
  return http({
    url:'/member/address'
  })
}