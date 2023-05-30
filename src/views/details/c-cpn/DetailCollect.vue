<template>
  <div class="collect">
    <template v-for="item in recommendList">
      <div class="collect-left">
        <van-icon class="star" name="star" />
        <span>{{ item.collectionNum }}</span>
      </div>
      <div class="collect-right">月售{{ item.monthlySales }}件</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InterRecommendList } from "@/types";
defineProps<InterRecommendList>();
</script>

<style lang="less" scoped></style>
