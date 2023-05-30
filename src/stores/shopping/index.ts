import { defineStore } from "pinia";
import {
  getShopPingData,
  deleteShoppingCartById,
  insertShoppingCartData,
} from "@/service/modules/shopping";
// import { localCache } from "@/utils/cache";
import { ref, computed } from "vue";

export const useShopPingStore = defineStore("shopping", () => {
  const shoppingData = ref<any[]>([]);
  // 根据用户id查询购物车
  async function getShopPingListAction(id: number) {
    const result = await getShopPingData(id);
    if (result) shoppingData.value = result.data;
  }
  // 根据商品id删除商品
  async function deleteShoppingCartByIdAction(id: number) {
    const result = await deleteShoppingCartById(id);
    // 删除成功 重新请求购物车数据
    if (result.message == "删除成功") return true;
  }
  // 添加购物车
  async function insertShoppingCartDataAction(data: any) {
    const result = await insertShoppingCartData(data);
    if (result) return true;
  }
  const obj = {
    username: "",
  };

  function increaseComputed(id: number, isAdd: boolean = false) {
    if (isAdd) {
      shoppingData.value.forEach((item) => {
        if (id == item.id) {
          item.productNum--;
        }
      });
    } else {
      shoppingData.value.forEach((item) => {
        if (id == item.id) {
          item.productNum++;
        }
      });
    }
  }

  return {
    shoppingData,
    getShopPingListAction,
    deleteShoppingCartByIdAction,
    increaseComputed,
    insertShoppingCartDataAction,
  };
});
