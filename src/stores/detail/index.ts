import { ref } from "vue";
import { defineStore } from "pinia";
import { getEvaluateList, getProductListByProductIdData, getProductImage } from "@/service/modules/detail";

export const useDetailStore = defineStore("detail", () => {
  // 商品详情数据
  const recommendList = ref<any[]>([]);

  // 根据商品Id查询商品
  async function getProductListByProductIdDataAction(id: number) {
    const result = await getProductListByProductIdData(id);
    recommendList.value = result.data;
  }
  // 获取评论
  async function getEvaluateListAction(id: number) {
    const results = await getEvaluateList(id);
    console.log(results);
  }

  // todo: 商品图片
  async function getProductImageAction(id: number, url: string) {
    const data = {
      procudtId: id,
      imageUrl: url,
    };
    // const result = await getProductImage(data);
  }

  return { recommendList, getProductListByProductIdDataAction, getEvaluateListAction };
});
