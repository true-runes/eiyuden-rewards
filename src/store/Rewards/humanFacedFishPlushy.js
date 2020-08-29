export default {
  strict: true,
  namespaced: true,
  state: {
    humanFacedFishPlushy: 'whichever',
  },
  mutations: {
    setHumanFacedFishPlushy(state, value) {
      state.humanFacedFishPlushy = value
    },
  },
}
