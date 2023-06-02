<template>
    <Head :title="info.title"/>
    <h1>{{ info.title }}</h1>
    <p>Hello, welcome to your first Inertia app!</p>
</template>


<script setup lang="ts">
import {Head} from '@inertiajs/vue3'
import {ref} from 'vue';

defineProps({info: Object})

const dialog_visible = ref<boolean>(false)
</script>


