import { ref } from "vue";
import { defineStore } from "pinia";
import { getListData , getProductListByTypeIdData} from "@/service/modules/category";

export const useCategoryStore = defineStore("category", () => {
  // 左侧分类数据
  const cateList = ref<any[]>([]);

  // 右侧数据
  const rightCateList = ref<any[]>([]);
  // 查询分类
  async function getCategoryListAction() {
    const result = await getListData();
    cateList.value = result.data;
    // 根据商品类型Id查询商品列表
    const res = await getProductListByTypeIdData(1);
    rightCateList.value = res.data;
  }
  // 根据商品类型Id查询商品列表
  async function getProductListByTypeIdDataAction(id: number) {
    const result = await getProductListByTypeIdData(id);
    rightCateList.value = result.data;
  }



  return {
    cateList,
    rightCateList,
    getCategoryListAction,
    getProductListByTypeIdDataAction
  };
});
