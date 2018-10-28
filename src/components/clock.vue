<template lang="pug">
.clock
  span.hour {{hh}}
  span(:class="isEven ? 'is-white' : 'is-black'") :
  span.min {{mm}}
</template>

<script>
import sharedLib from '../Shared.js'

export default {
  name: 'Clock',
  mixins: [sharedLib],
  mounted () {
    setInterval( () => { this.getSecond() }, 1000 )
  },
  computed: {
    hh () { return this.$moment().format('hh') },
    mm () { return this.$moment().format('mm') }
  },
  methods: {
    getSecond () {
      this.isEven = (this.$moment().second() % 2 === 0)
    }
  },
  data () {
    return {
      isEven: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.is-black { color: #000 }
.is-white { color: #fff }

.clock {
  font-size: 14pt
}

hour {
}
min {
}
csep {
}
csep_even {
}
csep_odd {
}
</style>
