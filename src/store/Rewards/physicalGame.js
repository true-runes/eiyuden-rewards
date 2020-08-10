export default {
  strict: true,
  namespaced: true,
  state: {
    physicalGame: 'whichever',
  },
  mutations: {
    setPhysicalGame(state, value) {
      state.physicalGame = value
    },
  },
}
