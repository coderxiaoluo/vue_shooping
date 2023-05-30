import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getHistoricalListUserId,
  addInsertHistoricalSearch,
  deleteHistoricalUserId,
} from "@/service/modules/search";

export const useHistoricalStore = defineStore("search", () => {
  const historyList = ref<any[]>([]);

  // 获取历史搜索记录
  async function historicalListUserIdAction(id: number) {
    const result = await getHistoricalListUserId(id);
    historyList.value = result.data;
  }
  // 添加搜索
  async function addInsertHistoricalAction(data: any) {
    const result = await addInsertHistoricalSearch(data);
    return result;
  }
  // 删除全部历史搜索
  async function deleteHistoricalUserIdAction(id: number) {
    const result = await deleteHistoricalUserId(id);
    return result;
  }
  return {
    historyList,
    historicalListUserIdAction,
    addInsertHistoricalAction,
    deleteHistoricalUserIdAction,
  };
});
