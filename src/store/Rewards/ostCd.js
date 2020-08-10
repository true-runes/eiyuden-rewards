export default {
  strict: true,
  namespaced: true,
  state: {
    ostCd: '',
  },
  mutations: {
    setOstCd(state, value) {
      state.ostCd = value
    },
  },
}
