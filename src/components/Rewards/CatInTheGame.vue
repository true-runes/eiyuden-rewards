<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            ゲーム中にネコを登場させられる
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="catInTheGame"
              native-value="true"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="catInTheGame"
              native-value="false"
              type="is-danger"
              class="column"
            >
              <b-icon icon="close"></b-icon>
              <span>ほしくない</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    catInTheGame: {
      get() {
        return this.$store.state.rewards.catInTheGame
      },
      set(value) {
        this.$store.commit('rewards/setCatInTheGame', value)
      },
    },
  },
  watch: {
    catInTheGame: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
