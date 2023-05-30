<template>
  <div class="detail-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="item in recommendList">
        <van-swipe-item class="swiper-item">
          <img :src="item?.productUrl" alt="" />
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup lang="ts" generic="T">
import type { InterRecommendList } from "@/types";
defineProps<InterRecommendList>();
</script>

<style lang="less" scoped>
.swiper-item {
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
