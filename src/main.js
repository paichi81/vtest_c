// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import vuetify from 'vuetify'
import axios from 'axios'
import moment from 'moment'

Vue.use(vuetify, {
  iconfont: ['mdi', 'fa'] // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.prototype.$moment = moment
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
