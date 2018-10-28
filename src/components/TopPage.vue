<template lang="pug">
.toppage
  MyHeader()
  .body-content
    MyEntryForm(v-model='qty')
  MyFooter()
</template>

<script>
import sharedLib from '../Shared.js'

export default {
  name: 'TopPage',
  mixins: [sharedLib],
  data () {
    return {
      qty: 0
    }
  },
  mounted () {
    this.qty = this.$store.getters.manju.qty
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
