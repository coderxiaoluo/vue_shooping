export let BASE_URL1 = "";
export const TIME_OUT1 = 10000;

if (import.meta.env.DEV) {
  // 开发阶段
  BASE_URL1 = import.meta.env.VITE_DEVELOPMENT;
} else {
  // 生产阶段
  BASE_URL1 = import.meta.env.VITE_PRODUCTION;
}
