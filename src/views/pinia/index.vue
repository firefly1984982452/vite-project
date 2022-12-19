<template>
  <div>
    <header>
      <h1>pinia测试</h1>
    </header>
    <el-card>
      <p>状态：{{ statu }}</p>
      <p>总数：{{ total }}</p>
      <p>请求：{{ request }}</p>
      <p>总数*10：{{ totals }}</p>
      <p>其它：{{ user.getStatuTotal }}</p>
      <p>{{ user.getNewTotal(3) }}</p>
    </el-card>
    <el-card>
      <p>子组件操作：</p>
      <TestText />
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import TestText from './components/test-text.vue'
import { useUserStore } from '@/store/user';
const user = useUserStore();
const { statu, total, request } = storeToRefs(user);
const totals = user.getTotal

</script>