<template>
  <Head />
  <h1>我是首页</h1>
  {{ num }}
  <button @click="onNumChange">跳转到live页面</button>
</template>

<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { slashStart } from "@/utils/tool";

const router = useRouter();
const props = defineProps({ info: Object });

const dialog_visible = ref<boolean>(false);
const num = ref(1);

const onNumChange = () => {
  router.push({
    path: "/live"
  });
};
</script>
