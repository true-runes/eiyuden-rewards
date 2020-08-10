export default {
  strict: true,
  namespaced: true,
  state: {
    physicalGame: 'false',
  },
  mutations: {
    setPhysicalGame(state, value) {
      state.physicalGame = value
    },
  },
}
