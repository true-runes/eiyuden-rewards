export default {
  strict: true,
  namespaced: true,
  state: {
    digitalArtbook: '',
  },
  mutations: {
    setDigitalArtbook(state, value) {
      state.digitalArtbook = value
    },
  },
}
