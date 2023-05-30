<template>
      <div class="banner">
        <van-swipe class="home-swiper" :autoplay="3000" indicator-color="white">
          <template v-for="item in bannerList" :key="item.id">
            <van-swipe-item class="swiper-item">
            <img
              :src="imgURL(item.url)"
              :alt="item.desc"
            />
          </van-swipe-item>
          </template>
        </van-swipe>
      </div>
</template>

<script setup lang="ts">
import  { bannerList } from "@/assets/data/banner"

// 处理图片无法显示
const imgURL = (image:string) => new URL(`../../../assets/img/${image}`, import.meta.url).href

</script>

<style lang="less" scoped>

.banner {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;

  // background-image: linear-gradient(
  //   45deg,
  //   #f6bebe,
  //   var(--color-primary),
  //   #f6bebe
  // );
  .home-swiper {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
