export default {
  strict: true,
  namespaced: true,
  state: {
    digitalCd: 'no',
  },
  mutations: {
    setDigitalCd(state, value) {
      state.digitalCd = value
    },
  },
}
