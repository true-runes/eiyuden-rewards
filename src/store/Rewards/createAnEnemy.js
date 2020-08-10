export default {
  strict: true,
  namespaced: true,
  state: {
    createAnEnemy: 'whichever',
  },
  mutations: {
    setCreateAnEnemy(state, value) {
      state.createAnEnemy = value
    },
  },
}
