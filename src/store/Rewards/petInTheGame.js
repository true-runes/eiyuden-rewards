export default {
  strict: true,
  namespaced: true,
  state: {
    petInTheGame: '',
  },
  mutations: {
    setPetInTheGame(state, value) {
      state.petInTheGame = value
    },
  },
}
