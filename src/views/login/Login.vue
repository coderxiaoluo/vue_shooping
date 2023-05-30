<template>
  <div class="login">
    <h1>登录</h1>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userInfo.username"
          name="userName"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
          class="inpusername"
        >
        </van-field>
        <van-field
          v-model="userInfo.password"
          :type="typeInp"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <template #right-icon>
            <svg
              v-if="isShowPwd"
              @click="isShowPwdClick"
              class="icon iconpwd"
              aria-hidden="true"
            >
              <use xlink:href="#icon-kejian"></use>
            </svg>
            <svg
              v-else
              @click="isShowPwdClick"
              class="icon iconpwd"
              aria-hidden="true"
            >
              <use xlink:href="#icon-bukejian"></use>
            </svg>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          class="loginbtn"
          round
          block
          type="primary"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
    <!-- 注册 -->
    <div class="register">
      <van-icon class="queicon" name="question-o" />
      <p class="text" @click="handleClickSign">没有账号。前往注册</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useLogin } from "@/stores/login/login";
import type { userInfos } from "@/types";

const router = useRouter();
// 登录 store
const loginStore = useLogin();
// 手机号和密码
const userInfo = reactive({
  username: "coderluo",
  password: "123456",
});
// 登录业务逻辑
const onSubmit = async (values: userInfos) => {
  // 拿到用户输入的手机号和密码发送请求去和数据库进行匹配
  const result = await loginStore.getLoginAction(values);
  // 登录成功跳转home页
  if (result) router.push("/home");
};
// 密码可见/不可见
const isShowPwd = ref(false);
const typeInp: any = ref("password");
const isShowPwdClick = () => {
  isShowPwd.value = !isShowPwd.value;
  isShowPwd.value ? (typeInp.value = "username") : (typeInp.value = "password");
};

// 登录
const handleClickSign = () => {
  router.push("/sign");
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
h1 {
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  margin-top: 100px;
  color: var(--color-primary);
  text-decoration: underline;
}
// 表单
.van-form {
  --van-button-primary-background: var(--color-primary);

  .van-cell {
    width: 80%;
    border-bottom: 1px solid #4b4545;
    padding: 30px 0 10px 0px;
    margin: 0 0 0 30px;

    .iconpwd {
      width: 25px;
      height: 25px;
    }
  }
}
// 登录按钮
.loginbtn {
  text-align: center;
  width: 200px;
  margin: 20px auto;
  --van-button-primary-border-color: none;
}
// 去注册
.register {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .queicon {
    color: #868484;
  }
  .text {
    font-size: 12px;
    margin: 0 10px;
    color: #868484;
  }
}
</style>
