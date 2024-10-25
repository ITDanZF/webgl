import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    plugins: [
        vue(),
        glsl({
            include: [
                '**/*.glsl',
                '**/*.wgsl',
                '**/*.vert',
                '**/*.frag',
                '**/*.vs',
                '**/*.fs',
            ],
            warnDuplicatedImports: true,
            defaultExtension: 'glsl',
            exclude: undefined,
        }),
    ],
    base: '/',
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src'),
            },
        ],
    },
});
