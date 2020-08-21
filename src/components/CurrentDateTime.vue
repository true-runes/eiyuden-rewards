<template>
  <section class="section">
    <div class="container">
      <div v-html="currentDateTimeWithText"></div>
    </div>
  </section>
</template>

<script>
import 'dayjs/locale/ja'
import dayjs from 'dayjs'
dayjs.locale('ja')

export default {
  data: function () {
    return {
      utcCurrentDateTime: '',
    }
  },
  computed: {
    currentDateTimeWithText: function () {
      if (this.utcCurrentDateTime === '') return 'ただいまの日時は...'

      const dateText = dayjs(this.utcCurrentDateTime).format(
        'YYYY年MM月DD日 (dd)',
      )
      const timeText = dayjs(this.utcCurrentDateTime).format('HH:mm:ss')
      return `ただいまの日時は<br />${dateText}<br />${timeText}<br />です！`
    },
  },
  mounted: function () {
    const that = this

    setInterval(function () {
      that.utcCurrentDateTime = Date.now()
    }, 1000)
  },
}
</script>

<style scoped></style>
