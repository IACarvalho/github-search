import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Result" */ "../views/Home"),
  },
  {
    path: "/result/:username",
    name: "Result",
    props: true,
    component: () => import(/* webpackChunkName: "Result" */ "../views/Result"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
