<template>
    <p>Hello, welcome to your first Inertia app!</p>
</template>


<script setup>
import {Head} from '@inertiajs/vue3'
import {onMounted} from "vue";

onMounted(()=>{
  console.log('你好啊')
})
</script>


