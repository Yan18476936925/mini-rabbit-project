import http from "@/utils/http";
/**
 * 首页-广告轮播图
 * @param {Number} distributionSite 要获取首页的数据-1 还是分类页面的数据-2
*/
export const getHomeBanner = (distributionSite = 1) => {
  return http({
    url: "/home/banner",
    data: { distributionSite },
  });
};
// 首页-前台类目-小程序
export const getHomeCategoryHeadMutli = () => {
  return http({ url: "/home/category/head/mutli" });
};
// 首页-人气推荐-小程序和app
export const getHomeHotMutli = () => {
  return http({ url: "/home/hot/mutli" });
};
// 首页-新鲜好物 limit：默认值为4，指定响应数据中商品的数量
export const getHomeNew = (data) => {
  return http({ 
    url: "/home/new",
    data
  });
};
// 首页-猜你喜欢
export const getHomeGoodsGuesslike = (data) => {
  return http({ 
    url: "/home/goods/guessLike",
    data
  });
};
// 统一获取推荐页面用到数据
export const getHomeRecommend = (url,data={}) => {
  return http({ 
    url,
    data
  });
};