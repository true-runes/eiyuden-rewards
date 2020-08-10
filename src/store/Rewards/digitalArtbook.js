export default {
  strict: true,
  namespaced: true,
  state: {
    digitalArtbook: 'no',
  },
  mutations: {
    setDigitalArtbook(state, value) {
      state.digitalArtbook = value
    },
  },
}
