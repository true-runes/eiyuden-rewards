export default {
  strict: true,
  namespaced: true,
  state: {
    digitalGame: '',
  },
  mutations: {
    setDigitalGame(state, value) {
      state.digitalGame = value
    },
  },
}
