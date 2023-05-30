<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="home" ref="HomeRef">
      <!-- 顶部导航 -->
      <NavBar />
      <!-- 位置板块 -->
      <Address></Address>
      <!-- banner -->
      <Banner />
      <!-- 时间线板块 -->
      <TimeLine />
      <!-- 服务板块 -->
      <Service />
      <!-- 列表板块 -->
      <MultiList />
      <!-- 秒杀专区板块 -->
      <Seckill />
      <!-- 猜你喜欢板块 -->
      <GuessLike />
      <!-- 人气推荐板块 -->
      <Recommend />
      <!-- 回到顶部 -->
    </div>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";

import NavBar from "@/components/nav-bar/NavBar.vue";
import Banner from "./c-cpns/Banner.vue";
import Address from "./c-cpns/Address.vue";
import TimeLine from "./c-cpns/TimeLine.vue";
import Service from "./c-cpns/Service.vue";
import MultiList from "./c-cpns/MultiList.vue";
import Seckill from "./c-cpns/Seckill.vue";
import GuessLike from "./c-cpns/GuessLike.vue";
import Recommend from "./c-cpns/Recommend.vue";


import { useHomeStore } from "@/stores/home";


const homeStore = useHomeStore();
homeStore.getProductListDataAction();

// 刷新业务逻辑
const loading = ref(false);
const onRefresh = () => {
  // 从新请求数据
  homeStore.getProductListDataAction().then(() => {
    showToast("刷新成功");
    loading.value = false;
  });
};
</script>

<style lang="less" scoped>
.home {
  padding: 0 10px;
  :deep(.van-back-top) {
    --van-back-top-background: #323232 !important;
  }
}
.search-icon {
  font-size: 25px;
}


:deep(.van-toast__text) {
  color: #000000;
}



</style>
