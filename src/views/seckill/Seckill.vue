<template>
  <div class="seckill">
    <!-- 顶部导航 -->
    <SeckillNavBar />
    <!-- 秒杀榜 -->
    <SeckillBillboard />
    <!-- 今日秒杀 -->
    <div class="daySeckill">
      <div class="left">今日秒杀</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SeckillNavBar from "./c-cpns/SeckillNavBar.vue";
import SeckillBillboard from "./c-cpns/SeckillBillboard.vue";

// 
</script>

<style lang="less" scoped></style>
