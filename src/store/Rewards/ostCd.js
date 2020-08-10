export default {
  strict: true,
  namespaced: true,
  state: {
    ostCd: 'no',
  },
  mutations: {
    setOstCd(state, value) {
      state.ostCd = value
    },
  },
}
