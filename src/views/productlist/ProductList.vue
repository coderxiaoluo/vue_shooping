<template>
  <div class="product-list">
    <van-search
      v-model="value"
      class="search"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      autocomplete="off"
      input-align="center"
    >
      <!-- 取消左侧icon -->
      <template #left-icon> </template>
      <!-- 设置右侧icon -->
      <template #right-icon>
        <van-icon class="search-icon" name="search" />
      </template>
      <template #left>
        <van-icon @click="onBackClick" class="arrow-left" name="arrow-left" />
      </template>
      <template #action>
        <svg class="icon camera-icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo2"></use>
        </svg>
      </template>
    </van-search>
    123
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
import { useRouter } from "vue-router";
const value = ref("");
const onSearch = () => showToast();

const router = useRouter();
const onBackClick = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.search {
  height: 30px;
  margin-top: 10px;
  .van-search {
    --van-search-input-height: 30px;
    align-items: center;
    padding: 0;
  }

  :deep(.van-search__content) {
    margin-left: 20px;
    width: 20px;
    background-color: var(--color-inp);
    border-radius: 20px;
  }

  .arrow-left {
    font-size: 25px;
    margin-top: 5px;
  }

  .camera-icon {
    width: 30px;
    height: 30px;
    font-size: 20px;
    padding-top: 20px;
  }
}
</style>
