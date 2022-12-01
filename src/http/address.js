import http from '@/utils/http';

// 获取收货地址列表
export const getMemberAddress = () => {
  return http({
    url: '/member/address'
  });
};
// 新增收货地址列表
export const addMemberAddress = (data) => {
  return http({
    url: '/member/address',
    method: 'post',
    data
  });
};
/**
 * 根据地址id来实现 删除地址
 * @param {string} id 地址id
*/
export const delMemberAddress = (id) => {
  return http({
    url: `/member/address/${id}`,
    method: 'delete'
  });
};
/**
 * 根据地址id来获取地址详情
 * @param {string} id 地址id
*/
export const getDetailMembeAddress  = (id) => {
  return http({
    url: `/member/address/${id}`,
    method: 'get'
  });
};
/**
 * 根据id来修改地址
 * @param {String} id 待修改地址的id
 * @param {Object} data 地址信息
 */
export const updateMembeAddress  = (data) => {
  return http({
    url: `/member/address/${data.id}`,
    method: 'put',
    data
  });
};

