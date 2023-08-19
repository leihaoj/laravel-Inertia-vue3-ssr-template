import { createApp, createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import "../css/app.css";
import router from "@/router";

createInertiaApp({
  id: "app",
  resolve: name => {
    const pages = import.meta.glob("./layout/**/*.vue", { eager: true });
    return pages[`./layout/${name}.vue`];
  },
  setup({ el, App, props, plugin }) {
    // const app = createSSRApp({render: () => h(App, props)});
    const app = createApp({ render: () => h(App, props) });
    app.use(plugin);
    app.use(router);
    app.mount(el);
  }
});
