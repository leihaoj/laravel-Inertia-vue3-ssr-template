<template>
    <Head :title="info.title"/>
    <h1>{{ info.title }}</h1>
    <p>Hello, welcome to your first Inertia app!</p>
</template>


<script setup>
import {Head} from '@inertiajs/vue3'

defineProps({info: Object})
</script>


