<template>
  <div class="le-layout">
    <Head :title="info.title"></Head>
    <Navigation></Navigation>
    <div class="le-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Head } from "@inertiajs/vue3";
import Navigation from "./components/navigation";
import { useRoute, useRouter } from "vue-router";
import { slashStart, windowExist } from "@/utils/tool";

const props = defineProps({ info: Object });
const router = useRouter();
const route = useRoute();

if (router && router.push && props.info?.path) {
  let path = slashStart(props.info.path);
  if (path != route.path) {
    router.replace({
      path: path,
    });
  }
}
</script>

<style lang="less">
.le-layout {
  width: 100%;
  height: 100%;
  display: flex;
  .le-content {
  }
}
</style>
