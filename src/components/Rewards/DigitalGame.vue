<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>ダウンロード版のゲーム</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="digitalGame"
              native-value="yes"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="digitalGame"
              native-value="no"
              type="is-danger"
              class="column"
            >
              <b-icon icon="close"></b-icon>
              <span>いらない</span>
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
    digitalGame: {
      get() {
        return this.$store.state.rewards.digitalGame
      },
      set(value) {
        this.$store.commit('rewards/setDigitalGame', value)
      },
    },
  },
  watch: {
    digitalGame: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
