export default {
  strict: true,
  namespaced: true,
  state: {
    digitalCd: 'false',
  },
  mutations: {
    setDigitalCd(state, value) {
      state.digitalCd = value
    },
  },
}
