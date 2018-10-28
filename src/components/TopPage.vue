<template lang="pug">
.toppage
  MyHeader()
  .body-content
    MyEntryForm()
  MyFooter()
</template>

<script>
import sharedLib from '../Shared.js'

export default {
  name: 'TopPage',
  mixins: [sharedLib],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$store.getters.user)
    console.log(this.$store.getters.manju)
  },
  updated () {
  },
  computed: {
  },
  filter: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-text-field input {
  font-family: Arial;
  text-align: center;
  font-size: 36pt;
}
</style>
