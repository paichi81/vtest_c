<template lang="pug">
.header
  v-toolbar(:color="title_color",flat)
    v-toolbar-side-icon
    v-toolbar-title(@click='logp') {{title}}
    v-spacer
    v-toolbar-items
      v-layout.align-end
        v-flex
          MyInfoCart(color="purple",badge_color="orange")
    MyClock
</template>

<script>
export default {
  name: 'TopPage',
  // props: {},
  data () {
    return {
      title_str: 'TITLE HERE',
      today: new Date(),
      title_color: 'green lighten-3',
      qty: 0
    }
  },
  mounted () {
  },
  updated () {
  },
  computed: {
    title () {
      return this.title_str.toLowerCase()
    },
    manjuQty () {
      return this.$store.state.manju.qty
    },
    dispQty () {
      return true
    }
  },
  filter: {
  },
  methods: {
    logp () {
      console.log(this.$store.state)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
