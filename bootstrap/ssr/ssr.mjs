import {unref, useSSRContext, createSSRApp, h} from "vue";
import {ssrRenderComponent, ssrInterpolate} from "vue/server-renderer";
import {Head, createInertiaApp} from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import {renderToString} from "@vue/server-renderer";

const _sfc_main = {
    __name: "index",
    __ssrInlineRender: true,
    props: {info: Object},
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(unref(Head), {
                title: __props.info.title
            }, null, _parent));
            _push(`<h1>${ssrInterpolate(__props.info.title)}</h1><p>Hello, welcome to your first Inertia app!</p><!--]-->`);
        };
    }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/index.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main
}, Symbol.toStringTag, {value: "Module"}));
createServer(
    (page) => createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = /* @__PURE__ */ Object.assign({"./Pages/Home/index.vue": __vite_glob_0_0});
            return pages[`./Pages/${name}.vue`];
        },
        setup({App, props, plugin}) {
            return createSSRApp({
                render: () => h(App, props)
            }).use(plugin);
        }
    })
);
