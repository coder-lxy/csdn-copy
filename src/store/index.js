import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
  state:{
    token:'',
    userInfo:'',
    isLogin:false,
    searchKey:''
  },
  mutations:{
    // 存储token方法
    // 设置token等于外部传递进来的值
    setToken(state,token) {
      state.token = token
      localStorage.setItem('token',token) // 同步存储token至localStorage
    },
    setUserInfo(state,userInfo) {
      localStorage.setItem('userInfo',JSON.stringify(userInfo))
      state.userInfo=userInfo
    },
    changeSearchKey(state,value){
      state.searchKey = value
    }
  },
  getters:{
    // 获取token方法
    // 判断是否有token,如果没有重新赋值，返回给state的token
    getToken(state) {
      if(!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state
    }
  },
  actions: {                 //推荐使用的异步修改数据仓库
    setSearchKey(context,value){   
      context.commit('changeSearchKey',value)
   }
  }

});
export default store;
