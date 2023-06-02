import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/app.js'],
            // ssr: 'resources/js/ssr.js',
            refresh: true, // 保存时刷新
        }),
    ],
    server: {
        port: 3008,
        host: '127.0.0.1',
        proxy: {},
    },
});
