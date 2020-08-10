export default {
  strict: true,
  namespaced: true,
  state: {
    catInTheGame: 'false',
  },
  mutations: {
    setCatInTheGame(state, value) {
      state.catInTheGame = value
    },
  },
}
