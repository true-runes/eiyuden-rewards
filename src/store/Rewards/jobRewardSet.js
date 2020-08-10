export default {
  strict: true,
  namespaced: true,
  state: {
    jobRewardSet: 'false',
  },
  mutations: {
    setJobRewardSet(state, value) {
      state.jobRewardSet = value
    },
  },
}
