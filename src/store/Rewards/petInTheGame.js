export default {
  strict: true,
  namespaced: true,
  state: {
    petInTheGame: 'false',
  },
  mutations: {
    setPetInTheGame(state, value) {
      state.petInTheGame = value
    },
  },
}
