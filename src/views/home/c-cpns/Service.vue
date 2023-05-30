<template>
  <div class="service">
    <template v-for="item in footerService">
      <div class="service-item">
        <div class="icon-box">
          <svg class="icon service-icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <div :class="['text', { 'font-text': item.id == 2 }]">
          {{ item.text }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { footerService } from "@/assets/data/footer-service";
</script>

<style lang="less" scoped>
// 服务
.service {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin: 10px 0;
  .service-item {
    display: flex;
    align-items: center;

    .icon-box {
      width: 20px;
      height: 20px;
      margin-right: 7px;
      .service-icon {
        width: 20px;
        height: 20px;
      }
    }
    .text {
      font-size: 14px;
    }
    // 当等于包邮到家时添加类名
    .font-text {
      font-size: 18px;
    }
  }
}
</style>
