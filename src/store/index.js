import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      items: [
      ]
    },
    userInfo: {
      isLogin: false,
      nickname: null,
      prefName: null
    }
  },
  getters: {
    isLogin(state) {
      return state.userInfo.isLogin
    }
  },
  mutations: {
    addItem(state, payload) {
      state.cart.items.push(payload.item)
    },
    deleteItem(state, payload) {
      state.cart.items.splice(payload.index, 1)
    },
    userLogin(state, payload) {
      state.userInfo.isLogin = true
      state.userInfo.nickname = payload.nickname
      state.userInfo.prefName = payload.prefName
    },
    userLogout(state) {
      state.userInfo = {
        isLogin: false,
        nickname: null,
        prefName: null
      }
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', { item })
    },
    deleteItem({ commit }, index) {
      commit('deleteItem', { index })
    },
    async userLogin({ commit }, payload) {
      const { nickname, zipCode } = payload
      const res = await axios.get('http://localhost:8080/api/search', {
        params: {
          // ここにクエリパラメータを指定する
          zipcode: zipCode,
          limit: 100
        }
      })
      if (res.data && res.data.status === 200 && res.data.results) {
        commit('userLogin', { nickname, prefName: res.data.results[0].address1 })
      }
    },
    userLogout({ commit }) {
      commit('userLogout')
    }
  },
  modules: {
  }
})
