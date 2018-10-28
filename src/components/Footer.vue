<template lang="pug">
.footer
  v-divider
  v-container
    v-layout
      v-flex
        .content
          h2 Footer.vue
          span Copyright(c){{year}}
</template>

<script>
import sharedLib from '../Shared.js'

export default {
  name: 'Footer',
  mixins: [sharedLib],
  data () {
    return {
    }
  },
  mounted () {
  },
  updated () {
  },
  computed: {
    year () {
      return this.$moment().format('YYYY')
    }
  },
  filter: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin-top: 33px
}
</style>
