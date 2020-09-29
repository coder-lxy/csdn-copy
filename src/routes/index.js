import VueRouter from "vue-router";
import Vue from "vue"
import config from "./config"
import store from "../store";
Vue.use(VueRouter);
var router = new VueRouter(config)
export default router;
if (localStorage.getItem('token')) {
  store.state.token=localStorage.getItem('token')
}
