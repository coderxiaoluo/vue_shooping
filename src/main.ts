import { createApp } from "vue";
import App from "./App.vue";
// style.less
import "./assets/less/index.css";
// 引入vant样式
import "vant/lib/index.css";
// theme
import "./theme/index.css";
// icon
import "./assets/icon";
// router
import router from "./router";
// store
import store from "./stores";

import "@/utils/console";
// 使用中间件
createApp(App).use(router).use(store).mount("#app");
