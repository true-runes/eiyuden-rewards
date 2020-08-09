<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <p>スタッフロールに名前が載る権利</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-4-tablet is-3-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="dlVersion"
              native-value="yes"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="dlVersion"
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
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters(['getCurrentTimeGoGo']),
    hogeBar() {
      return this.$store.state.rewards.currentTime
    },
  },
}
</script>
