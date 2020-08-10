export default {
  strict: true,
  namespaced: true,
  state: {
    digitalGame: 'no',
  },
  mutations: {
    setDigitalGame(state, value) {
      state.digitalGame = value
    },
  },
}
