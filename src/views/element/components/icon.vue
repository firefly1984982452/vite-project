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
      <el-icon :size="30" color="#66CE7D">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.99992 11.9998C2.69145 11.9998 0 9.30838 0 5.99992C0 5.66851 0.268638 5.39987 0.60005 5.39987C0.931461 5.39987 1.07472 5.66851 1.07472 5.99992C1.07472 8.64657 3.35326 10.9246 5.99992 10.9246C7.25003 10.9246 8.43389 10.4465 9.33331 9.57836C9.5718 9.34901 9.95192 9.23009 10.1819 9.46887C10.4118 9.70735 10.4051 10.087 10.1666 10.3173C9.04206 11.4022 7.56231 11.9998 5.99992 11.9998ZM11.4361 6.58011C11.1047 6.58011 10.9242 6.33133 10.9242 5.99992C10.9242 3.35326 8.64657 1.02945 5.99992 1.02945C4.68572 1.02945 3.45895 1.55035 2.5459 2.49602C2.31655 2.73537 1.93628 2.91225 1.69809 2.68145C1.4596 2.45152 1.45293 2.07154 1.68315 1.83335C2.8241 0.650936 4.3575 0 6.00021 0C9.30867 0 12.0001 2.69145 12.0001 5.99992C12.0001 6.33133 11.7674 6.58011 11.4361 6.58011Z" />
        </svg>
      </el-icon>
      <div class="figcapt">SVG</div>
    </figure>
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
