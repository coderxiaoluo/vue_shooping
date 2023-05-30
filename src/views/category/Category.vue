<template>
  <div class="category">
    <div class="bar-search">
      <van-icon @click="handleBackClick" class="left-icon" name="arrow-left" />
      <van-search
        class="search"
        v-model="inpValue"
        placeholder="请输入搜索关键词"
      >
        <!-- 取消左侧icon -->
        <template #left-icon> </template>
        <!-- 设置右侧icon -->
        <template #right-icon>
          <van-icon class="search-icon" name="search" />
        </template>
      </van-search>
    </div>

    <div class="tree-select">
      <div class="left">
        <van-sidebar v-model="activeId">
          <template v-for="item in cateList" :key="item.typeId">
            <van-sidebar-item @click="handleChangeNavClick(item.typeId)">
              <template #title>
                <span
                  >{{ item.typeId === 1 ? firstName : item.typeName }}
                </span>
              </template>
            </van-sidebar-item>
          </template>
        </van-sidebar>
      </div>
      <div class="right">
        <template v-if="!firstShow">
          <ul class="shopping-list">
            <li v-for="item in rightCateList" :key="item">
              <img :src="item.productUrl" alt="" />
              <p><van-text-ellipsis :content="item.productName" /></p>
            </li>
          </ul>
        </template>
        <template v-else>
          <div class="top">
            <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img
                  src="https://tk.gomyorder.cn/img/20210331/cf7f505b2de0484a8cdd71d99f29b743.png"
                  alt=""
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="https://tk.gomyorder.cn/img/20210331/cf7f505b2de0484a8cdd71d99f29b743.png"
                  alt=""
                />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="content">
            <ul class="list">
              <template v-for="item in cateGoryList" :key="item.id">
                <li>
                  <div class="img">
                    <img
                      src="../../assets/img/Mask Group (1).png"
                      alt=""
                    />
                  </div>
                  <p>{{ item.text }}</p>
                </li>
              </template>
            </ul>
          </div>
        </template>

        <!-- 数据为空展示 -->
        <van-empty
          v-show="emptyList"
          image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
          image-size="80"
          description="没有商品"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useCategoryStore } from "@/stores/category";
import { cateGoryList } from "@/assets/data/cate-gory";

const router = useRouter();
// store
const categoryStore = useCategoryStore();
// 获取列表
categoryStore.getCategoryListAction();
// 获取数据
const { cateList, rightCateList } = storeToRefs(categoryStore);
// input的输入内容
const inpValue = ref("");
// 左侧第一个选择
const activeId = ref(0);

// 发送请求
const handleChangeNavClick = (v: number) => {
  categoryStore.getProductListByTypeIdDataAction(v);
};

// 返回上一级
const handleBackClick = () => router.back();

// 数据处理
const firstName = computed(() => "小罗" + cateList.value[0].typeName);
const firstShow = computed(() => rightCateList.value[0]?.id === 1);

// 当数据为空
const emptyList = ref(false);
watch(rightCateList, (newValue) => {
  if (newValue.length === 0) {
    emptyList.value = true;
  } else {
    emptyList.value = false;
  }
});
</script>

<style lang="less" scoped>
.bar-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-icon {
    width: 40px;
    font-size: 25px;
  }
  .search {
    padding: 10px 0;
    margin-left: 20px;
    flex: 1;
    --van-search-input-height: 30px;
    --van-search-content-background: var(--color-inp);
    :deep(.van-search__content) {
      border-radius: 20px;

      .search-icon {
        font-size: 20px;
        margin-right: 10px;
        font-weight: 800;
      }
    }
  }
}

.tree-select {
  margin-top: 20px;
  width: 96%;
  display: flex;

  justify-content: space-around;
  box-sizing: border-box;
  .left {
    width: 80px;
    padding-left: 30px;
    .van-sidebar {
      background-color: #fff;
      width: 100%;
    }
    .van-sidebar-item {
      background-color: #fff;
      padding: 15px 0;
    }
    .van-sidebar-item--select:before {
      display: none;
    }
    .van-sidebar-item--select {
      --van-sidebar-selected-text-color: red;
      font-size: 18px;
    }
  }
  .right {
    width: 60%;
    border-radius: 15px;
    overflow: hidden;
    .top {
      width: 100%;
      height: 100px;
      border-radius: 15px;
      overflow: hidden;
      .swipe {
        width: 100%;
        height: 100px;

        .van-swipe__track {
          width: 100% !important;
          height: 100% !important;
        }
        .van-swipe-item {
          color: #fff;
          width: 100%;
          font-size: 20px;
          height: 100px;
          text-align: center;
          background-color: #39a9ed;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .content {
      background-color: var(--color-primary);
      margin-top: 20px;
      border-radius: 15px;
      .list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin: 15px 0;

          width: 60px;
          .img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            color: #ffffff;
            margin-top: 5px;
            font-size: 13px;
          }
        }
      }
    }

    .shopping-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 10px;
      li {
        width: 80px;
        height: 100px;
        margin: 20px 0;
        img {
          width: 100%;
          height: 80%;
        }
        p {
          margin: 10px 0;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
