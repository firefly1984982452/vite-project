<template>
  <div class="page">
    <div class="left-menu">
        <el-tag><router-link to="/a">去文件一</router-link></el-tag>
        <el-tag><router-link to="/b">去文件二</router-link></el-tag>
    </div>
    <div class="right-page">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100vw;
  display: flex;

  .left-menu {
    width: 100px;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
  }

  .right-page {
    flex: 1;
  }
}
</style>
