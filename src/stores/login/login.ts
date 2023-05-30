import { defineStore } from "pinia";
import type { userInfos } from "@/types";
import { getLogin, getRegister } from "@/service/modules/login";
import { localCache } from "@/utils/cache";
import { showSuccessToast, showFailToast } from "vant";

export const useLogin = defineStore("login", {
  state: () => {
    return {
      user: localCache.getCache("user") ?? "",
    };
  },
  actions: {
    // 登录请求
    async getLoginAction(userInfo: userInfos) {
      const results = await getLogin(userInfo);
      console.log(results);
      // 登录成功将token存储起来，没有就不用存储  通过后端返回的code来进行判断  这里code不管成功还是失败都是200 所以我们使用message来判断
      // token是用户的唯一标识，每次请求都需要携带
      if (results.message == "登录成功") {
        // 将用户持久化存储
        this.user = results.data;
        localCache.setCache("user", results.data);
        showSuccessToast("登录成功!");
        return results;
      } else if (results.message == "用户不存在") {
        showFailToast("用户不存在 请前往注册!");
        return;
      } else {
        showFailToast("用户名或密码错误!");
        return;
      }
    },
    // 注册请求
    async registerAction(userInfo: userInfos) {
      const results = await getRegister(userInfo);
      console.log(results);
      if (results.message == "用户已存在") {
        showFailToast("用户已存在!");
        return;
      } else {
        showSuccessToast("注册成功!");
        console.log("注册成功!");
        return;
      }
    },
  },
});
