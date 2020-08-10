export default {
  strict: true,
  namespaced: true,
  state: {
    nameALocation: 'no',
  },
  mutations: {
    setNameALocation(state, value) {
      state.nameALocation = value
    },
  },
}
