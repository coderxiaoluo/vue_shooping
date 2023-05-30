import lRequest from "../..";

// 根据用户id获取用户搜索历史
export function getHistoricalListUserId(id: number) {
  return lRequest.post({
    url: "/historical/getList",
    data: {
      userId: id,
    },
  });
}

export function addInsertHistoricalSearch(data: {}) {
  return lRequest.post({
    url: "/historical/insertHistoricalSearch",
    data: data,
  });
}

// 删除全部历史搜索
export function deleteHistoricalUserId(id: number) {
  return lRequest.post({
    url: "/historical/deleteHistorical",
    data: {
      userId: id,
    },
  });
}
