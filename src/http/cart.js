import http from '@/utils/http';

// 添加商品到购物车
export const addMemberCart = (data) => {
  return http({
    url: '/member/cart',
    method: 'post',
    data,
  });
};

// 添加商品到购物车
export const getMemberCart = () => {
  return http({
    url: '/member/cart',
  });
};

/**
 * 修改商品 数量 和  选中状态
 * @param {String} id 商品的id
 * @param {Object} data 修改的商品的属性 selected 和  count
 */
export const putMemberCart = (id, data) => {
  return http({
    url: `/member/cart/${id}`,
    method: 'put',
    data,
  });
};
/**
 * 设置商品全选和取消全选
 * @param {Object} data selected 和 ids (skuId 数组)
*/
export const putMemberCartSelected = (data) => {
  return http({
    url: `/member/cart/selected`,
    method: 'put',
    data,
  });
};
