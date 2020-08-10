<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            地名を命名できる
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="nameALocation"
              native-value="true"
              type="is-success"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="nameALocation"
              native-value="whichever"
              type="is-info"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <span>どちらでも</span>
            </b-radio-button>
            <b-radio-button
              v-model="nameALocation"
              native-value="false"
              type="is-danger"
              class="column is-4-mobile is-4-tablet is-4-desktop"
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
    nameALocation: {
      get() {
        return this.$store.state.rewards.nameALocation
      },
      set(value) {
        this.$store.commit('rewards/setNameALocation', value)
      },
    },
  },
  watch: {
    nameALocation: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
