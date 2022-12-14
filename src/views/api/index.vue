
<template>
  <!-- 列表 -->
  <el-table :data="tableData" style="width: 100%" height="calc(100vh - 300px)">
    <el-table-column prop="title" label="title" show-overflow-tooltip />
    <el-table-column prop="desc" label="desc" show-overflow-tooltip />
    <el-table-column prop="hotScore" label="hotScore" show-overflow-tooltip />
  </el-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { hotlist } from '@/api/message'

/** 获取表格数据 **/
const tableData = ref<Array<any>>([])
const getList = async () => {
  tableData.value = []
  hotlist()
    .then((res) => {
      tableData.value = res.data.data || []
    })
}
getList()
</script>

<style scoped>

</style>
