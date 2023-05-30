import { ref } from "vue";
import { defineStore } from "pinia";
import { getProductListData } from "@/service/modules/home";
import { localCache } from "@/utils/cache";

export const useHomeStore = defineStore("home", () => {
  const homeList = ref<any[]>([]);

  async function getProductListDataAction() {
    const result = await getProductListData();
    homeList.value = result.data;
    return true;
  }

  return { homeList, getProductListDataAction };
});
