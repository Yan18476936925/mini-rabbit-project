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
