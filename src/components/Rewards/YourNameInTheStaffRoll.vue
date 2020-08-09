<template>
  <section>
    <p>スタッフロールに名前が載る権利</p>
    <b-field>
      <b-radio-button v-model="dlVersion" native-value="yes" type="is-success">
        <b-icon icon="check" size="is-small"></b-icon>
        <span>ほしい</span>
      </b-radio-button>

      <b-radio-button v-model="dlVersion" native-value="no" type="is-danger">
        <b-icon icon="close"></b-icon>
        <span>いらない</span>
      </b-radio-button>
    </b-field>

    <div>
      ここに表示される
      {{ hogeBar }}
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
