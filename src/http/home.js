import http from "@/utils/http";

/**
 * 广告区域(pc-小程序)
 * @param {Number} distributionSite 要获取 首页的数据-1 还是 分类页面的数据-2
 * @returns Object
 */
// 首页-广告轮播图
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