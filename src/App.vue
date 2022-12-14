<script setup lang="ts">
import * as echarts from "echarts";
import { provide } from "vue";
import HelloWorld from './components/HelloWorld.vue'
import Echarts from './components/Echarts.vue'
provide("echarts", echarts);
</script>

<template>
  <header>test</header>
  <HelloWorld msg="test" />
  <Echarts />
</template>

<style scoped>
</style>
