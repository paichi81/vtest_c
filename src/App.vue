<template lang="pug">
v-app#app
  router-view
</template>

<script>
import Vue from 'vue'
import sharedLib from './Shared.js'
Vue.use(sharedLib)

export default {
  name: 'App',
  mixins: [sharedLib]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
