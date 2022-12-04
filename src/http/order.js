import http from "@/utils/http";

// 获取预付订单列表
export const getMembeOrderPre = () => {
  return http({
    url: `/member/order/pre`,
  });
};
// 创建订单用到的数据
export const postMembeOrder = (data) => {
  return http({
    url: `/member/order`,
    method: "post",
    data
  });
};
