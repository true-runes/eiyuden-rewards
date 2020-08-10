<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>結果表示場所</p>
        </div>
      </div>
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <button class="button is-small" @click="toast">
            入力内容をリセットする
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
