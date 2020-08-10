<template>
  <section class="section">
    <div v-if="true" class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>デバッグ領域 開始</p>
        </div>
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>{{ oha }}</p>
        </div>
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>デバッグ領域 終了</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p>スタッフロールに名前が載る権利</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="yourNameInTheStaffRoll"
              native-value="yes"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="yourNameInTheStaffRoll"
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
    oha() {
      return this.$store.getters['rewards/getDebug']
    },
    yourNameInTheStaffRoll: {
      get() {
        return this.$store.state.rewards.yourNameInTheStaffRoll
      },
      set(value) {
        this.$store.commit('rewards/setYourNameInTheStaffRoll', value)
      },
    },
  },
}
</script>
