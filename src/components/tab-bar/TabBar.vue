<template>
  <div class="tab-bar">
    <van-tabbar class="tb" v-model="currentIndex">
      <template v-for="item in tabBar" :key="item.id">
        <van-tabbar-item :to="item.path" :icon="item.icon">
       <span> {{item.text}}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { tabBar } from "@/assets/data/tab-bar";
import { useRoute } from "vue-router";
import { localCache } from "@/utils/cache";
const route = useRoute();
const currentIndex = ref(localCache.getCache("idx") ?? 0);
watch(route, (newrouters) => {
  const index = tabBar.findIndex((item) => item.path == newrouters.path);
  localCache.setCache("idx",index)
  if (index !== -1) return currentIndex.value = index
});
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 700px;
  --van-tabbar-item-active-color: var(--color-primary);
}
</style>
