export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAHumanFacedFish: 'whichever',
  },
  mutations: {
    setBecomeAHumanFacedFish(state, value) {
      state.becomeAHumanFacedFish = value
    },
  },
}
