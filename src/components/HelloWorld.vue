<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <p>{{ msg }}</p>
  <el-button type="primary" :icon="Search">Search</el-button>
</template>

<style scoped>
</style>
