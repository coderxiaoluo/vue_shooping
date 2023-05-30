<template>
  <div class="nav-bar">
    <van-search
      class="search"
      v-model="inpValue"
      placeholder="请输入搜索关键词"
      @click-input="handleSearchClick"
      autocomplete="off"
    >
      <!-- 取消左侧icon -->
      <template #left-icon> </template>
      <!-- 设置右侧icon -->
      <template #right-icon>
        <van-icon class="search-icon" name="search" />
      </template>
    </van-search>
    <!-- 右侧 -->
    <div class="assort" @click="handleChangePageClick">
      <van-icon class="icon" name="free-postage" />
      <span>分类</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const inpValue = ref("");

const router = useRouter();
const handleChangePageClick = () => {
  router.push("/category");
};

// 搜索
const handleSearchClick = () => {
  router.push("/search");
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search {
  padding: 10px 0;
  flex: 1;
  --van-search-input-height: 30px;
  --van-search-content-background: var(--color-inp);
  :deep(.van-search__content) {
    border-radius: 20px;
  }
}

.assort {
  width: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  .icon {
    font-size: 25px;
  }
  span {
    font-size: 14px;
  }
}
</style>
