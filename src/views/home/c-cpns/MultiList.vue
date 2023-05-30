<template>
  <div class="multi_list">
    <ul>
      <template v-for="item in multiList">
        <li>
          <div class="icon-box">
              <img :src="imgURL(item.url)" alt="">
          </div>
          <p>{{ item.text }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { multiList } from "@/assets/data/multi-list";
const imgURL = (image:string) => new URL(`../../../assets/img/${image}`, import.meta.url).href


</script>

<style lang="less" scoped>
.multi_list {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px;
      height: 80px;
      text-align: center;
      margin: 5px 0;
      p {
        font-size: 14px;
        margin-top: 5px;
      }
      .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        // background-image: linear-gradient(
        //   to top,
        //   #f6bebe,
        //   var(--color-primary)
        // );
        .list-icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
