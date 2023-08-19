import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
  RouteRecordRaw
} from "vue-router";
import routerConfig from "./tool";

const routerList: Array<RouteRecordRaw> = [
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

const getRouterMode = () => {
  if (typeof window === "undefined") {
    return createMemoryHistory();
  }
  return createWebHistory();
};

const router = createRouter({
  history: getRouterMode(),
  routes: routerList,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth"
    };
  }
});
export default router;
