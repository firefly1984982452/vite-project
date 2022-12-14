
<template>
  <!-- 列表 -->
  <el-table :data="tableData" style="width: 100%" height="calc(100vh - 300px)">
    <el-table-column prop="cluster" label="集群名称" width="220" />
    <el-table-column prop="brokerNO" label="实例编号" width="70" />
    <el-table-column prop="brokerName" label="实例名称" show-overflow-tooltip />
    <el-table-column prop="brokerAddress" label="服务地址" show-overflow-tooltip />
    <el-table-column prop="brokerVersionDesc" label="版本号" show-overflow-tooltip />
    <el-table-column prop="productionTps" label="生产消息/Tps" show-overflow-tooltip />
    <el-table-column prop="consumeTps" label="消费消息/Tps" show-overflow-tooltip />
    <el-table-column prop="msgPutTotalTodayNow" label="今日消费数量" align="right" width="120" />
    <el-table-column prop="msgGetTotalTodayNow" label="今日生产数量" align="right" width="120" />
  </el-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { getBrokerList } from '../../api/message'

/** 获取表格数据 **/
const tableData = ref<Array<any>>([])
/** 搜索条件 **/
const params = ref<any>({
  cluster: '',
  brokerNO: '',
  brokerName: '',
  brokerVersionDesc: '',
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
