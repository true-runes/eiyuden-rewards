export default {
  strict: true,
  namespaced: true,
  state: {
    digYourOwnGrave: 'whichever',
  },
  mutations: {
    setDigYourOwnGrave(state, value) {
      state.digYourOwnGrave = value
    },
  },
}
