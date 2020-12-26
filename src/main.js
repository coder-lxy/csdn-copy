import Vue from 'vue'
import App from './App.vue'
import "./assets/style/reset.css"
import "./assets/style/global.css"
import router from "./routes/index"
import store from "./store/index"
import axios from "axios";
// import jwtDecode from "jwt-decode"
import { renewal } from "./services/blogService"

Vue.config.productionTip = false
//允许携带cookie 跨域访问关键
//axios.defaults.withCredentials = true
// http response 响应拦截器
var isLock = false
axios.interceptors.request.use(config => {
  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值 

  let token = localStorage.getItem('token');
  console.log(token);
  let userInfo = localStorage.getItem('userInfo')
  if (token) {
    console.log(userInfo);
    store.commit('setToken',token)
    store.commit('setUserInfo', JSON.parse(userInfo))
    // console.log(userInfo);
    store.commit('changeIsLogin',true)
    var expirTime = 60480000
    // var expirTime = 5000
    var startTime = localStorage.getItem("startTime")
    var endTime = Date.now()
    if ((endTime - startTime) > expirTime) {
      if (!isLock) {
        isLock = true
        renewal()
      }
    }
    config.headers.token = token
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行 
    //config.headers['token'] = localStorage.token;
    // const decoded = jwtDecode(token);
    // localStorage.setItem('userInfo',JSON.stringify(decoded))
    // store.commit('setToken',token)

  }
  return config;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// http response 响应拦截器
axios.interceptors.response.use(response => {
  // 在接收响应做些什么，例如跳转到登录页
  // console.log(response);
  if (response.data.code == -1) {
    router.push({
      path: '/login'
    })
  }
  let token = response.headers.token;
  console.log(token);
  if (token) {
    let userInfo = response.data.data
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行 
    localStorage.setItem('token', token)
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    console.log(localStorage.getItem('userInfo'));
  }
  return response;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
