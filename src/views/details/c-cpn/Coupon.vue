<template>
  <div class="coupon">
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      title="专属优惠卷"
      @click="showList = true"
      class="coupon"
    />

    <!-- 优惠券列表 -->
    <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const coupon = {
  available: 1,
  condition: "无门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "超级会员VIP",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

const coupons = ref<any>([coupon]);
const showList = ref(false);
const chosenCoupon = ref(-1);

const onChange = (index: any) => {
  showList.value = false;
  chosenCoupon.value = index;
};
const onExchange = (code: any) => {
  coupons.value.push(coupon);
};
</script>

<style lang="less" scoped>
// y优惠卷
.coupon {
  color: #ffffff;
  display: flex;
  align-items: center;
  --van-cell-background: var(--color-primary);
  margin-top: 15px;
  height: 33px;
}
</style>
