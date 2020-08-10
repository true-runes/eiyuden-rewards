export default {
  strict: true,
  namespaced: true,
  state: {
    nameALocation: 'whichever',
  },
  mutations: {
    setNameALocation(state, value) {
      state.nameALocation = value
    },
  },
}
