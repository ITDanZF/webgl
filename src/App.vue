<script setup lang="ts">
import MenuList from './components/menu/MenuList.vue';
</script>

<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider class="AppSider">
            <MenuList />
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <RouterView />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<style lang="scss" scoped>
.AppSider {
    background-color: #000;
    color: #fff;
}
</style>
