export default {
  strict: true,
  namespaced: true,
  state: {
    physicalGame: 'no',
  },
  mutations: {
    setPhysicalGame(state, value) {
      state.physicalGame = value
    },
  },
}
