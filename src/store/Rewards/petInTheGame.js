export default {
  strict: true,
  namespaced: true,
  state: {
    petInTheGame: 'no',
  },
  mutations: {
    setPetInTheGame(state, value) {
      state.petInTheGame = value
    },
  },
}
