export default {
  strict: true,
  namespaced: true,
  state: {
    nameInArtbook: 'whichever',
  },
  mutations: {
    setNameInArtbook(state, value) {
      state.nameInArtbook = value
    },
  },
}
