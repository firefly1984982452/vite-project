<script setup lang="ts">
import {
  Check,
  Edit,
  Search,
} from '@element-plus/icons-vue'
</script>

<template>
  <div class="grid" style="width:100%">
    <figure>
      <el-icon :size="20">
        <Edit />
      </el-icon>
      <div class="figcapt">默认icon</div>
    </figure>
    <figure>
      <el-icon :size="30">
        <component is="Delete" />
      </el-icon>
      <div class="figcapt">component动态生成icon</div>
    </figure>
    <figure>
      <el-button type="primary">
        <el-icon style="vertical-align: middle">
          <Search />
        </el-icon>
        <span style="vertical-align: middle"> Search </span>
      </el-button>
      <div class="figcapt">button</div>
    </figure>
    <figure>
      <el-button type="primary" :icon="Check">Search</el-button>
      <div class="figcapt">button</div>
    </figure>
  </div>
</template>

<style scoped>
figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.figcapt {
  color: hotpink;
}
</style>
