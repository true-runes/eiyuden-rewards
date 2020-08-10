export default {
  strict: true,
  namespaced: true,
  state: {
    physicalGame: '',
  },
  mutations: {
    setPhysicalGame(state, value) {
      state.physicalGame = value
    },
  },
}
