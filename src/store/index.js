import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      items: [
      ]
    }
  },
  mutations: {
    addItem(state, payload) {
      state.cart.items.push(payload.item)
    },
    deleteItem(state, payload) {
      state.cart.items.splice(payload.index, 1)
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', { item })
    },
    deleteItem({ commit }, index) {
      commit('deleteItem', { index })
    }
  },
  modules: {
  }
})
