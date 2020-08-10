export default {
  strict: true,
  namespaced: true,
  state: {
    createAnEnemy: 'false',
  },
  mutations: {
    setCreateAnEnemy(state, value) {
      state.createAnEnemy = value
    },
  },
}
