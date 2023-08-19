import {createApp, createSSRApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'
import '../css/app.css'

createInertiaApp({
    id: 'app',
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', {eager: true})
        return pages[`./pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        // const app = createSSRApp({render: () => h(App, props)});
        const app = createApp({render: () => h(App, props)});
        app.use(plugin);
        app.mount(el);
    },
})
