export default {
  strict: true,
  namespaced: true,
  state: {
    ostCd: 'false',
  },
  mutations: {
    setOstCd(state, value) {
      state.ostCd = value
    },
  },
}
