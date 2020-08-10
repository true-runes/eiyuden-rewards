export default {
  strict: true,
  namespaced: true,
  state: {
    digitalGame: 'false',
  },
  mutations: {
    setDigitalGame(state, value) {
      state.digitalGame = value
    },
  },
}
