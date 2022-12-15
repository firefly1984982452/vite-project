
<template>
  <div>
    <div class="search">
      <el-select v-model="type" @change="getList">
        <el-option v-for="(value, key) in optionsObj" :label="key" :value="value" :key="value" />
      </el-select>
      <p>{{text}}</p>
    </div>
    <el-table v-loading="loading" :data="tableData" style="width: 100%" height="calc(100vh - 300px)" stripe table-layout="auto">
      <el-table-column type="index" width="50"/>
      <el-table-column :prop="key" :label="key" v-for="(value, key) in tableOptions" :key="key" show-overflow-tooltip />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { hotlist,weather } from '@/api/message'
import optionsObj from './setting'

/** 获取表格数据 **/
const type = ref('baidu')
const loading = ref(false);
const tableOptions = ref({})
const tableData = ref<Array<any>>([])
const getList = async () => {
  tableData.value = []
  loading.value = true;
  hotlist(type.value)
    .then((res) => {
      loading.value = false;
      tableData.value = res.data.data || [];
      tableOptions.value = tableData.value[0];
    })
    .catch(() => loading.value = false)
}
getList()

const text = ref('')
const getWWeather = async () => {
  weather('上海')
    .then((res) => {
      text.value = res.data.data.today_weather || '';
    })
}
getWWeather()
</script>

<style scoped>
.search{
  display: flex;
}
</style>
