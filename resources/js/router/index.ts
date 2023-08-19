import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routerConfig from "./tool";

const routerList = [
  {
    path: routerConfig.home.path,
    name: routerConfig.home.name,
    component: () => import("@/pages/home/index.vue"),
    meta: { title: "snowhome" }
  },
  {
    path: routerConfig.live.path,
    name: routerConfig.live.name,
    component: () => import("@/pages/liveManagement/index.vue"),
    meta: { title: "snowhome" }
  }
];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [...routerList];

const router = createRouter({
  history: createWebHistory(),
  routes: defaultRouterList,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth"
    };
  }
});

export default router;
