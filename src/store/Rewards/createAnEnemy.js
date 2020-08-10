export default {
  strict: true,
  namespaced: true,
  state: {
    createAnEnemy: 'no',
  },
  mutations: {
    setCreateAnEnemy(state, value) {
      state.createAnEnemy = value
    },
  },
}
