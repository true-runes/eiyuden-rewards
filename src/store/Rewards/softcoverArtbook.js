export default {
  strict: true,
  namespaced: true,
  state: {
    softcoverArtbook: 'no',
  },
  mutations: {
    setSoftcoverArtbook(state, value) {
      state.softcoverArtbook = value
    },
  },
}
