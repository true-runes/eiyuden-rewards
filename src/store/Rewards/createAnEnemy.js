export default {
  strict: true,
  namespaced: true,
  state: {
    createAnEnemy: '',
  },
  mutations: {
    setCreateAnEnemy(state, value) {
      state.createAnEnemy = value
    },
  },
}
