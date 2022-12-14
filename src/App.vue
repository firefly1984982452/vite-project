<script setup lang="ts">
import * as echarts from "echarts";
import { provide } from "vue";
provide("echarts", echarts);
</script>

<template>
  <div id="app">
    <header></header>
    <router-view class="page" />
  </div>
</template>

<style scoped lang="scss">
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 30px;
    background: url('@/assets/header.png') no-repeat;
    background-size: 100% 100%;
  }

  .page {
    flex: 1;
  }

}
</style>
