export default {
  strict: true,
  namespaced: true,
  state: {
    becomeAHumanFacedFish: 'false',
  },
  mutations: {
    setBecomeAHumanFacedFish(state, value) {
      state.becomeAHumanFacedFish = value
    },
  },
}
