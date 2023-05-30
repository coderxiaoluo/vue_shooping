<template>
  <div class="special-offer">
    <template v-for="item in recommendList">
      <div class="offer-price">特价商品</div>
      <div class="desc">{{ item.productIntroduce }}</div>
      <div class="share" @click="shareClick">
        <span>分享</span>
        <van-icon name="share-o" />
      </div>
    </template>
    <van-share-sheet
      v-model:show="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
import type { InterRecommendList } from "@/types";

defineProps<InterRecommendList>();
// 分享
const showShare = ref(false);
const options = [
  { name: "微信", icon: "wechat" },
  { name: "微博", icon: "weibo" },
  { name: "复制链接", icon: "link" },
  { name: "分享海报", icon: "poster" },
  { name: "二维码", icon: "qrcode" },
];

const onSelect = (option: any) => {
  showToast("分享失败");
  showShare.value = false;
};

const shareClick = () => {
  showShare.value = true;
};
</script>

<style lang="less" scoped>
.special-offer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
  .offer-price {
    width: 90px;
    height: 30px;
    background-color: #fe0202;
    border-radius: 10px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
  }
  .desc {
    padding: 0 20px;
    font-size: 14px;
    flex: 1;
  }
}

.van-toast__text {
  background-color: red;
}
</style>
