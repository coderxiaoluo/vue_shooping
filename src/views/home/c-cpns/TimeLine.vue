<template>
  <div class="timeline">
    <van-notice-bar
      class="notice"
      left-icon="volume-o"
      color="#ff0707"
      background="#fff0f1"
      text="当前商城更新了，快来购物吧 当前商城更新了，快来购物吧"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// 时间线
.timeline {
  height: 40px;
  color: #ffffff;

  .index-icon {
    color: #ffffff !important;
    width: 20px;
    height: 20px;
  }

  .time-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }
}
</style>
