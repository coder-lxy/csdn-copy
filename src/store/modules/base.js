import { BASE } from '@/store/type'
export default {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: null,
    }
  },
  getters: {
    // 获取state
    [BASE.TOKEN](state) {
      return state.token
    },
    [BASE.USER_INFO](state) {
      return state.userInfo
    }
  },
  mutations: {
    // 改变state
    [BASE.TOKEN] (state, payload) {
      state.token = payload
    },
    [BASE.USER_INFO] (state, payload) {
      state.userInfo = payload
      window.localStorage.setItem('userInfo', JSON.stringify(payload))
    }
  },
  actions: {

  }
}