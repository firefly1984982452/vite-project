
<template>
  <!-- 列表 -->
  <el-table :data="tableData" style="width: 100%" height="calc(100vh - 300px)">
    <el-table-column prop="cluster" label="集群名称" show-overflow-tooltip />
    <el-table-column prop="brokerName" label="实例名称" show-overflow-tooltip />
    <el-table-column prop="topic" label="Topic名称" show-overflow-tooltip />
    <el-table-column prop="brokerAddress" label="服务地址" show-overflow-tooltip />
    <el-table-column prop="readQueueNums" label="读队列数量" align="right" width="80" />
    <el-table-column prop="writeQueueNums" label="写队列数量" align="right" width="80" />
    <el-table-column prop="version" label="Topic权限" width="120">
      <template #default="scope">
        <el-tag v-if="(scope.row.perms == 2 || scope.row.perms == 6)" effect="plain" style="color:#3776F3">读</el-tag>
        <el-tag v-if="(scope.row.perms == 4 || scope.row.perms == 6)" effect="plain" style="color:#66CE7D">写</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { getBrokerList } from '@/api/message'

/** 获取表格数据 **/
const tableData = ref<Array<any>>([])
/** 搜索条件 **/
const params = ref<any>({
  pageNum: 1,
  pageSize: 10,
})
const getList = async () => {
  tableData.value = []
  getBrokerList(params.value)
    .then((res) => {
      tableData.value = res.data.data.list || []
    })
}
getList()
</script>

<style scoped>

</style>
