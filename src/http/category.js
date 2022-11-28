import http from "@/utils/http";

// 获取一级分类
export const getCategoryTop = ()=>{
  return http({
    url:'/category/top'
  })
}