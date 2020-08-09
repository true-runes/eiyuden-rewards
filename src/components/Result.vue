<template>
  <div>
    Result
    <h1>dlversion: {{ getMirai }}</h1>
    <h1>packageversion: {{ getFuture }}</h1>

    <div class="buttons">
      <button class="button is-small" @click="toast">
        入力内容をリセットする
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getMirai', 'getFuture']),
  },
  methods: {
    toast() {
      this.$buefy.toast.open('Something happened')
    },
    success() {
      this.$buefy.toast.open({
        message: 'Something happened correctly!',
        type: 'is-success',
      })
    },
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: `Something's not good, also I'm on bottom`,
        position: 'is-bottom',
        type: 'is-danger',
      })
    },
  },
}
</script>

<style scoped>
.kadlu-sticky {
  position: sticky;
  top: 1.4rem;
}
</style>
