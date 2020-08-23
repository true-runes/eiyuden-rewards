export default {
  strict: true,
  namespaced: true,
  state: {
    nameAnInGameFood: 'false',
  },
  mutations: {
    setNameAnInGameFood(state, value) {
      state.nameAnInGameFood = value
    },
  },
}
