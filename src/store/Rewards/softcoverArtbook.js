export default {
  strict: true,
  namespaced: true,
  state: {
    softcoverArtbook: 'false',
  },
  mutations: {
    setSoftcoverArtbook(state, value) {
      state.softcoverArtbook = value
    },
  },
}
