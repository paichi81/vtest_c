<template lang="pug">
.clock
  span.hour {{hh}}
  span(:class="isEven ? 'is-white' : 'is-black' ") :
  span.min {{mm}}
</template>

<script>
export default {
  name: 'Clock',
  mounted () {
    this.setDate()
    setInterval(() => (this.setDate()), 1000)
  },
  computed: {
    hh () { return this.hours() },
    mm () { return this.min() }
  },
  methods: {
    formatTime (pp) { // 時刻ppを0埋めして返す
      return ('0' + pp).slice(-2)
    },
    setDate () {
      this.date = new Date()
      this.isEven = (this.date.getSeconds() % 2 === 0)
    },
    hours () { return this.formatTime(this.date.getHours()) },
    min () { return this.formatTime(this.date.getMinutes()) },
    sec () { return this.formatTime(this.date.getSeconds()) }
  },
  data () {
    return {
      date: new Date(),
      isEven: false,
      year: '====',
      mon: '==',
      day: '=='
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.is-black { color: #000 }
.is-white{ color: #fff }

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
