export default {
  strict: true,
  namespaced: true,
  state: {
    betaAccess: 'no',
  },
  mutations: {
    setBetaAccess(state, value) {
      state.betaAccess = value
    },
  },
}
