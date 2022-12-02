import http from "@/utils/http";

// 添加商品到购物车
export const addMemberCart = (data)=>{
  return http({
    url:'/member/cart',
    method: 'post',
    data
  })
}