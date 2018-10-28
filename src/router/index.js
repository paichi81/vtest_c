import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import TopPage from '@/components/TopPage'
import header from '@/components/header'
import footer from '@/components/footer'
import Clock from '@/components/clock'
import MyEntryForm from '@/components/EntryForm'
import InfoCart from '@/components/InfoCart'

// import Shared from '@/components/Shared'
// Vue.use(Shared)

Vue.component('MyHeader', header)
Vue.component('MyFooter', footer)
Vue.component('MyClock', Clock)
Vue.component('MyEntryForm', MyEntryForm)
Vue.component('MyInfoCart', InfoCart)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    }
  ]
})
