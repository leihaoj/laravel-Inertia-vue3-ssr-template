<template>
  <div>
    {{ label }}
    <button @click="changeStatus">点击修改状态</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const label = ref("我是header组件");

const changeStatus = () => {
  label.value = "修改后header";
};
</script>

<style lang="less"></style>
