<template>
  <div class="shop-ping">
    <div class="shop-top">
      <div class="left">
        <div class="icon">
          <van-icon class="shop-icon" name="cart-o" color="#ff0202" />
        </div>
        <div class="text">购物车</div>
        <div class="count">
          (<span>{{ shoppingData.length }}</span
          >)
        </div>
      </div>
      <div class="right">
        <p>清空</p>
      </div>
    </div>

    <div class="cell" v-if="shoppingData.length">
      <template v-for="item in shoppingData" :key="item">
        <van-swipe-cell :left-width="0">
          <van-card
            :title="item.productName"
            class="goods-card"
            :thumb="item.productUrl"
          >
            <template #price>
              <div class="price">
                <span>￥{{ item.productPrice }}</span>
                <div class="btn">
                  <van-button
                    class="button"
                    size="mini"
                    :disabled="item.productNum === 1"
                    @click="increaseClick(item)"
                    >-</van-button
                  >
                  <span> {{ item.productNum }}</span>
                  <van-button
                    class="button"
                    size="mini"
                    @click="decreaseClick(item)"
                    >+</van-button
                  >
                </div>
              </div>
            </template>
            <template #desc>
              <span>规格:{{ item.productGuige }}</span>
            </template>
          </van-card>
          <template #left>
            <!-- 单选框 -->
            <van-checkbox-group
              v-model="checkedRadioArr"
              ref="checkboxGroupRef"
            >
              <van-checkbox class="left-radio" :name="item"></van-checkbox>
            </van-checkbox-group>
          </template>
          <template #right>
            <van-button square text="找相似" class="button1" />
            <van-button
              @click="deleteShoppingClick(item)"
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </template>
    </div>
    <div class="empty" v-else>
      <van-empty description="当前购物车为空">
        <van-button
          @click="goToShopPingClick"
          round
          type="primary"
          class="bottom-button"
          >去购物</van-button
        >
      </van-empty>
    </div>

    <van-submit-bar
      v-show="shoppingData.length"
      class="submit-bar"
      :price="numPrice * 100"
      button-text="提交订单"
    >
      <van-checkbox v-model="isCheckAll" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useShopPingStore } from "@/stores/shopping";
import { useLogin } from "@/stores/login/login";
import { storeToRefs } from "pinia";
const shoppingStore = useShopPingStore();

const loginStore = useLogin();
// 获取用户信息
const { user } = storeToRefs(loginStore);
if (user.value) {
  shoppingStore.getShopPingListAction(user.value.id);
}

// 拿到购物车的数据
const { shoppingData } = storeToRefs(shoppingStore);
// 总价
const numPrice = ref(0);
// 单选
const checkedRadioArr = ref<any>([]);

// 全选
const isCheckAll = ref(false);
const checkAll = () => {
  checkedRadioArr.value = [];
  if (isCheckAll.value) {
    shoppingData.value.forEach((item) => {
      checkedRadioArr.value.push(item);
    });
    // 当点击全部时，计算总价
    checkedRadioArr.value.forEach((item: any) => {
      numPrice.value += item.productNum * item.productPrice;
    });
  } else {
    checkedRadioArr.value = [];
  }
};
// 计算总价
watch(checkedRadioArr, () => {
  // 计算总价
  addNumPrice();
  // 当都没有选择时，价格为0
  if (checkedRadioArr.value.length == 0) numPrice.value = 0;
  // 当都选中时，让全选按钮为true
  if (checkedRadioArr.value.length == shoppingData.value.length) {
    isCheckAll.value = true;
    // 否则为 false
  } else {
    isCheckAll.value = false;
  }
});
// 计算总价
function addNumPrice() {
  numPrice.value = 0;
  checkedRadioArr.value.forEach((item: any) => {
    numPrice.value += item.productNum * item.productPrice;
  });
}
// 增加个数
const decreaseClick = (v: any) => {
  shoppingStore.increaseComputed(v.id);
  addNumPrice();
};

// 减少个数
const increaseClick = (v: any) => {
  shoppingStore.increaseComputed(v.id, true);
  addNumPrice();
};

// 删除商品
const deleteShoppingClick = async (v: any) => {
  // 发送删除商品接口
  const results = await shoppingStore.deleteShoppingCartByIdAction(v.id);
  // 删除成功 从新请求购物车请求
  if (results) shoppingStore.getShopPingListAction(user.value.id);
};

// 去到首页

const router = useRouter();
const goToShopPingClick = () => {
  router.push("/home");
};
</script>

<style lang="less" scoped>
.shop-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 10px 0;

  .left {
    display: flex;
    .icon {
      .shop-icon {
        font-size: 20px;
        vertical-align: top;
      }
    }
    .text {
      color: var(--color-primary);
      font-weight: 900;
      margin: 0 10px;
    }

    .count {
      span {
        color: #3f3e3e;
      }
    }
  }
  .right {
    color: var(--color-primary);
    p {
      font-weight: 900;
    }
  }
}
:deep(.van-swipe-cell__wrapper) {
  margin-left: 50px !important;
}
.cell {
  .goods-card {
    background-color: #ffffff;
    :deep(.van-card__price) {
      color: red !important;
      flex: 1;
      width: 100%;
    }

    .price {
      width: 100%;
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 900;
      }
    }

    .btn {
      display: flex;
      align-items: center;
      .button {
        padding: 10px;
      }
    }
  }

  .delete-button {
    height: 100%;
  }

  .left-radio {
    margin-left: 100px;
    margin-top: 40px;
    --van-checkbox-border-color: #e5e5e5;
    --van-checkbox-checked-icon-color: var(--color-primary);
  }

  .button1 {
    height: 100%;
    width: 60px;
    padding: 30px;
    color: #ffffff;
    background-color: #8d8a8a;
  }
}
.bottom-button {
  width: 160px;
  height: 40px;
  --van-button-primary-border-color: var(--color-primary);
  --van-button-primary-background: var(--color-primary);
}

.submit-bar {
  position: fixed;
  left: 0;
  bottom: 60px;
}
</style>
