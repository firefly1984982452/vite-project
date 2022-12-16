<script setup lang="ts">
import { ref,shallowRef } from 'vue'
import iconVue from './components/icon.vue';
import selectV2 from './components/selectV2.vue';

const elementObj = ref({
  'icon': iconVue,
  'selct': selectV2
})
const currentElement = shallowRef(iconVue)
const changeElement = (name: string) => {
  currentElement.value = elementObj.value[name]
}
</script>

<template>
  <div class="flex">
    <ul>
      <li v-for="(item, key) in elementObj" @click="changeElement(key)">{{ key }}</li>
    </ul>
    <div class="page">
      <component :is="currentElement" />
    </div>
  </div>
</template>

<style scoped lang="scss">
ul {
  width: 100px;
  background-color: rgba(0, 0, 0, .2);

  li {
    line-height: 50px;
  }
}

.page {
  flex: 1;
}
</style>
