import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/Login.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/category",
      name: "category",
      component: () => import("@/views/category/Category.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/shopping",
      name: "shopping",
      component: () => import("@/views/shopping/ShopPing.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("@/views/details/Details.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("@/views/sign/Sign.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/seckill",
      name: "seckill",
      component: () => import("@/views/seckill/Seckill.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/me",
      name: "me",
      component: () => import("@/views/me/Me.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/search/Search.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/product",
      name: "product",
      component: () => import("@/views/productlist/ProductList.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      path: "/myaddress",
      name: "myaddress",
      component: () => import("@/views/myaddress/MyAddress.vue"),
      meta: {
        isShowBar: true,
      },
    },
    {
      name: "notfound",
      path: "/:pathMatch(.*)",
      component: () => import("@/views/notfound/NotFound.vue"),
    },
  ],
});

// router.beforeEach((to, form) => {
//   if (to.path == "/home") return "/login";
// });

export default router;
