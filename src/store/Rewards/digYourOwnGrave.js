export default {
  strict: true,
  namespaced: true,
  state: {
    nameALocation: 'whichever',
  },
  mutations: {
    setDigYourOwnGrave(state, value) {
      state.digYourOwnGrave = value
    },
  },
}
