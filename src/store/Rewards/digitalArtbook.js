export default {
  strict: true,
  namespaced: true,
  state: {
    digitalArtbook: 'false',
  },
  mutations: {
    setDigitalArtbook(state, value) {
      state.digitalArtbook = value
    },
  },
}
