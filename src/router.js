import Vue from 'vue'
import Router from 'vue-router'

const index = () => import("./views/index/index");
const fenlei = () => import("./views/fenlei/fenlei");
const mine = () => import("./views/mine/mine");
const shopcar = () => import("./views/shopcar/shopcar");

Vue.use(Router)

export default new Router({
  routes: [
    { path: "", redirect: "/index" },
    { path: "/index", component: index },
    { path: "/mine", component: mine },
    { path: "/fenlei", component: fenlei },
    { path: "/shopcar", component: shopcar },
  ]
})
