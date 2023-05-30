import lRequest from "../..";

// 添加商品

// 根据用户id获取购物车列表
export function getShopPingData(userId: number) {
  return lRequest.post({
    url: "/shoppingCart/getListByID",
    data: {
      userId,
    },
  });
}

// 根据商品id 删除商品
export function deleteShoppingCartById(id: number) {
  return lRequest.post({
    url: "/shoppingCart/deleteShoppingCart",
    data: {
      id,
    },
  });
}

// 添加到购物车
export function insertShoppingCartData(data: any) {
  return lRequest.post({
    url: "/shoppingCart/insertShoppingCart",
    data: data,
  });
}
