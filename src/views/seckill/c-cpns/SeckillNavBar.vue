<template>
  <div class="seckill-bar">
    <van-nav-bar
      class="nav-bar"
      title="秒杀专区"
      left-arrow
      @click-left="onbackLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const onbackLeft = () => {
  router.back();
};

const onClickRight = () => {};
</script>

<style lang="less" scoped>
.nav-bar {
  --van-nav-bar-icon-color: red;
}
</style>
