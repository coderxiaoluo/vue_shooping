import lRequest from "../..";

// 获取主页的列表
export function getProductListData() {
  return lRequest.get({
    url: "/product/getProductList",
  });
}
