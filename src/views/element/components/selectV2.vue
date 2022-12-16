<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { hotlist } from '@/api/message'
const value = ref('')
let options = ref<Array<any>>([])
const getList = () => {
  hotlist('kgmusic').then(res => {
    const list = res.data.data
    options = list.map((v: any,index:number) => {
      return {
        label: index+v.title,
        value: v.title
      }
    })
  })
}
onMounted(() => {
  getList();
})
</script>

<template>
  <div class="grid" style="width:100%">
    <figure>
      <el-select v-model="value" class="m-2" placeholder="Select" size="large">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <div class="figcapt">el-select</div>
    </figure>
    <figure>
      <el-select-v2 v-model="value" :options="options" placeholder="Please select" size="large" />
      <div class="figcapt">el-select-v2</div>
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
