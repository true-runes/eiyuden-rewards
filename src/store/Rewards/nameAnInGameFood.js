export default {
  strict: true,
  namespaced: true,
  state: {
    nameAnInGameFood: 'whichever',
  },
  mutations: {
    setNameAnInGameFood(state, value) {
      state.nameAnInGameFood = value
    },
  },
}
