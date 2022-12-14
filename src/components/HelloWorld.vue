<script setup lang="ts">
import {
  Check,
  Edit,
  Search,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <p>{{ msg }}</p>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <Search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
  <el-button type="primary" :icon="Check">Search</el-button>
</template>

<style scoped>
</style>
