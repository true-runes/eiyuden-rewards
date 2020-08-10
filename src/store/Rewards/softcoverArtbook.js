export default {
  strict: true,
  namespaced: true,
  state: {
    softcoverArtbook: '',
  },
  mutations: {
    setSoftcoverArtbook(state, value) {
      state.softcoverArtbook = value
    },
  },
}
