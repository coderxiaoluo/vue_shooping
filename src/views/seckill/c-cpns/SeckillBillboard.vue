<template>
  <div class="seckill-billboard">
    <div class="billboard">
      <p>秒杀榜</p>
      <p>查看更多></p>
    </div>
    <div class="content">
      <!-- v-for循环 -->
      <div class="bill-box">
        <div class="img-box">
          <img
            src="https://img.alicdn.com/bao/uploaded/O1CN01EgqQmb1CUyR1GyKbB_!!6000000000085-0-yinhe.jpg_310x310.jpg"
            alt=""
          />
        </div>
        <div class="desc">洗发水</div>
        <div class="price">
          <p>秒杀价</p>
          <p>￥19.9</p>
        </div>
      </div>
      <div class="bill-box">
        <div class="img-box">
          <img
            src="https://img.alicdn.com/bao/uploaded/O1CN01EgqQmb1CUyR1GyKbB_!!6000000000085-0-yinhe.jpg_310x310.jpg"
            alt=""
          />
        </div>
        <div class="desc">洗发水</div>
        <div class="price">
          <p>秒杀价</p>
          <p>￥19.9</p>
        </div>
      </div>
      <div class="bill-box">
        <div class="img-box">
          <img
            src="https://img.alicdn.com/bao/uploaded/O1CN01EgqQmb1CUyR1GyKbB_!!6000000000085-0-yinhe.jpg_310x310.jpg"
            alt=""
          />
        </div>
        <div class="desc">洗发水</div>
        <div class="price">
          <p>秒杀价</p>
          <p>￥19.9</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// 秒杀榜
.seckill-billboard {
  color: #ffffff;
  margin: 10px 20px;
  background-color: #c00000;
  padding: 10px;
  .billboard {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;

    :nth-child(1) {
      font-size: 16px;
    }
    :nth-child(2) {
      font-size: 13px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .bill-box {
      width: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-box {
        width: 70px;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .desc {
        margin: 10px 0;
      }
      .price {
        display: flex;
        font-size: 12px;
        padding: 0 5px;
        background-color: #ffffff;
        color: #000000;
        border-radius: 15px;

        :nth-child(2) {
          background-color: #404040;
          color: #ffffff;
          border-radius: 15px;
          padding: 2px;
          margin-right: -6px;
        }
      }
    }
  }
}
</style>
