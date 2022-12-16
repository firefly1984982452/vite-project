

<template>
  <div class="left-menu">
    <el-menu default-active="3" class="el-menu-vertical-demo">
      <router-link :to="item.path" v-for="(item,index) in menuList" :key="index">
        <el-menu-item>
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
let menuList = router.options.routes[0].children || []
</script>
<style scoped lang="scss">
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
</style>
