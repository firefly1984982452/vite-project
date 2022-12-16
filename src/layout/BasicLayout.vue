<template>
  <div class="page">
    <leftMenuVue />
    <div class="right-page">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import leftMenuVue from './components/leftMenu.vue';
</script>

<style scoped lang="scss">
.page {
  width: 100vw;
  display: flex;

  .right-page {
    flex: 1;
    width: calc(100vw - 150px);
  }
}
</style>
