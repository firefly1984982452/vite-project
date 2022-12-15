<script setup lang="ts">
import {
  Check,
  Edit,
  Search,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  
  <el-icon :size="30">
    <component is="Delete" />
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
