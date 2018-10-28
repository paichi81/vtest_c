<template lang="pug">
.cartIcon
  v-badge.myBadge(v-model='dispQty',overlap,left,bottom,:color='dispBadgeColor')
    span(slot='badge') {{manjuQty}}
    v-btn(fab,:color='icon_color',depressed,small,dark,@click="clearCart")
      v-icon fa-shopping-cart
</template>

<script>
import {
  // mapState,
  mapGetters,
  mapMutations
  // mapActions
} from 'vuex'

export default {
  name: 'InfoCart',
  props: {
    'color': String,
    'badge_color': String
  },
  data () {
    return {
      icon_color: 'primary',
      // badge_color: 'orange',
      qty: 0
    }
  },
  mounted () {
    this.badge_color_org = this.badge_color
    this.icon_color = this.color
  },
  updated () {
  },
  computed: {
    manjuQty () {
      let dispQty = ''
      // 999以下のときは数値,こえたら ! 表示
      if (this.$store.state.manju.qty < 999) {
        dispQty = this.$store.state.manju.qty
      } else {
        dispQty = '!'
      }
      return dispQty
    },
    dispBadgeColor () {
      let dispQty = ''
      // 999以下のときは親コンポーネントで指定された色,こえたら赤
      if (this.manju.qty < 999) {
        dispQty = this.badge_color_org
      } else {
        dispQty = 'red'
      }
      // if (this.$store.state.manju.qty < 999) {
      //   dispQty = this.badge_color_org
      // } else {
      //   dispQty = 'red'
      // }
      return dispQty
    },
    dispQty () {
      // badgeを非表示にするかどうか。0なら表示しない
      return !(this.manju.qty === 0)
      // return !(this.$store.state.manju.qty === 0)
    },
    ...mapGetters( ['manju'] )
  },
  filter: {
  },
  methods: {
    clearCart () {
      this.clearCart()
      // this.$store.commit('clearCart')
    },
    ...mapMutations( [ 'clearCart' ] )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBadge {
  top: auto;
  bottom: 0px;
  left: 0px;
  right: auto;
}

</style>
