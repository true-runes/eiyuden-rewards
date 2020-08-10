export default {
  strict: true,
  namespaced: true,
  state: {
    nameALocation: 'false',
  },
  mutations: {
    setNameALocation(state, value) {
      state.nameALocation = value
    },
  },
}
