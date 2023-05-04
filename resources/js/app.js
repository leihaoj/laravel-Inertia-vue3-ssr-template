import {createApp, createSSRApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'

createInertiaApp({
    id: 'app',
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createSSRApp({render: () => h(App, props)})
            // createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el)
    },
})
