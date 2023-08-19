import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import router from "@/router";

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob("./layout/**/*.vue", { eager: true });
      return pages[`./layout/${name}.vue`];
    },
    async setup({ App, props, plugin }) {
      const app = createSSRApp({
        render: () => h(App, props)
      });
      app.use(plugin);
      app.use(router);
      // 路由同步(服务端渲染这一段必须要)
      try {
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
