// 共用する部分

import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Shared',
  // props: {'value'},
  data () {
    return {
    }
  },
  mounted () {

  },
  updated () {

  },
  computed: {

  },
  filters: {
    strftime (date, format) {
      return moment(date).format(format)
    },
    localeNum (val) {
      return Number(val).toLocaleString()
    }
  },
  methods: {
    get_json (url) {
      axios.get(url).then((res) => {
        return res.data
      })
    }
  }
}
