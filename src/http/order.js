import http from "@/utils/http";

// 获取预付订单列表
export const getMembeOrderPre = () => {
  return http({
    url: `/member/order/pre`,
  });
};