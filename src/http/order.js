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
// 根据订单id来查阅订单详情
export const getMembeOrderById = (id) => {
  return http({
    url: `/member/order/${id}`,
  });
};

/**
 * 传递订单id来获取微信支付参数
 * @param {String} orderId 订单did
 */
export const getPayWxPayMiniPay = (orderId) => {
  return http({ 
    url: `/pay/wxPay/miniPay`, 
    data: { orderId } 
  });
};
/**
 * 传递订单id来  模拟真正的微信支付
 * @param {String} orderId 订单did
 */
export const getPayMock  = (orderId) => {
  return http({ 
    url: `/pay/mock`, 
    data: { orderId } 
  });
};