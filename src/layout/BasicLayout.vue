<template>
  <div class="page">
    <div class="left-menu">
      <router-link :to="item.path" v-for="(item,index) in menuList" :key="index">
        <div class="item">{{ item.name }}</div>
      </router-link>
    </div>
    <div class="right-page">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
let menuList = router.options.routes[0].children || []
</script>

<style scoped lang="scss">
.page {
  width: 100vw;
  display: flex;

  .left-menu {
    width: 100px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #eee;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 20px 0;
      color: #333;
      font-size: 14px;
    }
  }

  .right-page {
    flex: 1;

  }
}
</style>
