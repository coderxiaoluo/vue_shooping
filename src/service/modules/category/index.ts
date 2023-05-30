import lRequest from "../..";

// 商品列表
export function getListData() {
  return lRequest.post({
    url: "/type/getList",
  });
}

// 根据商品类型Id查询商品列表
export function getProductListByTypeIdData(id: number = 1) {
  return lRequest.post({
    url: "/product/getProductListByTypeId",
    data: {
      productTypeId: id,
    },
  });
}

