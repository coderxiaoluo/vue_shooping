<template>
  <div class="add-cart">
    <!-- 加入购物车 -->
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="star-o" text="收藏" />
      <van-action-bar-button
        class="add-cart"
        type="warning"
        text="加入购物车"
        @click="handleAddCart"
      />
      <van-action-bar-button
        @click="immediatelyBuy"
        class="buy"
        type="danger"
        text="立即购买"
      />
    </van-action-bar>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { showToast, showConfirmDialog } from "vant";
import { useRouter } from "vue-router";
import { useShopPingStore } from "@/stores/shopping";
import { useLogin } from "@/stores/login/login";
import type { newCart } from "@/types/add-cart";
import type { InterRecommendList } from "@/types";

const props = defineProps<InterRecommendList>();

const shoppingStore = useShopPingStore();

const loginStore = useLogin();

// 获取用户信息
const { user } = storeToRefs(loginStore);

// 立即购买
const immediatelyBuy = (v: any) => {
  console.log(v);
};

const router = useRouter();
const handleAddCart = () => {
  // 如果没有登录无法添加购物车
  if (!user.value) {
    showConfirmDialog({
      title: "温馨提示!",
      message: "此时此刻需要您登录!",
    })
      .then(() => {
        router.push("/login");
        return;
      })
      .catch(() => {
        return;
      });
    return;
  }
  // 加入购物车
  const newData: newCart = {
    productId: user.value.id,
    productUrl: props.recommendList[0].productUrl,
    productName: props.recommendList[0].productName,
    userName: user.value.username,
    userId: user.value.id,
    productPrice: props.recommendList[0].productPrice,
    productNum: 1,
    productGuige: props.recommendList[0].productGuige,
  };
  // 加入购物车
  shoppingStore.insertShoppingCartDataAction(newData).then((res) => {
    if (res) showToast("添加成功!");
  });
  // 从新请求购物车数据
  shoppingStore.getShopPingListAction(user.value.id);
};
</script>

<style lang="less" scoped></style>
