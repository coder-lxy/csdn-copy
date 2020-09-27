import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
  state:{
    isLogin:false,
    currentUser:{}
  },
  // getters:{
  //   // 获取登录的状态
  //   isLogin:state => state.isLogin
  // },
  // 设置属性状态
  mutations:{
    // 保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    }
  },
  // 应用mutations
  actions:{
    // 获取登录状态
    userLogin({commit}, flag) {
      commit("userStatus", flag)
    }
  }

});
export default store;
