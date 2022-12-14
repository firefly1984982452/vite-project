<script setup lang="ts">
import * as echarts from "echarts";
import { provide } from "vue";
provide("echarts", echarts);
</script>

<template>
  <header>header</header>
  <router-view />
</template>

<style scoped>
</style>
