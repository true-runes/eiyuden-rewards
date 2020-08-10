export default {
  strict: true,
  namespaced: true,
  state: {
    nameInArtbook: '',
  },
  mutations: {
    setNameInArtbook(state, value) {
      state.nameInArtbook = value
    },
  },
}
