<template>
  <div class="price-box">
    <template v-for="item in recommendList">
      <div class="price">￥{{ item.productPrice }}</div>
      <div class="discount">原价￥{{ item.productOldPrice }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InterRecommendList } from "@/types";

defineProps<InterRecommendList>();
</script>

<style lang="less" scoped>
.price-box {
  display: flex;
  align-items: center;
  height: 50px;
  // background-color: rgb(193, 122, 122);
  padding-left: 20px;
  .price {
    color: red;
    font-weight: 900;
  }
  .discount {
    margin-left: 20px;
    text-decoration: line-through;
  }
}
</style>
