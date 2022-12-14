<template>
  <div class="page">
    <div class="left-menu">
      <router-link to="/a">
        <div class="item">菜单1</div>
      </router-link>
      <router-link to="/b">
        <div class="item">菜单2</div>
      </router-link>
      <router-link to="/table">
        <div class="item">table</div>
      </router-link>
      
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
    }
  }

  .right-page {
    flex: 1;
    
  }
}
</style>
