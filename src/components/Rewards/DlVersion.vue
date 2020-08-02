<template>
  <section>
    <p>ダウンロード版</p>
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
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['dlVersion']),
    dlVersion: {
      get() {
        return this.$store.state.dlVersion
      },
      set(value) {
        this.$store.commit('setDlVersion', value)
      },
    },
  },
  methods: {
    ...mapMutations(['setDlVersion']),
  },
}
</script>
