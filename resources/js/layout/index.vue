<template>
  <div class="le-layout">
    <Head :title="info.title"></Head>
    <Header></Header>
    {{ label }}
    <button @click="changeStatus">点击修改状态</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import Header from "./components/header";
import { useRoute, useRouter } from "vue-router";
import { slashStart, windowExist } from "@/utils/tool";

const props = defineProps({ info: Object });
const router = useRouter();
const route = useRoute();
const label = ref("我是header组件");

if (router && router.push && props.info?.path) {
  let path = slashStart(props.info.path);
  if (path != route.path) {
    router.replace({
      path: path
    });
  }
}

const changeStatus = () => {
  label.value = "修改后header";
};
</script>

<style lang="less"></style>
