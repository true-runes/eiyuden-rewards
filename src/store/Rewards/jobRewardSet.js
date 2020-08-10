export default {
  strict: true,
  namespaced: true,
  state: {
    jobRewardSet: 'no',
  },
  mutations: {
    setJobRewardSet(state, value) {
      state.jobRewardSet = value
    },
  },
}
