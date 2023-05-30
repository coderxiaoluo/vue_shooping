import lRequest from "../..";
import type { userInfos } from "@/types";

// 登录接口
export function getLogin(userInfo: userInfos) {
  return lRequest.post({
    url: "/auth/login",
    headers: { "Content-Type": "application/json" },
    data: userInfo,
  });
}

// 注册接口
export function getRegister(userInfo: userInfos) {
  return lRequest.post({
    url: "/auth/register",
    headers: { "Content-Type": "application/json" },
    data: userInfo,
  });
}
