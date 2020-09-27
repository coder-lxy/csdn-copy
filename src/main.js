import Vue from 'vue'
import App from './App.vue'
import "./assets/style/reset.css"
import "./assets/style/global.css"
import router from "./routes/index"
import store from "./store/index"
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   // 获取用户登录成功后储存的登录标志
//   let getFlag = localStorage.getItem("Flag");
//   // 如果登录标志存在且为isLogin, 即用户已登录
//   if(getFlag==="isLogin") {
//     store.state.isLogin = true
//     next()
    
//   }
// })
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
