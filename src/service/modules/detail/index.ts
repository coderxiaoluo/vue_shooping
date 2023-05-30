import lRequest from "../..";

// 根据商品Id查询商品
export function getProductListByProductIdData(id: number) {
  return lRequest.post({
    url: "/product/getProductListByProductId",
    data: {
      id,
    },
  });
}
// 获取商品图片查询
export function getProductImage(data: any) {
  return lRequest.post({
    url: "/productImage/getList",
    data: data,
  });
}

// 优惠卷查询
export function getCouponData(id:number) {
  return lRequest.post({
    url:"/coupon/getList",
    data:{
      id
    }
  })
}
// 获取评论
export function getEvaluateList(id: number) {
  return lRequest.post({
    url: "/evaluate/getListByProductId",
    data: {
      id,
    },
  });
}
