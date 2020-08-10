<template>
  <div v-if="false">
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-mobile is-tablet is-desktop">
          <div class="column is-12-mobile is-12-tablet is-12-desktop">
            <p>結果表示場所</p>
            {{ allRewardsState }}
          </div>
        </div>

        <div v-if="false">
          <!-- FIXME: Create a button to clear store data -->
          <div class="columns is-multiline is-mobile is-tablet is-desktop">
            <div class="column is-12-mobile is-12-tablet is-12-desktop">
              <button class="button is-small" @click="toast">
                入力内容をリセットする
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    allRewardsState() {
      return this.$store.getters['rewards/getAllRewardsState']
    },
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
