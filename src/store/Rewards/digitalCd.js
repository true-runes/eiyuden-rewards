export default {
  strict: true,
  namespaced: true,
  state: {
    digitalCd: '',
  },
  mutations: {
    setDigitalCd(state, value) {
      state.digitalCd = value
    },
  },
}
