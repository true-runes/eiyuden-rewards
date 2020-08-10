export default {
  strict: true,
  namespaced: true,
  state: {
    ostCd: 'whichever',
  },
  mutations: {
    setOstCd(state, value) {
      state.ostCd = value
    },
  },
}
