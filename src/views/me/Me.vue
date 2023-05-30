<template>
  <div class="me">
    <div class="me-top">
      <div class="left">
        <p>我的</p>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xinxi"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shezhi"></use>
        </svg>
      </div>
    </div>
    <!-- 用户信息板块 -->
    <div v-if="user" class="user-info">
      <!-- 用户头像 -->
      <div class="user-top">
        <div class="left">
          <div class="avatar">
            <img src="../../assets/img/avator/boren.jpg" alt="" />
          </div>
          <div class="username">{{ user.username }}</div>
        </div>
        <div class="right">
          <!-- 签到 -->
          <p>签到</p>
        </div>
      </div>
      <!-- 收藏 优惠卷 -->
      <div class="asset">
        <div class="asset-item1">
          <p class="count">320</p>
          <p class="text">收藏</p>
        </div>
        <div class="asset-item1">
          <p class="count">320</p>
          <p class="text">优惠卷</p>
        </div>
        <div class="asset-item1">
          <p class="count">320</p>
          <p class="text">积分</p>
        </div>
      </div>
      <!-- VIP -->
      <div class="vip-bottom">
        <div class="left">
          <van-icon class="vip-icon" name="gem-o" />
          <p>专属vip会员</p>
        </div>
        <div class="right">
          <p>查看权益</p>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="user-info">
      <!-- 用户头像 -->
      <div class="user-top">
        <div class="left">
          <div class="avatar" @click="toLoginClick">
            <img src="../../assets/img/avator/default-avatar.png" alt="" />
          </div>
          <div class="username">点击头像登录</div>
        </div>
        <div class="right">
          <!-- 签到 -->
          <p>签到</p>
        </div>
      </div>
      <!-- 收藏 优惠卷 -->
      <div class="asset">
        <div class="asset-item1">
          <p class="count">0</p>
          <p class="text">收藏</p>
        </div>
        <div class="asset-item1">
          <p class="count">0</p>
          <p class="text">优惠卷</p>
        </div>
        <div class="asset-item1">
          <p class="count">0</p>
          <p class="text">积分</p>
        </div>
      </div>
    </div>
    <!-- 订单部分板块 -->
    <div class="me-order">
      <div class="order-top">
        <div class="left">我的订单</div>
        <div class="right">全部订单 ></div>
      </div>
      <div class="order-content">
        <div class="content">
          <svg class="icon order-icon" aria-hidden="true">
            <use xlink:href="#icon-31daifukuan"></use>
          </svg>
          <span>待付款</span>
        </div>
        <div class="content">
          <svg class="icon order-icon" aria-hidden="true">
            <use xlink:href="#icon-31daifahuo"></use>
          </svg>
          <span>待发货</span>
        </div>
        <div class="content">
          <svg class="icon order-icon" aria-hidden="true">
            <use xlink:href="#icon-daishouhuo"></use>
          </svg>
          <span>待收货</span>
        </div>
        <div class="content">
          <svg class="icon order-icon" aria-hidden="true">
            <use xlink:href="#icon-daipingjia"></use>
          </svg>
          <span>待评价</span>
        </div>
      </div>
    </div>

    <!-- 我的服务板块 -->
    <div class="me-service">
      <div class="service-top">
        <div class="left">我的服务</div>
      </div>
      <div class="service-content">
        <template v-for="item in meService" :key="item.id">
          <div @click="onHandleRouterClick(item)" class="content">
            <svg class="icon service-icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
            <span>{{ item.text }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- 退出登录 -->
    <van-button
      class="exit-button"
      v-show="user"
      @click="onExitClick"
      type="primary"
      block
      >退出登录</van-button
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { meService } from "@/assets/data/me-service";
import { useLogin } from "@/stores/login/login";
import { localCache } from "@/utils/cache";
import { storeToRefs } from "pinia";

const loginStore = useLogin();
const { user } = storeToRefs(loginStore);

// 退出登录
const router = useRouter();
const onExitClick = () => {
  localCache.clearCache();
  router.push("/login");
};

// 去登录页
const toLoginClick = () => {
  router.push("/login");
};

//
const onHandleRouterClick = (v: any) => {
  // 收获地址
  if (v.id === 1) {
    router.push("/myaddress");
    return;
  }
};
</script>

<style lang="less" scoped>
.me {
  padding: 0 10px;
  padding-bottom: 20px;
}
.me-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  .left {
    p {
      font-weight: 700;
    }
  }
  .right {
    .icon {
      width: 30px;
      height: 30px;
      padding: 5px;
      box-sizing: border-box;
    }
  }
}

// 用户信息板块
.user-info {
  background-color: var(--home-color);
  border-radius: 10px;
  .user-top {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    .left {
      display: flex;
      align-items: center;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .username {
        margin-left: 20px;
        font-size: 18px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      p {
        background-color: #ffed29;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
  .asset {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    .asset-item1 {
      p {
        margin: 10px 0;
      }
      .count {
        color: #ca8326;
      }
      .text {
        font-size: 12px;
        font-weight: 900;
      }
    }
  }
  .vip-bottom {
    display: flex;
    background-color: var(--color-primary);
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-radius: 0 0 10px 10px;
    .left {
      display: flex;

      .vip-icon {
        font-size: 20px;
        margin: 0 10px;
      }
      p {
        color: #ffffff;
        font-weight: 900;
      }
    }
    .right {
      p {
        padding: 5px 10px;
        background-color: #fff;
        border-radius: 15px;
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }
}

.me-order {
  background-color: var(--home-color);

  border-radius: 10px;
  margin-top: 20px;

  .order-top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .left {
      font-size: 20px;
    }
    .right {
      margin-right: 20px;
    }
  }
  .order-content {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      .order-icon {
        width: 30px;
        height: 30px;
      }
      span {
        margin: 10px 0;
      }
    }
  }
}

.me-service {
  background-color: var(--home-color);
  border-radius: 10px;
  margin-top: 20px;

  .service-top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .left {
      font-size: 20px;
    }
  }
  .service-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 10px;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      .service-icon {
        width: 20px;
        height: 20px;
      }
      span {
        margin: 10px 0;
        font-size: 14px;
      }
    }
  }
}

.exit-button {
  margin-top: 20px;
  --van-button-primary-background: var(--color-primary);
  --van-button-primary-border-color: var(--color-primary);
}
</style>
