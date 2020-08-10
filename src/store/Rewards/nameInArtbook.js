export default {
  strict: true,
  namespaced: true,
  state: {
    nameInArtbook: 'no',
  },
  mutations: {
    setNameInArtbook(state, value) {
      state.nameInArtbook = value
    },
  },
}
