export default {
  strict: true,
  namespaced: true,
  state: {
    catInTheGame: 'no',
  },
  mutations: {
    setCatInTheGame(state, value) {
      state.catInTheGame = value
    },
  },
}
