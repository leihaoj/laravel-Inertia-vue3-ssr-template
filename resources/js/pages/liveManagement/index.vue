<template>
  <Head />
  <h1>我是live页面</h1>
  {{ num }}
  <button @click="onNumChange">点击</button>
  <p>新的内容是否加载</p>
</template>

<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const props = defineProps({ info: Object });

const dialog_visible = ref<boolean>(false);
const num = ref(1);

const onNumChange = () => {
  num.value += 1;
};
</script>
