<template>
  <div class="guess-like">
    <div class="like-box">猜你喜欢</div>
    <div class="guess-list">
      <!-- 后端接口 -->
      <div class="guess-item">
        <div class="left-text">
          <p>新品首发</p>
          <p>每日上新</p>
          <p>立即选购</p>
        </div>
        <div class="right-img"></div>
      </div>
      <div class="guess-item guess-item-item1">
      </div>
      <div class="guess-item guess-item-item2"></div>
      <div class="guess-item guess-item-item3"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.guess-like {
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
    transform: translate(-276%);
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
    transform: translate(176%);
    top: 7px;
    width: 55px;
    height: 10px;
    border-radius: 15px;
    background-color: #6d6b6b;
  }

  .guess-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .guess-item {
      display: flex;
      justify-content: space-between;

      width: 135px;
      height: 110px;
      margin: 10px;
      border-radius: 15px;
      background-color: #e5e5e5;
      padding: 10px;
      box-sizing: border-box;

  

      .left-text {
        :nth-child(1) {
          font-size: 18px;
        }
        :nth-child(2) {
          margin-top: 10px;
        }
        :nth-child(3) {
          margin-top: 25px;
          color: red;
        }
      }

      // .right-img {
      //   border: 1px solid #000;
      //   border-radius: 50%;
      //   width: 35px;
      //   height: 35px;
      // }
    }

    .guess-item-item1 {
      background-image: url(../../../assets/img/like1.png);
    }
    .guess-item-item2 {
      background-image: url(../../../assets/img/like2.png);
    }
    .guess-item-item3 {
      background-image: url(../../../assets/img/like3.png);
    }
  }
}
</style>
