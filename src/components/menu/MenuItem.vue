<template>
    <div></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Menuitem } from './MenuItem';

defineProps<{
    route: Menuitem;
}>();

</script>

<style scoped></style>
