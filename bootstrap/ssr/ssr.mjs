import { defineComponent, ref, resolveComponent, unref, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, createInertiaApp } from "@inertiajs/vue3";
import { useRouter, useRoute, createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const slashStart = (path) => {
  if (path[0] != "/") {
    return `/${path}`;
  }
  return path;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: { info: Object },
  setup(__props) {
    var _a;
    const props = __props;
    const router2 = useRouter();
    const route = useRoute();
    const label = ref("我是header组件");
    if (router2 && router2.push && ((_a = props.info) == null ? void 0 : _a.path)) {
      let path = slashStart(props.info.path);
      if (path != route.path) {
        router2.replace({
          path
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.info.title
      }, null, _parent));
      _push(` ${ssrInterpolate(label.value)} <button>点击修改状态</button>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const routerConfig = {
  home: {
    path: "/",
    name: "Home"
  },
  live: {
    path: "/live",
    name: "Live"
  }
};
const routerList = [
  {
    path: routerConfig.home.path,
    name: routerConfig.home.name,
    component: () => import("./assets/index-ec63d214.mjs"),
    meta: { title: "snowhome" }
  },
  {
    path: routerConfig.live.path,
    name: routerConfig.live.name,
    component: () => import("./assets/index-f61ec7ff.mjs"),
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
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./layout/index.vue": __vite_glob_0_0 });
      return pages[`./layout/${name}.vue`];
    },
    async setup({ App, props, plugin }) {
      const app = createSSRApp({
        render: () => h(App, props)
      });
      app.use(plugin);
      app.use(router);
      try {
        console.log("看看执行了几次");
        const { info } = props.initialPage.props;
        const currentPath = router.currentRoute.value.path;
        if (info && info.path && currentPath && info.path !== currentPath) {
          await router.replace({
            path: info.path
          });
        }
      } catch (e) {
        console.log("修改路由失败");
        console.log(e);
      }
      return app;
    }
  })
);
