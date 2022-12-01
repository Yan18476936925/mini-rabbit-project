// 个人信息 相关的 接口
import http from '@/utils/http';

export const getGoodsById = (id) => {
  return http({ 
    url: `/goods`,
    data:{id}
  });
};
