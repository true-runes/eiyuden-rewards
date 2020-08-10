export default {
  strict: true,
  namespaced: true,
  state: {
    betaAccess: 'true',
  },
  mutations: {
    setBetaAccess(state, value) {
      state.betaAccess = value
    },
  },
}
