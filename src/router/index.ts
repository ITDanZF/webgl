import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/basic',
        name: 'basic',
        meta: {
            showInMenu: true,
        },
        children: [
            {
                path: 'less01',
                name: 'less01',
                meta: {
                    showInMenu: true,
                },
                component: () => import('@/views/lessons/less01.vue'),
            },
        ],
    },
    {
        path: '/',
        name: 'home',
        meta: {
            showInMenu: true,
        },
        component: () => import('@/views/home.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
