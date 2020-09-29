import Vue from 'vue'
import App from './App.vue'
import "./assets/style/reset.css"
import "./assets/style/global.css"
import router from "./routes/index"
import store from "./store/index"
import axios from "axios";
Vue.config.productionTip = false
//允许携带cookie 跨域访问关键
//axios.defaults.withCredentials = true
// http response 响应拦截器
axios.interceptors.request.use(config => {
  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值 
  let token = localStorage.getItem('token');
  // let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let isLogin = localStorage.getItem('isLogin');
  console.log(token);
  if (token) {
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行 
    //config.headers['token'] = localStorage.token;
    store.state.isLogin=isLogin;
    // store.state.userInfo=userInfo;
    // console.log(store.state.userInfo);
    // console.log(localStorage.getItem('userInfo'));
    config.headers.token = token
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
      path: 'login'
    })
  }

  let token = response.headers.token;
  if (token) {
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行 
    localStorage.setItem('token', token)
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
