<template>
  <section class="section">
    <p>パッケージ版</p>
    <br />
    <b-field>
      <b-radio-button
        v-model="packageVersion"
        native-value="yes"
        type="is-success"
      >
        <b-icon icon="check" size="is-small"></b-icon>
        <span>ほしい</span>
      </b-radio-button>

      <b-radio-button
        v-model="packageVersion"
        native-value="no"
        type="is-danger"
      >
        <b-icon icon="close"></b-icon>
        <span>いらない</span>
      </b-radio-button>
    </b-field>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['packageVersion']),
    packageVersion: {
      get() {
        return this.$store.state.packageVersion
      },
      set(value) {
        this.$store.commit('setPackageVersion', value)
      },
    },
  },
  methods: {
    ...mapMutations(['setPackageVersion']),
  },
}
</script>
