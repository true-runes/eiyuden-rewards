export default {
  strict: true,
  namespaced: true,
  state: {
    softcoverArtbook: 'whichever',
  },
  mutations: {
    setSoftcoverArtbook(state, value) {
      state.softcoverArtbook = value
    },
  },
}
