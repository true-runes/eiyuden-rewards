export default {
  strict: true,
  namespaced: true,
  state: {
    nameInArtbook: 'false',
  },
  mutations: {
    setNameInArtbook(state, value) {
      state.nameInArtbook = value
    },
  },
}
