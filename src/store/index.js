import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
// import Cookies from 'js-cookie'

import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

// いったん単一とする

// module.exports = {
//   mode: 'production'
// }
const user = {
  user_id: null,
  name: '',
  keycard: '',
  access_class: ''
}

const manjuObj = {
  qty: 5
}

// 操作
const mutations = {
  logout (state) {
    state.user.user_id = null
    state.user.name = ''
    state.user.keycard = ''
    state.user.access_class = ''
  },
  login (state, o) {
    // Ajax処理ここにかいていいの?
    state.user.user_id = o.user_id
    state.user.name = o.name
    state.user.keycard = o.keycard
    state.user.access_class = o.access_class
  },
  manju_qty (state, qty) {
    console.log(qty + 'にしたで')
    state.manju.qty = qty
  }
}

const getters = {
  user (state) { return state.user },
  user_id (state) { return state.user.user_id },
  manju (state) { return state.manju }
}

export default new Vuex.Store({
  state: {
    user: user,
    manju: manjuObj
  },
  getters,
  actions,
  mutations,
  /// strict: process.env.NODE_ENV != 'production'
  plugins: [
    createPersistedState({
      key: '',
      paths: ['manju', 'user'],
      storage: window.sessionStorage
      // storage: {
      //   getItem: key => Cookies.get(key),
      //   setItem: (key, value) => Cookies.set(key, value, {
      //     expires: 3,
      //     secure: true
      //   }),
      //   removeItem: key => Cookies.remove(key)
      // }
    })
  ]
})
