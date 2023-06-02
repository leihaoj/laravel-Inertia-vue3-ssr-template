import {createApp, createSSRApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'

createInertiaApp({
    id: 'app',
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        // const app = createSSRApp({render: () => h(App, props)});
        const app = createApp({render: () => h(App, props)});
        app.use(plugin);
        app.mount(el);
    },
})
