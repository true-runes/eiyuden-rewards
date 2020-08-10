export default {
  strict: true,
  namespaced: true,
  state: {
    catInTheGame: 'whichever',
  },
  mutations: {
    setCatInTheGame(state, value) {
      state.catInTheGame = value
    },
  },
}
