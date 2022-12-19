<template>
  <el-button @click="chageStatu">更新状态</el-button>
  <el-button @click="resetStatu">重置状态</el-button>
  <el-button @click="patch">批量修改</el-button>
  <el-button @click="changeActionStatu">在action中更改状态</el-button>

</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user';
const user = useUserStore();
const chageStatu = () => {
  user.statu = user.statu == '在线' ? '离线' : '在线'
}
const resetStatu = () => {
  user.$reset();
}
const patch = () => {
  user.$patch({
    statu: '离线',
    total: 32434,
    request: 'post'
  })
}
const changeActionStatu = () => {
  user.saveStatu('其它状态……')
}
</script>