export default {
  strict: true,
  namespaced: true,
  state: {
    nameALocation: '',
  },
  mutations: {
    setNameALocation(state, value) {
      state.nameALocation = value
    },
  },
}
