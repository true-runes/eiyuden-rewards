export default {
  strict: true,
  namespaced: true,
  state: {
    digitalCd: 'whichever',
  },
  mutations: {
    setDigitalCd(state, value) {
      state.digitalCd = value
    },
  },
}
