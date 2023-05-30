<template>
  <div class="app">
    <router-view />
    <TabBar v-if="!$route.meta.isShowBar" />
    <van-back-top class="back-top" :bottom="100" />
  </div>
</template>
<script setup lang="ts">
import TabBar from "@/components/tab-bar/TabBar.vue";
</script>
<style lang="less" scoped>
.app {
  margin: 0 auto;
  max-width: 700px;
  margin-bottom: 50px;
}
.back-top {
  --van-back-top-background: #323232 !important;
}

.van-back-top {
  --van-back-top-background: #323232 !important;
}
</style>
