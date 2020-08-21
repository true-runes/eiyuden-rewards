export default {
  strict: true,
  namespaced: true,
  state: {
    petInTheGame: 'whichever',
  },
  mutations: {
    setPetInTheGame(state, value) {
      state.petInTheGame = value
    },
  },
}
