export default {
  strict: true,
  namespaced: true,
  state: {
    digitalGame: 'whichever',
  },
  mutations: {
    setDigitalGame(state, value) {
      state.digitalGame = value
    },
  },
}
