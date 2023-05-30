<template>
  <div class="details">
    <van-nav-bar
      class="nav-bar"
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 轮播图 -->
    <DetaSwiper :recommendList="recommendList" />
    <!-- 价格 -->
    <DetailPrice :recommendList="recommendList" />
    <!-- 特价 -->
    <DetailSpecial :recommendList="recommendList" />
    <!-- 收藏 -->
    <DetailCollect :recommendList="recommendList" />
    <!-- 优惠卷 -->
    <Coupon />
    <!-- 搭配 -->
    <ColloCation />
    <!-- 详情 与评价 -->
    <van-tabs class="tab" v-model:active="active">
      <van-tab title="商品详情">内容 1</van-tab>
      <van-tab title="商品评价"> <Comment /> </van-tab>
    </van-tabs>

    <!-- cart -->
    <AddCart :recommendList="recommendList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useDetailStore } from "@/stores/detail";
import { useRouter,useRoute } from "vue-router";
import Coupon from "./c-cpn/Coupon.vue";
import ColloCation from "./c-cpn/Collocation.vue";
import DetaSwiper from "./c-cpn/DetaSwiper.vue";
import DetailPrice from "./c-cpn/DetailPrice.vue";
import Comment from "./c-cpn/Comment.vue";
import DetailSpecial from "./c-cpn/DetailSpecial.vue";
import DetailCollect from "./c-cpn/DetailCollect.vue";
import AddCart from "./c-cpn/AddCart.vue";

const detailStore = useDetailStore()
const router = useRouter();
const route = useRoute()
// 拿到商品id
const idx = Number(route.query.id)
// 获取商品详情
detailStore.getProductListByProductIdDataAction(idx)
// 获取评论
detailStore.getEvaluateListAction(idx);
const { recommendList } = storeToRefs(detailStore);
console.log(recommendList);
const onClickLeft = () => {
  router.back();
};

// 详情评论
const active = ref(1);
</script>

<style lang="less" scoped>
.nav-bar {
  --van-nav-bar-icon-color: var(--color-primary);
  --van-nav-bar-text-color: var(--color-primary);
}

.collect {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 13px;
  color: #686767;

  .collect-left {
    span {
      margin-left: 10px;
    }
  }
}

.tab {
  --van-tabs-bottom-bar-color: #444444;
}
.add-cart {
  background-color: #ffc000;
}
</style>
