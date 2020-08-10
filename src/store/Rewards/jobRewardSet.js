export default {
  strict: true,
  namespaced: true,
  state: {
    jobRewardSet: '',
  },
  mutations: {
    setJobRewardSet(state, value) {
      state.jobRewardSet = value
    },
  },
}
