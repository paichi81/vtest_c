<template lang="pug">
.body-content
  v-card(color="blue lighten-4")
    h1 EntryForm.vue
    span 今日は {{today|strftime('YYYY年MM月DD日')}}
    br
    .entryQty
      v-layout.align-center
        v-flex.offset-md4.offset-xs4(md4,xs4)
          v-text-field(v-model='qty',@change='changeQty',type='number',label='なんぼ?')
        v-flex(md2 xd2)
          v-slider(v-model='qty',max=50000,@change='changeQty',
          thumb-label,
          prepend-icon='fa-dot-circle',append-icon='fa-circle')
    .displayQty.align-left.offset-md4.offset-xs4
      span まんじゅう {{qty|localeNum}} 個
</template>

<script>
import sharedLib from '../Shared.js'

export default {
  name: 'EntryForm',
  mixins: [sharedLib],
  data () {
    return {
      today: new Date()
      // qty: 0
    }
  },
  mounted () {
    this.qty = this.$store.getters.manju.qty
  },
  updated () {
  },
  watch: {
    'this.$store.getters.manju.qty': (oldValue, newValue) => {
      console.log(`${oldValue} -> ${newValue}`)
    }
  },
  computed: {
    qty: { // 算出プロパティに入出力はまとめられる mio本p268
      get () { return this.$store.getters.manju.qty },
      set ( value ) { this.$store.commit('manju_qty', value) }
    }
    // qty () {
    //   return this.$store.getters.manju.qty
    // }
  },
  filter: {
  },
  methods: {
    changeQty () {
      this.$store.commit('manju_qty', this.qty)
      this.$store.commit('login', { user_id: 1 })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-content{
  margin-top: 15px;
}

.v-text-field input {
  font-family: Arial;
  text-align: center;
  font-size: 36pt;
}
</style>
