export default {
  strict: true,
  namespaced: true,
  state: {
    catInTheGame: '',
  },
  mutations: {
    setCatInTheGame(state, value) {
      state.catInTheGame = value
    },
  },
}
