<template>
  <div class="search">
    <van-search
      v-model="searchValue"
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
          <use xlink:href="#icon-zhaoxiangji"></use>
        </svg>
      </template>
    </van-search>

    <!-- 历史搜索 -->
    <div class="history-search">
      <div class="top">
        <div class="left">历史搜索</div>
        <div class="right" @click="clearHistoryClick">
          <svg class="icon recovery-icon" aria-hidden="true">
            <use xlink:href="#icon-lajitong"></use>
          </svg>
        </div>
      </div>
      <div class="content">
        <template v-for="item in historyList" :key="item.id">
          <p>{{ item.searchName }}</p>
        </template>
      </div>
    </div>

    <!-- 商城 -->
    <div class="shopping-search">
      <div class="top">
        <div class="left">商城热搜</div>
        <div class="right">
          <svg class="icon recovery-icon" aria-hidden="true">
            <use xlink:href="#icon-xunhuan-01"></use>
          </svg>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
            <p>1</p>
            <p>333333333333333</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useLogin } from "@/stores/login/login";
import { useHistoricalStore } from "@/stores/search";

const loginStore = useLogin();
const historicalStore = useHistoricalStore();
// 获取用户信息
const { user } = storeToRefs(loginStore);
// 发送历史记录接口
historicalStore.historicalListUserIdAction(user.value.id);
// 获取历史记录
const { historyList } = storeToRefs(historicalStore);
// 搜索文本
const searchValue = ref<string>("");

interface InterHistorical {
  id?: number;
  userId: number;
  userName: string;
  searchName: string;
}

// 添加搜索
const onSearch = () => {
  // 判断是否登录
  if (!user.value) return;
  const addHistoricalVal: InterHistorical = {
    userId: user.value.id,
    userName: user.value.username,
    searchName: searchValue.value,
  };
  // 添加搜索请求
  historicalStore.addInsertHistoricalAction(addHistoricalVal).then((res) => {
    // 将input里面的内容清空
    searchValue.value = "";
    // 从新获取搜索
    historicalStore.historicalListUserIdAction(user.value.id);
  });
};

// 清空评论
const clearHistoryClick = () => {
  if (!historyList.value) return;
  // 清空请求
  historicalStore.deleteHistoricalUserIdAction(user.value.id).then((res) => {
    // 从新获取搜索
    historicalStore.historicalListUserIdAction(user.value.id);
  });
};

const router = useRouter();
const onBackClick = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.search {
  padding: 0 10px;
  .van-search {
    --van-search-input-height: 40px;
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
    font-size: 30px;
    margin-top: 5px;
  }

  .camera-icon {
    width: 30px;
    height: 30px;
    font-size: 20px;
    padding-top: 20px;
  }
}

// 历史搜索
.history-search {
  padding: 20px;
  box-sizing: border-box;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 18px;
      color: #707070;
    }
    .right {
      .recovery-icon {
        width: 25px;
        height: 25px;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    p {
      background-color: #ececec;
      color: #707070;
      border-radius: 15px;
      margin: 10px 10px;
      padding: 5px;
    }
  }
}

.shopping-search {
  padding: 10px 20px;
  box-sizing: border-box;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 18px;
      color: #707070;
    }
    .right {
      .recovery-icon {
        width: 25px;
        height: 25px;
      }
    }
  }
  .content {
    ul {
      li {
        margin: 20px 0;
        display: flex;

        p:nth-child(1) {
          width: 20px;
          height: 20px;
          background-color: #bfbfbf;
          color: #707070;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
