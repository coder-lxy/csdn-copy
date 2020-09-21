import Vue from 'vue'
import App from './App.vue'
import "./assets/style/reset.css"
import "./assets/style/global.css"
import router from "./routes/index"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
