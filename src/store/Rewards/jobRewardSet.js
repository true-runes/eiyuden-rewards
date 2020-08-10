export default {
  strict: true,
  namespaced: true,
  state: {
    jobRewardSet: 'whichever',
  },
  mutations: {
    setJobRewardSet(state, value) {
      state.jobRewardSet = value
    },
  },
}
