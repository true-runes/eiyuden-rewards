export default {
  strict: true,
  namespaced: true,
  state: {
    digitalArtbook: 'whichever',
  },
  mutations: {
    setDigitalArtbook(state, value) {
      state.digitalArtbook = value
    },
  },
}
