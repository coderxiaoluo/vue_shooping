<template>
  <div class="seckill">
    <div class="seckill-header">
      <div class="header-left">
        <span>秒杀专区</span>
        <svg class="icon seckill-icon" aria-hidden="true">
          <use xlink:href="#icon-miaosha"></use>
        </svg>
      </div>
      <div class="header-right" @click="onHandleRoutePage">查看更多 ></div>
    </div>
    <div class="seckill-content">
      <!-- 通过网络请求从服务器请求数据 -->
      <div class="desc-box">
        <div class="img-box">
          <img
            src="https://tk.gomyorder.cn/img/20210309/abb3fbdc62e4403abaa4a2af0cfb1a86.png"
            alt=""
          />
        </div>
        <div class="desc-text">
          <div class="text1">东方敬酒经典装</div>
          <div class="price">
            <p>秒杀价</p>
            <p>￥19.9</p>
          </div>
        </div>
      </div>
      <div class="desc-box">
        <div class="img-box">
          <img
            src="https://tk.gomyorder.cn/img/20210309/431ea187e12549be924da2041d146acf.png"
            alt=""
          />
        </div>
        <div class="desc-text">
          <div class="text1">东方敬酒经典装</div>
          <div class="price">
            <p>秒杀价</p>
            <p>￥19.9</p>
          </div>
        </div>
      </div>
      <div class="desc-box">
        <div class="img-box">
          <img
            src="https://tk.gomyorder.cn/img/20210309/852678065bed489784c46f257351440a.png"
            alt=""
          />
        </div>
        <div class="desc-text">
          <div class="text1">东方敬酒经典装</div>
          <div class="price">
            <p>秒杀价</p>
            <p>￥19.9</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const onHandleRoutePage = () => {
  router.push("/seckill");
};
</script>

<style lang="less" scoped>
.seckill {
  border-radius: 15px;
  height: 180px;
  background-color: #f04a4a;

  .seckill-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    height: 33px;
    font-size: 14px;
    padding: 0 10px;
    .header-left {
      .seckill-icon {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-left: 10px;
        color: #fff;
      }
    }
  }
  .seckill-content {
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin: 0 10px;
    height: var(225px - 33px);

    .desc-box {
      width: 80px;
      height: 80px;
      border-radius: 5px;
      text-align: center;
      margin-left: 10px;

      .img-box {
        width: 110%;
        height: 100%;
        img {
          width: 90%;
          height: 90%;
        }
      }

      .desc-text {
        width: 110%;
        margin: 10px 0;
        padding: 0 0;
        div {
          margin: 10px 0;
        }
        .text1 {
          color: #ffffff;
          font-size: 12px;
        }
        .price {
          position: relative;
          display: flex;
          background-color: #fff;
          border-radius: 15px;
          font-size: 13px;
          padding-left: 5px;
          :nth-child(2) {
            position: absolute;
            right: 0;
            background-color: #404040;
            border-radius: 15px;
            color: #ffffff;
            padding: 0 5px 0 0;
          }
        }
      }
    }
  }
}
</style>
