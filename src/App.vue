<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/index" activecolor="blue">
        <img src="./assets/img/tabbar/1.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/11.png" alt slot="itemiconActive" />
        <div slot="itemtitle">首页</div>
      </tabbaritem>
      <tabbaritem path="/fenlei">
        <img src="./assets/img/tabbar/2.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/22.png" alt slot="itemiconActive" />
        <div slot="itemtitle">分类</div>
      </tabbaritem>
      <tabbaritem path="/mine">
        <img src="./assets/img/tabbar/3.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/33.png" alt slot="itemiconActive" />
        <div slot="itemtitle">我的</div>
      </tabbaritem>
      <tabbaritem path="/shopcar">
        <img src="./assets/img/tabbar/4.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/44.png" alt slot="itemiconActive" />
        <div slot="itemtitle">购物车</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
export default {
  components: {
    tabbar,
    tabbaritem
  }
};
</script>
<style>
</style>
