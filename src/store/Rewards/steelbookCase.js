export default {
  strict: true,
  namespaced: true,
  state: {
    steelbookCase: 'whichever',
  },
  mutations: {
    setSteelbookCase(state, value) {
      state.steelbookCase = value
    },
  },
}
