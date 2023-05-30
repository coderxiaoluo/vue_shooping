<template>
  <div class="recommend">
    <div class="like-box">人气推荐</div>
    <div class="guess-list">
      <template v-for="item in homeList" :key="item.id">
        <div @click="onChangeDetailClick(item)" class="guess-item">
          <div class="top-img">
            <img :src="item.productUrl" alt="" />
          </div>
          <div class="bottoms-desc">
            <div class="desc">{{ item.productIntroduce }}</div>
            <div class="price">
              <p>￥{{ item.productPrice }}</p>
              <p>售1.5万件</p>
              <p>
                <svg class="icon dian-icon" aria-hidden="true">
                  <use xlink:href="#icon-shenglvehao"></use>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home";
import { useDetailStore } from "@/stores/detail";
const homeStore = useHomeStore();
const detailStore = useDetailStore();

const { homeList } = storeToRefs(homeStore);
// 点击进入详情页
const router = useRouter();
const onChangeDetailClick = (v: any) => {
  // 发送网络请求
  // detailStore.getProductListByProductIdDataAction(v.id);
  // detailStore.getProductImageAction(v.id, v.productImage);
  // detailStore.getEvaluateListAction(v.id);
  router.push({
    path: `/details/${v.id}`,
    query:{
      id:v.id
    }
  });
};
</script>

<style lang="less" scoped>
.recommend {
  margin-top: 20px;
  border-radius: 15px;
  background-color: var(--home-color);

  .like-box {
    position: relative;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .like-box::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 80px;
    top: 7px;
    width: 55px;
    height: 10px;
    border-radius: 15px;
    background-color: #6d6b6b;
  }
  .like-box::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 240px;
    top: 7px;
    width: 55px;
    height: 10px;
    border-radius: 15px;
    background-color: #6d6b6b;
  }

  .guess-list {
    display: flex;
    padding: 0 10px;
    flex-wrap: wrap;
    justify-content: space-around;
    .guess-item {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 145px;
      margin: 10px;
      border-radius: 15px;
      background-color: #ffffff;
      box-sizing: border-box;
      overflow: hidden;
      .top-img {
        width: 100%;
        height: 100px;
        background-color: #444444;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .bottoms-desc {
        display: flex;
        flex-direction: column;
        padding: 5px;
        .desc {
          font-weight: 700;
          font-size: 12px;
          margin: 5px;
        }
        .price {
          display: flex;
          align-items: center;
          :nth-child(1) {
            color: var(--color-primary);
          }
          :nth-child(2) {
            color: #706f6f;
            font-size: 12px;
          }
          :nth-child(3) {
            .dian-icon {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
