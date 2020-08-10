<template>
  <section>
    <p>{{ rewardName }}</p>
    <b-field>
      <b-radio-button
        v-model="radioButton"
        native-value="yes"
        type="is-success"
      >
        <b-icon icon="check" size="is-small"></b-icon>
        <span>ほしい</span>
      </b-radio-button>

      <b-radio-button v-model="radioButton" native-value="no" type="is-danger">
        <b-icon icon="close"></b-icon>
        <span>いらない</span>
      </b-radio-button>
    </b-field>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      // helloWorld: 'no',
    }
  },
  computed: {
    ...mapState([
      'count',
      'show1',
      'show2',
      'selectedValue',
      'dlVersion',
      'packageVersion',
    ]),
    ...mapGetters(['getAllProducts', 'getFilteredList']),
    radioButton: {
      get() {
        return this.$store.state.packageVersion
        // return this.helloWorld
      },
      set(value) {
        const mName = 'setPackageVersion'
        this.$store.commit(mName, value)
        // this.helloWorld = value
      },
    },
  },
  props: {
    rewardName: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    ...mapMutations([
      // 'toggleShow1Boolean',
      // 'toggleShow2Boolean',
      'mergeUserSelections',
      'setDlVersion',
      'setPackageVersion',
    ]),
    // calculate: function () {
    //   console.log('Hello, calculate() methods World!')
    // },
  },
  // watch: {
  //   radioButton: function (newValue, oldValue) {
  //     this.calculate()
  //     console.log(`oldValue: ${oldValue}`)
  //     console.log(`newValue: ${newValue}`)
  //     console.log(typeof newValue)
  //     this.$store.commit('mergeUserSelections')
  //   },
  // },
}
</script>
